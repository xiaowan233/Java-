/* =========================================================
   小玩同学的Java学习站 — 页面交互
   1. 渲染关卡内容
   2. 学习进度（localStorage）
   3. 课程目录二级菜单
   4. 代码复制、小测验
   5. CSS 实验室
   6. 主题、滚动与动效
   ========================================================= */

const CHAPTERS = Array.isArray(window.COURSE_CHAPTERS) ? window.COURSE_CHAPTERS : [];
const TOTAL_CHAPTERS = CHAPTERS.length;
const PROGRESS_KEY = "java-start-progress";
const SOLVED_KEY = "java-start-input-solved";
const CODE_DONE_KEY = "java-start-code-solved";
const CODE_DRAFT_PREFIX = "java-start-code-draft-";
const THEME_KEY = "java-start-theme";
const PHASES = {
  1: [1, 2, 3, 4, 5],
  2: [6, 7],
  3: [8, 9, 10],
  4: [11, 12],
  5: [13, 14, 15, 16],
  6: [17, 18],
};

function pad2(number) {
  return String(number).padStart(2, "0");
}

function lessonUrl(id) {
  return `lesson.html?level=${pad2(id)}`;
}

function getRequestedLesson() {
  const params = new URLSearchParams(window.location.search);
  const requested = Number(params.get("level"));
  if (Number.isInteger(requested) && requested >= 1 && requested <= TOTAL_CHAPTERS) {
    return requested;
  }
  return 1;
}

const CURRENT_LESSON_ID = getRequestedLesson();

/* ---------- 小工具 ---------- */

function escapeHtml(value) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return String(value).replace(/[&<>"']/g, (character) => entities[character]);
}

function highlightJava(source) {
  const pattern = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*")|\b(public|private|protected|static|final|class|interface|enum|extends|implements|new|return|void|if|else|for|while|do|switch|case|default|break|continue|try|catch|finally|throw|throws|import|package|this|super|null|true|false|boolean|int|double|char|long|short|byte|float)\b|\b([A-Z][A-Za-z0-9_]*)\b|\b(\d+(?:\.\d+)?)\b/g;
  let html = "";
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(source)) !== null) {
    html += escapeHtml(source.slice(lastIndex, match.index));

    if (match[1]) {
      html += `<span class="tok-comment">${escapeHtml(match[1])}</span>`;
    } else if (match[2]) {
      html += `<span class="tok-string">${escapeHtml(match[2])}</span>`;
    } else if (match[3]) {
      html += `<span class="tok-keyword">${escapeHtml(match[3])}</span>`;
    } else if (match[4]) {
      html += `<span class="tok-type">${escapeHtml(match[4])}</span>`;
    } else if (match[5]) {
      html += `<span class="tok-number">${escapeHtml(match[5])}</span>`;
    }

    lastIndex = pattern.lastIndex;
  }

  html += escapeHtml(source.slice(lastIndex));
  return html;
}

function highlightCss(source) {
  const pattern = /(\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*")|(#[0-9a-fA-F]{3,8})|(@[a-zA-Z-]+)|(-{0,2}[a-zA-Z][a-zA-Z0-9-]*)(?=\s*:)|([a-zA-Z][a-zA-Z0-9-]*)(?=\s*\{)|(\b\d+(?:\.\d+)?(?:px|rem|em|%|s|ms|deg|fr|vh|vw)?\b)/g;
  let html = "";
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(source)) !== null) {
    html += escapeHtml(source.slice(lastIndex, match.index));

    if (match[1]) {
      html += `<span class="tok-comment">${escapeHtml(match[1])}</span>`;
    } else if (match[2]) {
      html += `<span class="tok-string">${escapeHtml(match[2])}</span>`;
    } else if (match[3]) {
      html += `<span class="tok-number">${escapeHtml(match[3])}</span>`;
    } else if (match[4]) {
      html += `<span class="tok-function">${escapeHtml(match[4])}</span>`;
    } else if (match[5]) {
      html += `<span class="tok-keyword">${escapeHtml(match[5])}</span>`;
    } else if (match[6]) {
      html += `<span class="tok-type">${escapeHtml(match[6])}</span>`;
    } else if (match[7]) {
      html += `<span class="tok-number">${escapeHtml(match[7])}</span>`;
    }

    lastIndex = pattern.lastIndex;
  }

  html += escapeHtml(source.slice(lastIndex));
  return html;
}

/* ---------- 渲染：代码与输出 ---------- */
function codeBlock(code, filename, language) {
  const safeFilename = escapeHtml(filename || "Example.java");
  const safeLanguage = escapeHtml((language || "java").toUpperCase());
  const highlighted = language === "css" ? highlightCss(code) : highlightJava(code);

  return `<figure class="code-card">
    <figcaption class="code-head">
      <span class="code-lang">${safeLanguage}</span>
      <span class="code-filename">${safeFilename}</span>
      <button class="copy-btn" type="button" aria-label="复制代码">复制</button>
    </figcaption>
    <pre tabindex="0"><code>${highlighted}</code></pre>
  </figure>`;
}

function outputBlock(output) {
  return `<div class="output-card">
    <div class="output-head"><span class="output-dot" aria-hidden="true"></span>运行结果</div>
    <pre>${escapeHtml(output)}</pre>
  </div>`;
}

function renderStep(step, index) {
  const code = step.code ? codeBlock(step.code, step.filename, step.language) : "";
  const output = step.output ? outputBlock(step.output) : "";

  return `<section class="lesson-step">
    <div class="step-top">
      <span class="step-label">STEP ${pad2(index + 1)}</span>
      <h3>${step.title}</h3>
    </div>
    <div class="step-body">
      ${step.html}
      ${code}
      ${output}
    </div>
  </section>`;
}

/* ---------- 渲染：CSS 小课堂与测验 ---------- */
function renderCssLesson(cssLesson) {
  return `<div class="css-mini">
    <div class="css-mini-head">
      <span class="css-badge" aria-hidden="true">CSS</span>
      <h3>${cssLesson.title}</h3>
    </div>
    <p>${cssLesson.intro}</p>
    <div class="css-demo">${cssLesson.demo}</div>
    <pre class="mini-code" tabindex="0"><code>${highlightCss(cssLesson.code)}</code></pre>
    <p class="css-note">${cssLesson.note}</p>
  </div>`;
}

function renderQuiz(quiz, chapterId) {
  const letters = ["A", "B", "C", "D"];
  const options = quiz.options
    .map(
      (option, index) => `<button class="quiz-option" type="button" data-option="${index}">
        <span class="quiz-letter" aria-hidden="true">${letters[index]}</span>
        <span>${option}</span>
      </button>`
    )
    .join("");

  return `<div class="quiz-card" data-quiz data-chapter="${chapterId}">
    <div class="quiz-top"><span>QUICK CHECK</span><span>30 SEC</span></div>
    <h3 class="quiz-question">${quiz.question}</h3>
    <div class="quiz-options">${options}</div>
    <p class="quiz-feedback" aria-live="polite" hidden></p>
  </div>`;
}

/* ---------- 渲染：输入练习 ---------- */
function normalizeAnswer(value) {
  return String(value)
    .trim()
    .replace(/[“”]/g, '"')
    .replace(/[「『]/g, '"')
    .replace(/[」』]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/（/g, "(")
    .replace(/）/g, ")")
    .replace(/：/g, ":")
    .replace(/；/g, ";")
    .replace(/，/g, ",")
    .replace(/\s+/g, "")
    .replace(/;$/, "");
}

function isAnswerCorrect(value, exercise) {
  const normalized = normalizeAnswer(value);
  if (!normalized) {
    return false;
  }
  return exercise.answers.some((answer) => normalizeAnswer(answer) === normalized);
}

function exerciseStateKey(chapterId, exerciseIndex) {
  return `${chapterId}-${exerciseIndex}`;
}

function renderInputPractice(chapter) {
  if (!Array.isArray(chapter.exercises) || !chapter.exercises.length) {
    return "";
  }

  const solvedCount = chapter.exercises.filter((exercise, index) =>
    solvedExercises.has(exerciseStateKey(chapter.id, index))
  ).length;

  const exercises = chapter.exercises
    .map((exercise, index) => {
      const key = exerciseStateKey(chapter.id, index);
      const isSolved = solvedExercises.has(key);
      const tagClass = exercise.tag === "CSS" ? "css" : "java";
      const codeClass = exercise.code ? " is-code" : "";

      return `<div class="exercise${isSolved ? " is-solved" : ""}" data-exercise-index="${index}">
        <div class="exercise-top">
          <span class="exercise-tag exercise-tag--${tagClass}">${exercise.tag}</span>
          <p class="exercise-prompt" id="exercise-prompt-${chapter.id}-${index}">${exercise.prompt}</p>
          <span class="exercise-solved-mark" aria-hidden="true">✓</span>
        </div>
        <div class="answer-row">
          <input
            class="answer-input${codeClass}"
            id="answer-${chapter.id}-${index}"
            type="text"
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
            placeholder="${escapeHtml(exercise.placeholder || "在这里输入答案")}"
            aria-labelledby="exercise-prompt-${chapter.id}-${index}"
            aria-describedby="answer-feedback-${chapter.id}-${index}"
            data-answer-input
          >
          <button class="check-answer" type="button" data-check-answer>检查</button>
        </div>
        <p class="exercise-feedback${isSolved ? " is-right" : ""}" id="answer-feedback-${chapter.id}-${index}" aria-live="polite"${isSolved ? "" : " hidden"}>${isSolved ? "<strong>已答对。</strong>你可以再输入一次复习。" : ""}</p>
        <details class="exercise-hint">
          <summary>卡住了？看提示</summary>
          <p>${exercise.hint}</p>
        </details>
      </div>`;
    })
    .join("");

  return `<section class="input-practice" data-practice="${chapter.id}" aria-labelledby="practice-title-${chapter.id}">
    <div class="write-head">
      <div>
        <p class="write-kicker">TYPE IT OUT · 输入练习</p>
        <h3 id="practice-title-${chapter.id}">别只选，自己写出来。</h3>
      </div>
      <span class="write-count" data-write-count="${chapter.id}">${solvedCount} / ${chapter.exercises.length} 已答对</span>
    </div>
    <p class="write-intro">两个小问题，一次一题慢慢来。输入后按 Enter 或点「检查」；答错可以重试，连续答错两次会显示参考答案。</p>
    <div class="exercise-list">${exercises}</div>
  </section>`;
}

function renderCodeWorkbench(chapter) {
  const task = chapter.codeTask;
  if (!task) {
    return "";
  }

  const isSolved = codeDone.has(String(chapter.id));
  const requirements = task.requirements.map((item) => `<li>${item}</li>`).join("");

  return `<section class="code-workbench${isSolved ? " is-code-done" : ""}" data-code-task="${chapter.id}" id="code-workbench">
    <div class="code-workbench-head">
      <div>
        <p class="code-workbench-kicker">CODE LAB · 写代码</p>
        <h3>${task.title}</h3>
      </div>
      <span class="code-task-status" data-code-status>${isSolved ? "已通过结构检查" : "待检查"}</span>
    </div>
    <p class="code-workbench-desc">${task.description}</p>
    <div class="code-steps-head"><span>任务拆解</span><span>${task.requirements.length} 步</span></div>
    <ol class="code-steps" aria-label="任务拆解">${requirements}</ol>

    <div class="code-editor">
      <div class="code-editor-bar">
        <span class="code-editor-file">${task.filename}</span>
        <span class="code-save-status" data-save-status>草稿自动保存</span>
      </div>
      <div class="code-editor-shell">
        <pre class="code-gutter" data-code-gutter aria-hidden="true"></pre>
        <textarea
          class="code-input"
          data-code-input
          wrap="off"
          spellcheck="false"
          autocomplete="off"
          autocapitalize="off"
          aria-label="编写 ${escapeHtml(task.filename)} 的 Java 代码"
        >${escapeHtml(task.starter)}</textarea>
      </div>
      <div class="code-editor-foot">
        <span data-code-cursor>第 1 行 · 第 1 列</span>
        <span>Tab 缩进 · Ctrl + Enter 检查</span>
      </div>
    </div>

    <div class="code-actions">
      <button class="code-check" type="button" data-check-code>检查代码</button>
      <button class="code-action" type="button" data-copy-code>复制代码</button>
      <button class="code-action" type="button" data-download-code>下载 .java</button>
      <button class="code-action" type="button" data-reset-code>重置</button>
      <button class="code-solution-toggle" type="button" data-toggle-solution aria-expanded="false">查看参考答案</button>
    </div>

    ${task.hints && task.hints.length ? `<div class="code-hint">
      <button class="code-hint-button" type="button" data-code-hint aria-expanded="false">给我一点提示</button>
      <p class="code-hint-text" data-code-hint-text aria-live="polite" hidden></p>
    </div>` : ""}

    <div class="code-results" data-code-results aria-live="polite" hidden>
      <div class="code-results-head">
        <span>结构检查</span>
        <strong data-code-result></strong>
      </div>
      <div class="code-result-track" aria-hidden="true"><span data-code-result-bar></span></div>
      <ul class="code-check-list" data-code-checks></ul>
      <p class="code-results-note">这是结构检查，不是 Java 编译。通过后请复制或下载代码，到 IDEA / JDK 中实际运行。</p>
    </div>

    <div class="code-expected">
      <span>期望输出</span>
      <pre>${escapeHtml(task.expected)}</pre>
    </div>

    <div class="code-solution" data-code-solution hidden>
      <div class="code-solution-head"><span>参考实现</span><em>先自己写，再对照</em></div>
      <pre><code>${highlightJava(task.reference)}</code></pre>
    </div>

    <details class="code-run-help">
      <summary>写完后，怎么在电脑上运行？</summary>
      <ol>
        <li>点「下载 .java」或「复制代码」，在 IDEA / VS Code 中打开。</li>
        <li>也可以在文件所在目录打开终端，执行 <code>javac ${escapeHtml(task.filename)}</code>。</li>
        <li>编译成功后执行 <code>java ${escapeHtml(task.filename.replace(/\.java$/i, ""))}</code>，注意不要带 <code>.java</code>。</li>
      </ol>
    </details>

    <p class="code-workbench-note">浏览器不能直接执行 Java。写完后点「下载 .java」或「复制代码」，在 IDEA 里运行，再把实际输出和上面的「期望输出」对照。</p>
  </section>`;
}
/* ---------- 渲染：完整章节 ---------- */
function renderChapter(chapter, index) {
  const previous = CHAPTERS[index - 1];
  const next = CHAPTERS[index + 1];
  const chapterId = pad2(chapter.id);

  const skills = chapter.skills.map((skill) => `<li>${skill}</li>`).join("");
  const keys = chapter.keys.map((key) => `<li>${key}</li>`).join("");
  const steps = chapter.steps.map(renderStep).join("");

  const previousLink = previous
    ? `<a class="pager-link pager-prev" href="${lessonUrl(previous.id)}">
        <span>← 上一关</span>
        <strong>${previous.title}</strong>
      </a>`
    : `<button class="pager-link pager-prev" type="button" data-course-menu-toggle aria-haspopup="dialog" aria-expanded="false" aria-controls="courseMenu">
        <span>← 课程目录</span>
        <strong>打开菜单选关</strong>
      </button>`;

  const nextLink = next
    ? `<a class="pager-link pager-next" href="${lessonUrl(next.id)}">
        <span>下一关 →</span>
        <strong>${next.title}</strong>
      </a>`
    : `<a class="pager-link pager-next" href="index.html#finish">
        <span>课程结束 · 下一站</span>
        <strong>查看通关总结 →</strong>
      </a>`;

  return `<article class="chapter" id="ch-${chapterId}" data-chapter="${chapter.id}">
    <header class="chapter-header">
      <div class="chapter-number" aria-hidden="true">${chapterId}</div>
      <div class="chapter-heading">
        <p class="chapter-kicker">${chapter.phaseLabel} <span>· ${chapter.minutes} MIN</span></p>
        <h2>${chapter.title}</h2>
        <p class="chapter-lead">${chapter.lead}</p>
        <ul class="skill-list" aria-label="本关知识点">${skills}</ul>
        <a class="chapter-code-jump" href="#code-workbench">直接去写代码 <span aria-hidden="true">↓</span></a>
      </div>
      <button class="done-btn" type="button" data-done="${chapter.id}" aria-pressed="false" aria-label="标记第 ${chapter.id} 关为完成">
        <span class="done-icon" aria-hidden="true"></span>
        <span class="done-label">标记完成</span>
      </button>
    </header>

    <div class="chapter-grid">
      <div class="chapter-main">
        ${steps}
        ${renderInputPractice(chapter)}
        ${renderCodeWorkbench(chapter)}
        <div class="challenge">
          <span class="challenge-label">轮到你 · 动手</span>
          <h3>别只看，改一点东西。</h3>
          ${chapter.challenge}
        </div>
      </div>

      <aside class="chapter-aside" aria-label="本关补充">
        <div class="key-card">
          <h3>这一关的钥匙</h3>
          <ul>${keys}</ul>
        </div>
        ${renderCssLesson(chapter.css)}
        ${renderQuiz(chapter.quiz, chapter.id)}
      </aside>
    </div>

    <nav class="chapter-pager" aria-label="课程翻页">
      ${previousLink}
      ${nextLink}
    </nav>
  </article>`;
}

function renderChapters() {
  const container = document.getElementById("lessonRoot");
  if (!container) {
    return;
  }

  if (!TOTAL_CHAPTERS) {
    container.innerHTML = `<div class="verify-card"><div class="verify-copy"><h3>课程内容没有加载成功。</h3><p>请确认 chapters.js 与 lesson.html 在同一个文件夹中，然后刷新页面。</p></div></div>`;
    return;
  }

  const chapter = CHAPTERS.find((item) => item.id === CURRENT_LESSON_ID) || CHAPTERS[0];
  const chapterIndex = CHAPTERS.indexOf(chapter);

  container.innerHTML = renderChapter(chapter, chapterIndex);
  const article = container.querySelector(".chapter");
  if (article) {
    article.classList.add("is-visible");
  }

  document.title = `第 ${pad2(chapter.id)} 关 · ${chapter.title}｜小玩同学的Java学习站`;
  document.body.dataset.lesson = String(chapter.id);

  const pageHeading = document.getElementById("lessonPageHeading");
  if (pageHeading) {
    pageHeading.textContent = `第 ${pad2(chapter.id)} 关：${chapter.title}`;
  }

  const crumb = document.getElementById("lessonCrumb");
  if (crumb) {
    crumb.textContent = `第 ${pad2(chapter.id)} 关 / ${TOTAL_CHAPTERS}`;
  }

  if (new URLSearchParams(window.location.search).get("level") !== pad2(chapter.id)) {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("level", pad2(chapter.id));
      window.history.replaceState(null, "", url);
    } catch (error) {
      /* file:// 或受限环境里改不了地址栏也不影响学习。 */
    }
  }
}

function renderSidebar() {
  const nav = document.getElementById("chapterNav");
  if (!nav) {
    return;
  }

  nav.innerHTML = CHAPTERS.map(
    (chapter) => `<a class="nav-item${chapter.id === CURRENT_LESSON_ID ? " is-active" : ""}" href="${lessonUrl(chapter.id)}" data-nav="${chapter.id}"${chapter.id === CURRENT_LESSON_ID ? ' aria-current="page"' : ""}>
      <span class="nav-num">${pad2(chapter.id)}</span>
      <span class="nav-title">${chapter.title}</span>
      <span class="nav-check" aria-hidden="true">✓</span>
    </a>`
  ).join("");
}

/* ---------- 课程目录二级菜单 ---------- */
function getCourseMenuGroups() {
  return Object.entries(PHASES)
    .map(([phase, ids]) => {
      const chapters = ids
        .map((id) => CHAPTERS.find((chapter) => chapter.id === id))
        .filter(Boolean);
      const label = chapters[0]?.phaseLabel || `阶段 ${phase}`;
      const parts = label.split("·").map((part) => part.trim());
      return {
        phase: Number(phase),
        number: parts[0] || `阶段 ${phase}`,
        name: parts.slice(1).join(" · ") || "课程阶段",
        chapters,
      };
    })
    .filter((group) => group.chapters.length);
}

function renderCourseMenu() {
  const body = document.getElementById("courseMenuBody");
  if (!body) {
    return;
  }

  if (!TOTAL_CHAPTERS) {
    body.innerHTML = `<p class="course-menu-empty">课程内容没有加载成功，请刷新页面后重试。</p>`;
    return;
  }

  const currentId = Number(document.body.dataset.lesson);
  body.innerHTML = getCourseMenuGroups()
    .map(
      (group) => `<section class="course-menu-phase" data-phase="${group.phase}" aria-labelledby="courseMenuPhase${group.phase}">
        <div class="course-menu-phase-head">
          <span class="course-menu-phase-no">${escapeHtml(group.number)}</span>
          <h3 id="courseMenuPhase${group.phase}">${escapeHtml(group.name)}</h3>
          <span class="course-menu-phase-count" data-menu-phase-count="${group.phase}">0 / ${group.chapters.length}</span>
        </div>
        <div class="course-menu-list">
          ${group.chapters
            .map((chapter) => {
              const isCurrent = chapter.id === currentId;
              return `<a class="course-menu-item${isCurrent ? " is-current" : ""}" href="${lessonUrl(chapter.id)}" data-menu-level="${chapter.id}"${isCurrent ? ' aria-current="page"' : ""}>
                <span class="course-menu-num">${pad2(chapter.id)}</span>
                <span class="course-menu-copy">
                  <strong>${escapeHtml(chapter.title)}</strong>
                  <small><span class="course-menu-css">${escapeHtml(chapter.css?.title || "CSS 小课堂")}</span><span>${chapter.minutes} min</span></small>
                </span>
                <span class="course-menu-state" aria-hidden="true"><span class="course-menu-check">✓</span><span class="course-menu-arrow">→</span></span>
              </a>`;
            })
            .join("")}
        </div>
      </section>`
    )
    .join("");
}

/* ---------- 学习进度 ---------- */
function loadCompleted() {
  try {
    const parsed = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "[]");
    if (!Array.isArray(parsed)) {
      return new Set();
    }
    return new Set(parsed.map(Number).filter((id) => Number.isInteger(id) && id >= 1 && id <= TOTAL_CHAPTERS));
  } catch (error) {
    return new Set();
  }
}

const completedChapters = loadCompleted();

function loadSolvedExercises() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SOLVED_KEY) || "[]");
    return new Set(Array.isArray(parsed) ? parsed.filter((key) => typeof key === "string") : []);
  } catch (error) {
    return new Set();
  }
}

const solvedExercises = loadSolvedExercises();
const answerAttempts = new Map();

function loadCodeDone() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CODE_DONE_KEY) || "[]");
    return new Set(Array.isArray(parsed) ? parsed.map(String) : []);
  } catch (error) {
    return new Set();
  }
}

const codeDone = loadCodeDone();

function saveCodeDone() {
  try {
    localStorage.setItem(CODE_DONE_KEY, JSON.stringify([...codeDone]));
  } catch (error) {
    /* 无法写入时只保留当前页面的通过状态。 */
  }
}

function saveSolvedExercises() {
  try {
    localStorage.setItem(SOLVED_KEY, JSON.stringify([...solvedExercises]));
  } catch (error) {
    /* 无法写入时，只在当前页面保留答题状态。 */
  }
}

function updatePracticeCount(chapterId) {
  const section = document.querySelector(`[data-practice="${chapterId}"]`);
  if (!section) {
    return;
  }

  const exercises = [...section.querySelectorAll(".exercise")];
  const solved = exercises.filter((exercise) =>
    solvedExercises.has(exerciseStateKey(chapterId, Number(exercise.dataset.exerciseIndex)))
  ).length;
  const counter = section.querySelector(`[data-write-count="${chapterId}"]`);
  if (counter) {
    counter.textContent = `${solved} / ${exercises.length} 已答对`;
  }
}

function saveCompleted() {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify([...completedChapters].sort((a, b) => a - b)));
  } catch (error) {
    /* 隐私模式下无法写入时，进度仅当前页面有效。 */
  }
}

function updateProgressUI() {
  const count = completedChapters.size;
  const percent = TOTAL_CHAPTERS ? Math.round((count / TOTAL_CHAPTERS) * 100) : 0;

  const headerProgress = document.getElementById("headerProgress");
  const sidebarCount = document.getElementById("sidebarCount");
  const progressPercent = document.getElementById("progressPercent");
  const progressOrbit = document.getElementById("progressOrbit");

  if (headerProgress) {
    headerProgress.textContent = `${count} / ${TOTAL_CHAPTERS}`;
  }
  if (sidebarCount) {
    sidebarCount.textContent = `${count} / ${TOTAL_CHAPTERS} 关`;
  }
  if (progressPercent) {
    progressPercent.textContent = `${percent}%`;
  }
  if (progressOrbit) {
    progressOrbit.style.setProperty("--p", String(percent));
  }

  const homeProgress = document.getElementById("homeProgress");
  const homeProgressBar = document.getElementById("homeProgressBar");
  const homeProgressNote = document.getElementById("homeProgressNote");
  const continueBtn = document.getElementById("continueBtn");
  const continueLabel = document.getElementById("continueLabel");
  const menuProgress = document.getElementById("courseMenuProgress");
  const menuBar = document.getElementById("courseMenuBar");
  const menuNote = document.getElementById("courseMenuNote");
  const menuStart = document.getElementById("courseMenuStart");
  const menuStartLabel = document.getElementById("courseMenuStartLabel");
  const nextChapter = CHAPTERS.find((chapter) => !completedChapters.has(chapter.id));
  const nextId = nextChapter ? nextChapter.id : CHAPTERS[0]?.id || 1;

  if (homeProgress) {
    homeProgress.textContent = `${count} / ${TOTAL_CHAPTERS} 关`;
  }
  if (homeProgressBar) {
    homeProgressBar.style.width = `${percent}%`;
  }
  if (menuProgress) {
    menuProgress.textContent = `${count} / ${TOTAL_CHAPTERS} 关`;
  }
  if (menuBar) {
    menuBar.style.width = `${percent}%`;
  }
  if (homeProgressNote) {
    if (count === TOTAL_CHAPTERS) {
      homeProgressNote.textContent = `${TOTAL_CHAPTERS} 关全部完成。可以重新打开任意一关，把项目再升级一次。`;
    } else if (count === 0) {
      homeProgressNote.textContent = "从第 1 关开始，先把第一个程序跑起来。";
    } else {
      homeProgressNote.textContent = nextChapter
        ? `已完成 ${count} 关，下一站：第 ${pad2(nextId)} 关「${nextChapter.title}」。`
        : "继续下一关。";
    }
  }
  if (menuNote) {
    if (count === TOTAL_CHAPTERS) {
      menuNote.textContent = `${TOTAL_CHAPTERS} 关全部完成。随时回来复习，或者把项目再升级一次。`;
    } else if (count === 0) {
      menuNote.textContent = "从第 1 关开始，先把第一个程序跑起来。";
    } else {
      menuNote.textContent = nextChapter
        ? `已完成 ${count} 关，下一站：第 ${pad2(nextId)} 关「${nextChapter.title}」。`
        : "继续下一关。";
    }
  }
  if (continueBtn && continueLabel) {
    continueBtn.href = lessonUrl(nextId);
    continueLabel.textContent = count === 0 ? "从第 1 关开始" : count === TOTAL_CHAPTERS ? "重新复习第 1 关" : `继续第 ${pad2(nextId)} 关`;
  }
  if (menuStart && menuStartLabel) {
    menuStart.href = lessonUrl(nextId);
    menuStartLabel.textContent = count === 0 ? "从第 1 关开始" : count === TOTAL_CHAPTERS ? "重新复习第 1 关" : `继续第 ${pad2(nextId)} 关`;
  }

  document.querySelectorAll(".course-menu-item").forEach((item) => {
    item.classList.toggle("is-done", completedChapters.has(Number(item.dataset.menuLevel)));
  });

  document.querySelectorAll("[data-level-card]").forEach((card) => {
    const id = Number(card.dataset.levelCard);
    const isDone = completedChapters.has(id);
    const title = card.querySelector(".level-info strong")?.textContent.trim() || `第 ${id} 关`;
    card.classList.toggle("is-done", isDone);
    if (isDone) {
      card.setAttribute("aria-label", `第 ${id} 关：${title}，已完成，进入复习`);
    } else {
      card.removeAttribute("aria-label");
    }
  });

  document.querySelectorAll(".done-btn").forEach((button) => {
    const id = Number(button.dataset.done);
    const isDone = completedChapters.has(id);
    button.classList.toggle("is-done", isDone);
    button.setAttribute("aria-pressed", String(isDone));
    button.setAttribute("aria-label", isDone ? `第 ${id} 关已完成，点击取消完成` : `标记第 ${id} 关为完成`);

    const icon = button.querySelector(".done-icon");
    const label = button.querySelector(".done-label");
    if (icon) {
      icon.textContent = isDone ? "✓" : "";
    }
    if (label) {
      label.textContent = isDone ? "已完成" : "标记完成";
    }
  });

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("is-done", completedChapters.has(Number(item.dataset.nav)));
  });

  Object.entries(PHASES).forEach(([phase, ids]) => {
    const done = ids.filter((id) => completedChapters.has(id)).length;
    const countElement = document.querySelector(`[data-phase-count="${phase}"]`);
    const barElement = document.querySelector(`[data-phase-bar="${phase}"]`);
    const menuCountElement = document.querySelector(`[data-menu-phase-count="${phase}"]`);

    if (countElement) {
      countElement.textContent = `${done} / ${ids.length}`;
    }
    if (barElement) {
      barElement.style.width = `${(done / ids.length) * 100}%`;
    }
    if (menuCountElement) {
      menuCountElement.textContent = `${done} / ${ids.length}`;
    }
  });
}

function toggleChapterDone(id) {
  const chapter = CHAPTERS.find((item) => item.id === id);
  const wasDone = completedChapters.has(id);

  if (wasDone) {
    completedChapters.delete(id);
  } else {
    completedChapters.add(id);
  }

  saveCompleted();
  updateProgressUI();

  if (chapter) {
    showToast(wasDone ? `已取消「${chapter.title}」的完成标记` : `第 ${id} 关完成：${chapter.title}`);
    if (!wasDone && completedChapters.size === TOTAL_CHAPTERS) {
      window.setTimeout(() => showToast(`${TOTAL_CHAPTERS} 关全部完成。接下来，去把项目再升级一次。`), 800);
    }
  }
}

/* ---------- 主题 ---------- */
function applyTheme(theme, persist) {
  const isNight = theme === "night";
  document.documentElement.dataset.theme = isNight ? "night" : "day";

  if (persist) {
    try {
      localStorage.setItem(THEME_KEY, isNight ? "night" : "day");
    } catch (error) {
      /* 忽略存储失败。 */
    }
  }

  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.setAttribute("aria-pressed", String(isNight));
    toggle.setAttribute("aria-label", isNight ? "切换到浅色模式" : "切换到深色模式");
    const hiddenLabel = toggle.querySelector(".visually-hidden");
    if (hiddenLabel) {
      hiddenLabel.textContent = isNight ? "切换到浅色模式" : "切换到深色模式";
    }
  }

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) {
    themeMeta.setAttribute("content", isNight ? "#0e1a14" : "#f5efe3");
  }
}

function initTheme() {
  applyTheme(document.documentElement.dataset.theme === "night" ? "night" : "day", false);

  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "night" ? "day" : "night";
      applyTheme(nextTheme, true);
    });
  }
}

/* ---------- 提示条 ---------- */
let toastTimer = 0;

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) {
    return;
  }

  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2800);
}

/* ---------- 复制代码 ---------- */
async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (error) {
      /* 权限被拒时，继续尝试旧版复制方式。 */
    }
  }

  return copyTextFallback(text);
}

function copyTextFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    const copied = document.execCommand("copy");
    return copied ? Promise.resolve() : Promise.reject(new Error("copy command failed"));
  } catch (error) {
    return Promise.reject(error);
  } finally {
    textarea.remove();
  }
}

async function handleCopy(button) {
  const card = button.closest(".code-card");
  const code = card ? card.querySelector("pre code") : null;
  if (!code) {
    return;
  }

  try {
    await copyText(code.textContent);
    button.textContent = "已复制";
    button.classList.add("is-copied");
    window.setTimeout(() => {
      button.textContent = "复制";
      button.classList.remove("is-copied");
    }, 1500);
  } catch (error) {
    showToast("浏览器没有允许复制，请手动选择代码。");
  }
}

/* ---------- 小测验 ---------- */
function handleQuizOption(option) {
  const card = option.closest("[data-quiz]");
  if (!card) {
    return;
  }

  const chapterId = Number(card.dataset.chapter);
  const chapter = CHAPTERS.find((item) => item.id === chapterId);
  if (!chapter || !chapter.quiz) {
    return;
  }

  const chosenIndex = Number(option.dataset.option);
  const isCorrect = chosenIndex === chapter.quiz.answer;
  const options = [...card.querySelectorAll(".quiz-option")];
  const correctOption = options[chapter.quiz.answer];
  const feedback = card.querySelector(".quiz-feedback");

  options.forEach((item) => item.classList.remove("is-correct", "is-wrong"));
  option.classList.add(isCorrect ? "is-correct" : "is-wrong");

  if (!isCorrect && correctOption) {
    correctOption.classList.add("is-correct");
  }

  if (feedback) {
    feedback.hidden = false;
    feedback.classList.remove("is-right", "is-wrong");
    feedback.classList.add(isCorrect ? "is-right" : "is-wrong");
    feedback.innerHTML = `<strong>${isCorrect ? "答对了。" : "再想一步。"}</strong>${chapter.quiz.explain}`;
  }
}

/* ---------- 输入练习判定 ---------- */
function handleAnswerCheck(button) {
  const section = button.closest("[data-practice]");
  const exerciseElement = button.closest(".exercise");
  if (!section || !exerciseElement) {
    return;
  }

  const chapterId = Number(section.dataset.practice);
  const exerciseIndex = Number(exerciseElement.dataset.exerciseIndex);
  const chapter = CHAPTERS.find((item) => item.id === chapterId);
  const exercise = chapter?.exercises?.[exerciseIndex];
  const input = exerciseElement.querySelector(".answer-input");
  const feedback = exerciseElement.querySelector(".exercise-feedback");
  if (!exercise || !input || !feedback) {
    return;
  }

  const key = exerciseStateKey(chapterId, exerciseIndex);
  const value = input.value;
  const correct = isAnswerCorrect(value, exercise);

  feedback.hidden = false;
  feedback.classList.remove("is-right", "is-wrong");

  if (correct) {
    solvedExercises.add(key);
    saveSolvedExercises();
    answerAttempts.delete(key);
    exerciseElement.classList.add("is-solved");
    input.setAttribute("aria-invalid", "false");
    feedback.classList.add("is-right");
    feedback.innerHTML = `<strong>答对了。</strong>${exercise.explain}`;
    updatePracticeCount(chapterId);
    return;
  }

  const attempts = (answerAttempts.get(key) || 0) + 1;
  answerAttempts.set(key, attempts);
  input.setAttribute("aria-invalid", "true");
  feedback.classList.add("is-wrong");

  if (attempts >= 2) {
    feedback.innerHTML = `<strong>还不对。</strong>${exercise.hint}<br>参考答案：<code>${escapeHtml(exercise.answers[0])}</code>`;
  } else {
    feedback.innerHTML = "<strong>还不对，再试一次。</strong>注意大小写、括号和英文标点。";
  }
}

/* ---------- 代码工作台 ---------- */
function normalizeCodeForCheck(code) {
  return String(code).replace(/\s+/g, "");
}

function stripJavaForBalance(code) {
  return String(code)
    .replace(/"(?:\\.|[^"\\])*"/g, '""')
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/[^\n]*/g, "");
}

function evaluateCodeTask(task, code) {
  const checks = [];
  const codeWithoutComments = String(code)
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/[^\n]*/g, "");
  const normalized = normalizeCodeForCheck(codeWithoutComments);
  const todoLines = code
    .split("\n")
    .map((line, index) => (/TODO/i.test(line) ? index + 1 : 0))
    .filter(Boolean);

  checks.push({
    label: "完成代码，并移除所有 TODO 占位",
    pass: code.trim().length > 0 && todoLines.length === 0,
    detail: todoLines.length ? `第 ${todoLines.join("、")} 行还有 TODO，写完对应位置后删掉注释。` : "",
  });
  checks.push({
    label: "声明了 Java 类",
    pass: /\bclass\s+[A-Za-z_]\w*/.test(codeWithoutComments),
    detail: "没有找到 class 声明。先保留模板里的类，或检查 class 的拼写。",
  });
  checks.push({
    label: "保留了 main 方法入口",
    pass: normalized.includes("staticvoidmain(String[]args)"),
    detail: "main 签名应为 public static void main(String[] args)，注意大小写和方括号位置。",
  });

  const stripped = stripJavaForBalance(code);
  const braceOpen = (stripped.match(/\{/g) || []).length;
  const braceClose = (stripped.match(/\}/g) || []).length;
  const parenOpen = (stripped.match(/\(/g) || []).length;
  const parenClose = (stripped.match(/\)/g) || []).length;

  checks.push({
    label: "花括号 { } 成对",
    pass: braceOpen === braceClose && braceOpen > 0,
    detail: `当前有 ${braceOpen} 个 { 和 ${braceClose} 个 }，每打开一个代码块都要记得闭合。`,
  });
  checks.push({
    label: "圆括号 ( ) 成对",
    pass: parenOpen === parenClose && parenOpen > 0,
    detail: `当前有 ${parenOpen} 个 ( 和 ${parenClose} 个 )，检查方法调用和条件表达式。`,
  });

  (task.mustContain || []).forEach((rule) => {
    const pass = normalized.includes(normalizeCodeForCheck(rule.text));
    checks.push({
      label: rule.label,
      pass,
      detail: pass ? "" : `没有找到这段必要代码：<code>${escapeHtml(rule.text)}</code>`,
    });
  });

  (task.countContains || []).forEach((rule) => {
    const needle = normalizeCodeForCheck(rule.text);
    const count = needle ? normalized.split(needle).length - 1 : 0;
    checks.push({
      label: rule.label,
      pass: count >= rule.min,
      detail: count < rule.min ? `至少需要 ${rule.min} 处，当前只找到 ${count} 处。` : "",
    });
  });

  return checks;
}

function updateCodeGutter(textarea, gutter) {
  if (!textarea || !gutter) {
    return;
  }

  const lineCount = Math.max(1, textarea.value.split("\n").length);
  gutter.textContent = Array.from({ length: lineCount }, (_, index) => index + 1).join("\n");
  gutter.scrollTop = textarea.scrollTop;
}

function codeDraftKey(chapterId) {
  return `${CODE_DRAFT_PREFIX}${chapterId}`;
}

function initCodeWorkbench() {
  const section = document.querySelector("[data-code-task]");
  if (!section) {
    return;
  }

  const chapterId = Number(section.dataset.codeTask);
  const chapter = CHAPTERS.find((item) => item.id === chapterId);
  const task = chapter?.codeTask;
  const textarea = section.querySelector("[data-code-input]");
  const gutter = section.querySelector("[data-code-gutter]");
  const saveStatus = section.querySelector("[data-save-status]");
  const cursorStatus = section.querySelector("[data-code-cursor]");
  const checkButton = section.querySelector("[data-check-code]");
  if (!task || !textarea || !gutter) {
    return;
  }

  const updateCursor = () => {
    if (!cursorStatus) {
      return;
    }
    const beforeCursor = textarea.value.slice(0, textarea.selectionStart);
    const lines = beforeCursor.split("\n");
    const line = lines.length;
    const column = lines[lines.length - 1].length + 1;
    cursorStatus.textContent = `第 ${line} 行 · 第 ${column} 列`;
  };

  let savedDraft = null;
  try {
    savedDraft = localStorage.getItem(codeDraftKey(chapterId));
  } catch (error) {
    savedDraft = null;
  }

  if (savedDraft !== null) {
    textarea.value = savedDraft;
  }
  updateCodeGutter(textarea, gutter);
  updateCursor();

  if (saveStatus && savedDraft !== null) {
    saveStatus.textContent = "已恢复上次草稿";
  }

  let saveTimer = 0;
  let statusTimer = 0;

  const persistDraft = () => {
    try {
      localStorage.setItem(codeDraftKey(chapterId), textarea.value);
      if (saveStatus) {
        saveStatus.textContent = "草稿已保存";
        window.clearTimeout(statusTimer);
        statusTimer = window.setTimeout(() => {
          saveStatus.textContent = "草稿自动保存";
        }, 1300);
      }
    } catch (error) {
      if (saveStatus) {
        saveStatus.textContent = "草稿无法保存";
      }
    }
  };

  textarea.addEventListener("input", () => {
    updateCodeGutter(textarea, gutter);
    updateCursor();
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(persistDraft, 300);
  });

  textarea.addEventListener("click", updateCursor);
  textarea.addEventListener("keyup", updateCursor);
  textarea.addEventListener("select", updateCursor);

  textarea.addEventListener("scroll", () => {
    gutter.scrollTop = textarea.scrollTop;
  });

  textarea.addEventListener("blur", persistDraft);

  textarea.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      checkButton?.click();
      return;
    }

    if (event.key === "Tab" && !event.shiftKey) {
      event.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      textarea.setRangeText("    ", start, end, "end");
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
      return;
    }

    if (event.key === "Enter" && !event.shiftKey && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const beforeCursor = textarea.value.slice(0, start);
      const currentLine = beforeCursor.slice(beforeCursor.lastIndexOf("\n") + 1);
      const indent = (currentLine.match(/^\s*/) || [""])[0];
      const extraIndent = currentLine.trimEnd().endsWith("{") ? "    " : "";
      textarea.setRangeText(`\n${indent}${extraIndent}`, start, end, "end");
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
    }
  });
}

function handleCodeCheck(button) {
  const section = button.closest("[data-code-task]");
  if (!section) {
    return;
  }

  const chapterId = Number(section.dataset.codeTask);
  const chapter = CHAPTERS.find((item) => item.id === chapterId);
  const task = chapter?.codeTask;
  const textarea = section.querySelector("[data-code-input]");
  const results = section.querySelector("[data-code-results]");
  const resultSummary = section.querySelector("[data-code-result]");
  const resultBar = section.querySelector("[data-code-result-bar]");
  const checksList = section.querySelector("[data-code-checks]");
  const status = section.querySelector("[data-code-status]");
  if (!task || !textarea || !results || !resultSummary || !checksList) {
    return;
  }

  const checks = evaluateCodeTask(task, textarea.value);
  const passed = checks.filter((check) => check.pass).length;
  const allPassed = passed === checks.length;

  results.hidden = false;
  results.classList.toggle("is-success", allPassed);
  resultSummary.textContent = allPassed ? "全部通过" : `${passed} / ${checks.length} 项通过`;
  if (resultBar) {
    resultBar.style.width = `${Math.round((passed / checks.length) * 100)}%`;
  }
  checksList.innerHTML = checks
    .map(
      (check) => `<li class="${check.pass ? "is-pass" : "is-fail"}">
        <span aria-hidden="true">${check.pass ? "✓" : "×"}</span>
        <div class="code-check-copy">
          <strong>${check.label}</strong>
          ${!check.pass && check.detail ? `<small>${check.detail}</small>` : ""}
        </div>
      </li>`
    )
    .join("");

  if (allPassed) {
    const wasDone = codeDone.has(String(chapterId));
    codeDone.add(String(chapterId));
    saveCodeDone();
    section.classList.add("is-code-done");
    if (status) {
      status.textContent = "已通过结构检查";
    }
    if (!wasDone) {
      showToast("代码结构检查通过。复制或下载到 IDEA 里运行，看看真实输出。");
    }
  } else if (status) {
    codeDone.delete(String(chapterId));
    saveCodeDone();
    section.classList.remove("is-code-done");
    status.textContent = "还有需要修正的地方";
  }
}

async function handleCodeCopy(button) {
  const section = button.closest("[data-code-task]");
  const textarea = section?.querySelector("[data-code-input]");
  if (!textarea) {
    return;
  }

  try {
    await copyText(textarea.value);
    const original = button.textContent;
    button.textContent = "已复制";
    window.setTimeout(() => {
      button.textContent = original;
    }, 1500);
  } catch (error) {
    showToast("浏览器没有允许复制，请手动选择代码。");
  }
}

function handleCodeDownload(button) {
  const section = button.closest("[data-code-task]");
  const chapterId = Number(section?.dataset.codeTask);
  const chapter = CHAPTERS.find((item) => item.id === chapterId);
  const task = chapter?.codeTask;
  const textarea = section?.querySelector("[data-code-input]");
  if (!task || !textarea) {
    return;
  }

  const blob = new Blob([textarea.value], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = task.filename || `Task${chapterId}.java`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast(`已下载 ${link.download}`);
}

function handleCodeReset(button) {
  const section = button.closest("[data-code-task]");
  if (!section) {
    return;
  }

  const chapterId = Number(section.dataset.codeTask);
  const chapter = CHAPTERS.find((item) => item.id === chapterId);
  const task = chapter?.codeTask;
  const textarea = section.querySelector("[data-code-input]");
  const gutter = section.querySelector("[data-code-gutter]");
  const results = section.querySelector("[data-code-results]");
  const resultBar = section.querySelector("[data-code-result-bar]");
  const status = section.querySelector("[data-code-status]");
  const hintText = section.querySelector("[data-code-hint-text]");
  const hintButton = section.querySelector("[data-code-hint]");
  if (!task || !textarea) {
    return;
  }

  if (!window.confirm("重置会清空当前代码草稿，恢复到初始模板。继续吗？")) {
    return;
  }

  textarea.value = task.starter;
  updateCodeGutter(textarea, gutter);
  try {
    localStorage.removeItem(codeDraftKey(chapterId));
  } catch (error) {
    /* 忽略清理失败。 */
  }
  if (results) {
    results.hidden = true;
    results.classList.remove("is-success");
  }
  if (resultBar) {
    resultBar.style.width = "0%";
  }
  if (hintText) {
    hintText.hidden = true;
    hintText.innerHTML = "";
  }
  if (hintButton) {
    hintButton.textContent = "给我一点提示";
    section.dataset.hintIndex = "0";
  }
  if (status) {
    status.textContent = "待检查";
  }
  const saveStatus = section.querySelector("[data-save-status]");
  if (saveStatus) {
    saveStatus.textContent = "已重置";
  }
  section.classList.remove("is-code-done");
  codeDone.delete(String(chapterId));
  saveCodeDone();
  textarea.focus();
}

function handleToggleSolution(button) {
  const section = button.closest("[data-code-task]");
  const solution = section?.querySelector("[data-code-solution]");
  if (!solution) {
    return;
  }

  solution.hidden = !solution.hidden;
  button.setAttribute("aria-expanded", String(!solution.hidden));
  button.textContent = solution.hidden ? "查看参考答案" : "收起参考答案";
}

function handleCodeHint(button) {
  const section = button.closest("[data-code-task]");
  if (!section) {
    return;
  }

  const chapterId = Number(section.dataset.codeTask);
  const chapter = CHAPTERS.find((item) => item.id === chapterId);
  const hints = chapter?.codeTask?.hints;
  const hintText = section.querySelector("[data-code-hint-text]");
  if (!Array.isArray(hints) || !hints.length || !hintText) {
    return;
  }

  let index = Number(section.dataset.hintIndex || 0);
  if (index >= hints.length) {
    index = 0;
    hintText.hidden = true;
    hintText.innerHTML = "";
    section.dataset.hintIndex = "0";
    button.textContent = "给我一点提示";
    button.setAttribute("aria-expanded", "false");
    return;
  }

  index += 1;
  section.dataset.hintIndex = String(index);
  hintText.hidden = false;
  hintText.innerHTML = `<strong>提示 ${index} / ${hints.length}</strong><span>${hints[index - 1]}</span>`;
  button.setAttribute("aria-expanded", "true");
  button.textContent = index < hints.length ? `再给一个提示 (${index} / ${hints.length})` : "收起提示";
}

/* ---------- 章节出现动效与滚动导航 ---------- */
function initChapterReveal() {
  const chapters = [...document.querySelectorAll(".chapter")];
  if (!chapters.length) {
    return;
  }

  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    chapters.forEach((chapter) => chapter.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -7% 0px", threshold: 0.04 }
  );

  chapters.forEach((chapter) => observer.observe(chapter));
}

function initReadingProgress() {
  const bar = document.getElementById("readingBar");
  let ticking = false;

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;
    if (bar) {
      bar.style.width = `${percent}%`;
    }
    ticking = false;
  };

  const requestUpdate = () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();
}

function restoreHashPosition() {
  if (!window.location.hash || !window.location.hash.startsWith("#ch-")) {
    return;
  }

  const target = document.querySelector(window.location.hash);
  if (target) {
    window.setTimeout(() => {
      target.scrollIntoView({ behavior: "auto", block: "start" });
    }, 100);
  }
}

/* ---------- CSS 实验室 ---------- */
const LAB_HTML = `<div class="lab-card">
  <span class="lab-tag">CSS LAB</span>
  <h3 class="lab-title">这一块由你控制</h3>
  <p>修改左边的 CSS，右边的卡片会立刻更新。</p>
  <button class="lab-btn" type="button">Hover 我</button>
</div>`;

const LAB_PRESETS = {
  warm: `.lab-card {
  padding: 28px;
  border: 2px solid #173b2b;
  border-radius: 24px;
  background: #fff8e8;
  color: #173b2b;
  font-family: system-ui, sans-serif;
}

.lab-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  background: #e76f3c;
  color: #fff8e8;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.lab-title {
  margin: 16px 0 8px;
  font-size: 28px;
}

.lab-btn {
  margin-top: 12px;
  padding: 10px 18px;
  border: 0;
  border-radius: 999px;
  background: #173b2b;
  color: #fff8e8;
  cursor: pointer;
  transition: transform 180ms ease;
}

.lab-btn:hover {
  transform: translateY(-3px);
}`,
  neon: `.lab-card {
  padding: 30px;
  border: 1px solid rgba(125, 249, 255, 0.55);
  border-radius: 28px;
  background: linear-gradient(145deg, #071d24, #102f36);
  color: #dffcff;
  font-family: "Trebuchet MS", sans-serif;
  box-shadow: 0 0 45px rgba(67, 223, 255, 0.18);
}

.lab-tag {
  display: inline-block;
  padding: 4px 10px;
  border: 1px solid #7df9ff;
  border-radius: 999px;
  color: #7df9ff;
  font-size: 11px;
  letter-spacing: 0.12em;
}

.lab-title {
  margin: 16px 0 8px;
  color: #b8fbff;
  font-size: 30px;
}

.lab-card p {
  color: #9cccd2;
  line-height: 1.7;
}

.lab-btn {
  margin-top: 14px;
  padding: 10px 18px;
  border: 0;
  border-radius: 8px;
  background: #7df9ff;
  color: #062026;
  cursor: pointer;
}

.lab-btn:hover {
  background: #c4feff;
}`,
  editorial: `.lab-card {
  padding: 32px;
  border: 0;
  border-top: 6px solid #173b2b;
  border-radius: 0;
  background: #f5efe3;
  color: #173b2b;
  font-family: Georgia, "Times New Roman", serif;
}

.lab-tag {
  display: inline-block;
  padding: 0 0 4px;
  border-bottom: 2px solid #e76f3c;
  color: #e76f3c;
  font-family: monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.lab-title {
  margin: 18px 0 8px;
  font-size: 34px;
  line-height: 1.1;
}

.lab-card p {
  max-width: 32ch;
  line-height: 1.8;
}

.lab-btn {
  margin-top: 18px;
  padding: 9px 16px;
  border: 1px solid #173b2b;
  border-radius: 0;
  background: transparent;
  color: #173b2b;
  font-family: Georgia, "Times New Roman", serif;
  cursor: pointer;
}

.lab-btn:hover {
  background: #173b2b;
  color: #f5efe3;
}`,
};

function buildLabDocument(css) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    *,
    *::before,
    *::after { box-sizing: border-box; }

    html,
    body { min-height: 100%; }

    body {
      display: grid;
      place-items: center;
      min-height: 100vh;
      margin: 0;
      padding: 26px;
      background: #f5efe3;
    }

    .lab-card {
      width: 100%;
      max-width: 410px;
    }

    .lab-card h3,
    .lab-card p { margin-top: 0; }

    .lab-card p {
      margin-bottom: 12px;
      line-height: 1.7;
    }

    .lab-btn { font: inherit; }

${css}
  </style>
</head>
<body>
  ${LAB_HTML}
</body>
</html>`;
}

function initLab() {
  const editor = document.getElementById("cssEditor");
  const preview = document.getElementById("labPreview");
  const resetBtn = document.getElementById("resetLab");
  const presetButtons = [...document.querySelectorAll("[data-preset]")];

  if (!editor || !preview) {
    return;
  }

  const initialCss = editor.value.trim();
  LAB_PRESETS.warm = initialCss;
  let timer = 0;

  const setActivePreset = (name) => {
    presetButtons.forEach((button) => {
      const active = button.dataset.preset === name;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  };

  const renderPreview = () => {
    preview.srcdoc = buildLabDocument(editor.value);
  };

  const schedulePreview = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(renderPreview, 140);
  };

  editor.addEventListener("input", () => {
    setActivePreset("");
    schedulePreview();
  });

  editor.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") {
      return;
    }

    event.preventDefault();
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    editor.setRangeText("  ", start, end, "end");
    setActivePreset("");
    schedulePreview();
  });

  presetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const preset = LAB_PRESETS[button.dataset.preset];
      if (!preset) {
        return;
      }

      editor.value = preset;
      setActivePreset(button.dataset.preset);
      renderPreview();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      editor.value = initialCss;
      setActivePreset("warm");
      renderPreview();
      showToast("CSS 已恢复到初始状态");
    });
  }

  setActivePreset("warm");
  renderPreview();
}

/* ---------- 课程菜单开关 ---------- */
function initCourseMenu() {
  const menu = document.getElementById("courseMenu");
  if (!menu) {
    return;
  }

  const panel = menu.querySelector(".course-menu-panel");
  const menuBody = menu.querySelector(".course-menu-body");
  const closeButton = menu.querySelector(".course-menu-close");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let isOpen = false;
  let closeTimer = 0;
  let lastTrigger = null;

  const setExpanded = (value) => {
    document.querySelectorAll("[data-course-menu-toggle]").forEach((button) => {
      button.setAttribute("aria-expanded", String(value));
    });
  };

  const open = (trigger) => {
    window.clearTimeout(closeTimer);
    lastTrigger = trigger || document.activeElement;
    menu.hidden = false;
    document.body.classList.add("course-menu-open");
    isOpen = true;
    setExpanded(true);
    window.requestAnimationFrame(() => {
      if (!isOpen) {
        return;
      }
      menu.classList.add("is-open");
      if (closeButton) {
        closeButton.focus({ preventScroll: true });
      }
      if (menuBody) {
        const currentItem = menu.querySelector(".course-menu-item.is-current");
        if (currentItem) {
          const bodyRect = menuBody.getBoundingClientRect();
          const itemRect = currentItem.getBoundingClientRect();
          menuBody.scrollTop = Math.max(
            0,
            menuBody.scrollTop + itemRect.top - bodyRect.top - menuBody.clientHeight / 2 + itemRect.height / 2
          );
        } else {
          menuBody.scrollTop = 0;
        }
      }
    });
  };

  const close = (restoreFocus = true) => {
    if (!isOpen) {
      return;
    }
    isOpen = false;
    menu.classList.remove("is-open");
    setExpanded(false);
    closeTimer = window.setTimeout(() => {
      menu.hidden = true;
      document.body.classList.remove("course-menu-open");
      if (restoreFocus && lastTrigger && typeof lastTrigger.focus === "function") {
        lastTrigger.focus({ preventScroll: true });
      }
    }, reduceMotion.matches ? 0 : 240);
  };

  document.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-course-menu-toggle]");
    if (toggle) {
      event.preventDefault();
      if (isOpen) {
        close();
      } else {
        open(toggle);
      }
      return;
    }

    if (!isOpen) {
      return;
    }

    if (event.target.closest("[data-course-menu-close]")) {
      event.preventDefault();
      close();
      return;
    }

    if (event.target.closest(".course-menu-item, #courseMenuStart")) {
      close(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!isOpen) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }

    if (event.key !== "Tab" || !panel) {
      return;
    }

    const focusable = [...panel.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(
      (element) => element.offsetParent !== null
    );
    if (!focusable.length) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!panel.contains(document.activeElement)) {
      event.preventDefault();
      first.focus();
      return;
    }
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

/* ---------- 事件绑定 ---------- */
function initEvents() {
  document.addEventListener("click", (event) => {
    const copyButton = event.target.closest(".copy-btn");
    if (copyButton) {
      handleCopy(copyButton);
      return;
    }

    const quizOption = event.target.closest(".quiz-option");
    if (quizOption) {
      handleQuizOption(quizOption);
      return;
    }

    const checkButton = event.target.closest("[data-check-answer]");
    if (checkButton) {
      handleAnswerCheck(checkButton);
      return;
    }

    const codeCheckButton = event.target.closest("[data-check-code]");
    if (codeCheckButton) {
      handleCodeCheck(codeCheckButton);
      return;
    }

    const codeCopyButton = event.target.closest("[data-copy-code]");
    if (codeCopyButton) {
      handleCodeCopy(codeCopyButton);
      return;
    }

    const codeDownloadButton = event.target.closest("[data-download-code]");
    if (codeDownloadButton) {
      handleCodeDownload(codeDownloadButton);
      return;
    }

    const codeResetButton = event.target.closest("[data-reset-code]");
    if (codeResetButton) {
      handleCodeReset(codeResetButton);
      return;
    }

    const solutionButton = event.target.closest("[data-toggle-solution]");
    if (solutionButton) {
      handleToggleSolution(solutionButton);
      return;
    }

    const codeHintButton = event.target.closest("[data-code-hint]");
    if (codeHintButton) {
      handleCodeHint(codeHintButton);
      return;
    }

    const doneButton = event.target.closest(".done-btn");
    if (doneButton) {
      toggleChapterDone(Number(doneButton.dataset.done));
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }

    const input = event.target.closest(".answer-input");
    if (!input) {
      return;
    }

    const button = input.closest(".exercise")?.querySelector("[data-check-answer]");
    if (button) {
      event.preventDefault();
      handleAnswerCheck(button);
    }
  });
}

/* ---------- 启动 ---------- */
function init() {
  renderChapters();
  renderSidebar();
  renderCourseMenu();
  updateProgressUI();
  initTheme();
  initEvents();
  initCourseMenu();
  initChapterReveal();
  initReadingProgress();
  initCodeWorkbench();
  initLab();
  restoreHashPosition();
  window.addEventListener("pageshow", updateProgressUI);
}

init();
