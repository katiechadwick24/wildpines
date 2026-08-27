const STORAGE_KEY = 'storytelling_intake_v1';

const state = {
  respondentName: '',
  answers: {},
  currentIndex: -1, // -1 = welcome screen, INTAKE_SECTIONS.length = review screen
  submittedAt: null,
};

const root = document.getElementById('app');

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.warn('Could not read saved progress', err);
    return null;
  }
}

function saveState() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        respondentName: state.respondentName,
        answers: state.answers,
        currentIndex: state.currentIndex,
        submittedAt: state.submittedAt,
        savedAt: new Date().toISOString(),
      })
    );
    flashSavedIndicator();
  } catch (err) {
    console.warn('Could not save progress', err);
  }
}

let saveTimeout = null;
function scheduleSave() {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(saveState, 400);
}

function flashSavedIndicator() {
  const el = document.getElementById('saved-indicator');
  if (!el) return;
  el.classList.remove('visible');
  // force reflow so the animation can restart
  void el.offsetWidth;
  el.classList.add('visible');
}

function totalQuestions() {
  return INTAKE_SECTIONS.reduce((sum, s) => sum + s.questions.length, 0);
}

function answeredCount() {
  return Object.values(state.answers).filter((v) => v && v.trim().length > 0).length;
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === 'class') node.className = value;
    else if (key === 'html') node.innerHTML = value;
    else if (key.startsWith('on') && typeof value === 'function') {
      node.addEventListener(key.slice(2), value);
    } else if (value !== null && value !== undefined) {
      node.setAttribute(key, value);
    }
  });
  (Array.isArray(children) ? children : [children]).forEach((child) => {
    if (child === null || child === undefined) return;
    node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  });
  return node;
}

function render() {
  root.innerHTML = '';
  root.appendChild(buildProgressBar());

  if (state.currentIndex === -1) {
    root.appendChild(buildWelcomeScreen());
  } else if (state.currentIndex === INTAKE_SECTIONS.length) {
    root.appendChild(buildReviewScreen());
  } else {
    root.appendChild(buildSectionScreen(INTAKE_SECTIONS[state.currentIndex]));
  }

  root.appendChild(buildSavedIndicator());
}

function buildSavedIndicator() {
  return el('div', { id: 'saved-indicator', class: 'saved-indicator' }, 'Saved');
}

function buildProgressBar() {
  if (state.currentIndex === -1) return el('div');
  const isReview = state.currentIndex === INTAKE_SECTIONS.length;
  const pct = isReview
    ? 100
    : Math.round(((state.currentIndex + 0.5) / INTAKE_SECTIONS.length) * 100);

  const wrap = el('div', { class: 'progress-wrap' });
  const label = el(
    'div',
    { class: 'progress-label' },
    isReview
      ? 'Almost done, review and send'
      : `Step ${state.currentIndex + 1} of ${INTAKE_SECTIONS.length}: ${INTAKE_SECTIONS[state.currentIndex].title}`
  );
  const bar = el('div', { class: 'progress-bar' }, el('div', { class: 'progress-fill', style: `width:${pct}%` }));
  wrap.appendChild(label);
  wrap.appendChild(bar);
  return wrap;
}

function buildWelcomeScreen() {
  const hasProgress = answeredCount() > 0;
  const wrap = el('div', { class: 'card welcome' });

  wrap.appendChild(el('h1', {}, hasProgress ? 'Welcome back!' : "Let's build your story"));

  if (hasProgress) {
    wrap.appendChild(
      el(
        'p',
        { class: 'subtitle' },
        `You've answered ${answeredCount()} of ${totalQuestions()} questions so far. Pick up right where you left off, whenever you're ready.`
      )
    );
    const btnRow = el('div', { class: 'btn-row' });
    btnRow.appendChild(
      el('button', { class: 'btn primary', onclick: () => goTo(findFirstUnfinishedSection()) }, 'Continue')
    );
    btnRow.appendChild(
      el('button', { class: 'btn ghost', onclick: () => confirmRestart() }, 'Start over')
    );
    wrap.appendChild(btnRow);
  } else {
    wrap.appendChild(
      el(
        'p',
        { class: 'subtitle' },
        "This is a space to tell us about your business: your story, your people, your voice, so we can turn it into copy for your website, Instagram, and blog. There are no wrong answers, and nothing here needs to be polished."
      )
    );
    wrap.appendChild(
      el('ul', { class: 'welcome-facts' }, [
        el('li', {}, `${INTAKE_SECTIONS.length} short sections, ${totalQuestions()} prompts total`),
        el(
          'li',
          {},
          'Everything autosaves as you go, close the tab or shut your laptop anytime, then come back on this same browser and device to pick up where you left off'
        ),
        el('li', {}, "Write freely. Fragments are fine, this isn't a test"),
      ])
    );
    wrap.appendChild(
      el('label', { class: 'field-label' }, [
        "What should we call you?",
        el('input', {
          type: 'text',
          class: 'text-input',
          value: state.respondentName,
          placeholder: 'Your name',
          oninput: (e) => {
            state.respondentName = e.target.value;
            scheduleSave();
          },
        }),
      ])
    );
    wrap.appendChild(
      el('div', { class: 'btn-row' }, el('button', { class: 'btn primary', onclick: () => goTo(0) }, "Let's go →"))
    );
  }

  return wrap;
}

function findFirstUnfinishedSection() {
  for (let i = 0; i < INTAKE_SECTIONS.length; i++) {
    const section = INTAKE_SECTIONS[i];
    const hasUnanswered = section.questions.some((q) => !state.answers[q.id] || !state.answers[q.id].trim());
    if (hasUnanswered) return i;
  }
  return 0;
}

function confirmRestart() {
  if (confirm('This will clear everything you\'ve written so far. Are you sure?')) {
    state.answers = {};
    state.respondentName = '';
    state.currentIndex = -1;
    saveState();
    render();
  }
}

function buildSectionScreen(section) {
  const wrap = el('div', { class: 'card' });
  wrap.appendChild(el('h1', {}, section.title));
  if (section.subtitle) wrap.appendChild(el('p', { class: 'subtitle' }, section.subtitle));

  section.questions.forEach((q) => {
    const field = el('div', { class: 'field' });
    field.appendChild(el('label', { class: 'field-label', for: q.id }, q.label));
    if (q.helper) field.appendChild(el('p', { class: 'field-helper' }, q.helper));

    const inputEl =
      q.type === 'textarea'
        ? el('textarea', {
            id: q.id,
            class: 'text-input textarea',
            rows: '4',
            placeholder: 'Type your answer...',
          })
        : el('input', {
            id: q.id,
            type: 'text',
            class: 'text-input',
            placeholder: 'Type your answer...',
          });

    inputEl.value = state.answers[q.id] || '';
    inputEl.addEventListener('input', (e) => {
      state.answers[q.id] = e.target.value;
      scheduleSave();
    });

    field.appendChild(inputEl);
    wrap.appendChild(field);
  });

  const btnRow = el('div', { class: 'btn-row spread' });
  btnRow.appendChild(
    el(
      'button',
      { class: 'btn ghost', onclick: () => goTo(state.currentIndex - 1), disabled: state.currentIndex === 0 ? 'true' : null },
      '← Back'
    )
  );
  const isLast = state.currentIndex === INTAKE_SECTIONS.length - 1;
  btnRow.appendChild(
    el('button', { class: 'btn primary', onclick: () => goTo(state.currentIndex + 1) }, isLast ? 'Review my answers →' : 'Next →')
  );
  wrap.appendChild(btnRow);

  return wrap;
}

function goTo(index) {
  saveState();
  state.currentIndex = Math.max(0, Math.min(index, INTAKE_SECTIONS.length));
  saveState();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
}

function buildReviewScreen() {
  const wrap = el('div', { class: 'card' });
  wrap.appendChild(el('h1', {}, `You did it${state.respondentName ? ', ' + state.respondentName : ''}!`));
  wrap.appendChild(
    el(
      'p',
      { class: 'subtitle' },
      `You answered ${answeredCount()} of ${totalQuestions()} prompts. Skim back through below, click any section to edit it, then send your answers over when you're happy with them.`
    )
  );

  INTAKE_SECTIONS.forEach((section, idx) => {
    const sectionAnswered = section.questions.filter((q) => state.answers[q.id] && state.answers[q.id].trim()).length;
    const summary = el('details', { class: 'review-section' });
    summary.appendChild(
      el(
        'summary',
        {},
        `${section.title} (${sectionAnswered}/${section.questions.length} answered)`
      )
    );
    const body = el('div', { class: 'review-body' });
    section.questions.forEach((q) => {
      body.appendChild(el('div', { class: 'review-q' }, q.label));
      body.appendChild(
        el('div', { class: 'review-a' }, state.answers[q.id] && state.answers[q.id].trim() ? state.answers[q.id] : '(not answered yet)')
      );
    });
    body.appendChild(el('button', { class: 'btn ghost small', onclick: () => goTo(idx) }, 'Edit this section'));
    summary.appendChild(body);
    wrap.appendChild(summary);
  });

  const finishRow = el('div', { class: 'finish-box' });
  finishRow.appendChild(el('h2', {}, 'Send it over'));

  if (state.submittedAt) {
    finishRow.appendChild(
      el(
        'p',
        { class: 'subtitle' },
        `Sent on ${new Date(state.submittedAt).toLocaleString()}. Made more changes? Hit send again, it just sends the latest version.`
      )
    );
  } else {
    finishRow.appendChild(
      el('p', { class: 'subtitle' }, "Hit send and your answers go straight to Katie. Nothing else for you to do.")
    );
  }

  finishRow.appendChild(el('div', { id: 'submit-status' }));

  const btnRow = el('div', { class: 'btn-row' });
  btnRow.appendChild(
    el('button', { id: 'submit-btn', class: 'btn primary', onclick: handleSubmit }, state.submittedAt ? 'Send again' : 'Send my answers')
  );
  btnRow.appendChild(el('button', { class: 'btn ghost', onclick: downloadAnswers }, 'Download a copy'));
  btnRow.appendChild(el('button', { class: 'btn ghost', onclick: copyAnswers }, 'Copy everything'));
  finishRow.appendChild(btnRow);
  finishRow.appendChild(
    el(
      'p',
      { class: 'small-note' },
      "Your answers also stay saved in this browser, so you can come back and update them later. Sending again just updates what Katie has."
    )
  );
  wrap.appendChild(finishRow);

  return wrap;
}

function handleSubmit() {
  const statusEl = document.getElementById('submit-status');
  const btn = document.getElementById('submit-btn');
  if (btn) btn.setAttribute('disabled', 'true');
  if (statusEl) statusEl.textContent = 'Sending…';

  submitToKatie()
    .then(() => {
      state.submittedAt = new Date().toISOString();
      saveState();
      render();
    })
    .catch((err) => {
      console.warn('Submit failed', err);
      if (btn) btn.removeAttribute('disabled');
      if (statusEl) {
        statusEl.textContent = "Couldn't send automatically. No worries, use Download or Copy below and email it instead.";
        statusEl.classList.add('error-note');
      }
    });
}

function submitToKatie() {
  const md = compileMarkdown();
  const body = new URLSearchParams();
  body.append('form-name', 'storytelling-intake');
  body.append('respondent_name', state.respondentName || '');
  body.append('business_name', state.answers.business_name || '');
  body.append('submitted_at', new Date().toLocaleString());
  body.append('full_transcript', md);

  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  }).then((res) => {
    if (!res.ok) throw new Error(`Submit failed with status ${res.status}`);
  });
}

function compileMarkdown() {
  const lines = [];
  lines.push(`# Storytelling Intake: ${state.respondentName || 'Untitled'}`);
  lines.push(`_Compiled ${new Date().toLocaleString()}_`);
  lines.push('');
  INTAKE_SECTIONS.forEach((section) => {
    lines.push(`## ${section.title}`);
    section.questions.forEach((q) => {
      lines.push(`**${q.label}**`);
      lines.push(state.answers[q.id] && state.answers[q.id].trim() ? state.answers[q.id].trim() : '_Not answered_');
      lines.push('');
    });
  });
  return lines.join('\n');
}

function downloadAnswers() {
  const md = compileMarkdown();
  const blob = new Blob([md], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const namePart = (state.respondentName || 'intake').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  a.href = url;
  a.download = `${namePart}-storytelling-intake.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function copyAnswers() {
  const md = compileMarkdown();
  navigator.clipboard
    .writeText(md)
    .then(() => alert('Copied! Paste it into an email whenever you\'re ready.'))
    .catch(() => alert('Could not copy automatically. Try the download button instead.'));
}

function init() {
  const saved = loadState();
  if (saved) {
    state.respondentName = saved.respondentName || '';
    state.answers = saved.answers || {};
    state.submittedAt = saved.submittedAt || null;
    state.currentIndex = -1; // always land on welcome-back screen, never mid-form
  }
  render();
}

init();
