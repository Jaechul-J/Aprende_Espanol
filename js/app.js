// =============================================
//  APRENDE ESPAÑOL — App Logic
// =============================================

// TTS
let _esVoice = null;
function _loadVoices() {
  const all = window.speechSynthesis.getVoices();
  _esVoice = all.find(v => v.lang === "es-ES")
          || all.find(v => v.lang === "es-MX")
          || all.find(v => v.lang.startsWith("es"))
          || null;
}
if (window.speechSynthesis) {
  _loadVoices();
  window.speechSynthesis.addEventListener("voiceschanged", _loadVoices);
}

function speak(text) {
  if (!window.speechSynthesis) { alert("이 브라우저는 음성 재생을 지원하지 않습니다."); return; }
  if (window.speechSynthesis.paused) window.speechSynthesis.resume();
  window.speechSynthesis.cancel();
  setTimeout(() => {
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "es-ES"; utt.rate = 0.85; utt.pitch = 1;
    if (_esVoice) utt.voice = _esVoice;
    utt.onerror = e => console.warn("TTS 오류:", e.error, "|", text);
    window.speechSynthesis.speak(utt);
  }, 80);
}

const _speakReg = [];
function _reg(text) { _speakReg.push(text); return _speakReg.length - 1; }
function speakIdx(i) { speak(_speakReg[i]); }

function audioBtn(text, small) {
  const cls = small ? "audio-btn-sm" : "audio-btn";
  return `<button class="${cls}" onclick="speakIdx(${_reg(text)})" title="발음 듣기">🔊</button>`;
}

function getParam(key) { return new URLSearchParams(window.location.search).get(key); }
function levelLabel(l) { return { beginner:"초급", intermediate:"중급", advanced:"고급" }[l] || l; }
function levelEs(l)    { return { beginner:"Nivel Básico", intermediate:"Nivel Intermedio", advanced:"Nivel Avanzado" }[l] || l; }

// ------------------------------------------
// CHAPTERS PAGE
// ------------------------------------------
function initChaptersPage() {
  const level = getParam("level") || "beginner";
  document.getElementById("level-title").textContent    = `${levelLabel(level)} 챕터 선택`;
  document.getElementById("level-subtitle").textContent = levelEs(level);
  document.getElementById("level-flag").textContent     = "🇪🇸 ";
  const grid = document.getElementById("chapters-grid");
  if (!grid) return;
  grid.innerHTML = CHAPTERS.map(ch => `
    <a href="lesson.html?level=${level}&chapter=${ch.id}" class="chapter-card">
      <div class="chapter-num">${String(ch.id).padStart(2,"0")}</div>
      <div class="chapter-info">
        <h4>${ch.icon} ${ch.title}</h4>
        <p>${ch.subtitle}</p>
        <p style="font-size:0.78rem;margin-top:6px;color:#999;">${ch.levels[level]?.theme || ""}</p>
      </div>
    </a>
  `).join("");
}

// ------------------------------------------
// LESSON PAGE
// ------------------------------------------
let currentLevel = "beginner";
let currentChapterId = 1;

function initLessonPage() {
  currentLevel     = getParam("level")   || "beginner";
  currentChapterId = parseInt(getParam("chapter") || "1");
  const chapter = CHAPTERS.find(c => c.id === currentChapterId);
  if (!chapter) { document.body.innerHTML = "<p>챕터를 찾을 수 없습니다.</p>"; return; }
  const data = chapter.levels[currentLevel];

  document.getElementById("lesson-title").textContent    = `${chapter.icon} ${chapter.title}`;
  document.getElementById("lesson-subtitle").textContent = `${chapter.subtitle} · ${data.theme}`;
  const badge = document.getElementById("level-indicator");
  badge.textContent = levelLabel(currentLevel);
  badge.className   = `level-indicator-badge badge-${currentLevel}`;
  document.getElementById("back-to-chapters").href = `chapters.html?level=${currentLevel}`;
  document.getElementById("chapters-link").href    = `chapters.html?level=${currentLevel}`;

  renderVocab(data.vocab);
  renderGrammar(data.grammar);
  renderDialogue(data.dialogue);
  renderExercises(data.exercises);

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
    });
  });

  document.getElementById("prev-chapter").disabled = currentChapterId <= 1;
  document.getElementById("next-chapter").disabled = currentChapterId >= CHAPTERS.length;
}

function navigateChapter(dir) {
  const newId = currentChapterId + dir;
  if (newId < 1 || newId > CHAPTERS.length) return;
  window.location.href = `lesson.html?level=${currentLevel}&chapter=${newId}`;
}

// ------------------------------------------
// RENDER: VOCAB  (shows exPron below Spanish example)
// ------------------------------------------
function renderVocab(vocab) {
  const el = document.getElementById("vocab-list");
  if (!el || !vocab) return;
  el.innerHTML = vocab.map(v => `
    <div class="vocab-item">
      <div class="vocab-left">
        <div class="vocab-spanish">${v.es}</div>
        <div class="vocab-pron">[${v.pron}]</div>
        <div class="vocab-korean">${v.ko}</div>
        <div class="vocab-example">
          <span class="es">${v.ex}</span><br>
          ${v.exPron ? `<span class="sentence-pron">[${v.exPron}]</span><br>` : ""}
          <span>${v.exKo}</span>
        </div>
      </div>
      ${audioBtn(v.es)}
    </div>`).join("");
}

// ------------------------------------------
// RENDER: GRAMMAR  (shows pron below each example)
// ------------------------------------------
function renderGrammar(grammar) {
  const el = document.getElementById("grammar-list");
  if (!el || !grammar) return;
  el.innerHTML = grammar.map(g => {
    const tableHtml = g.table ? `
      <table class="conjugation-table">
        <thead><tr>${(g.tableHeaders||[]).map(h=>`<th>${h}</th>`).join("")}</tr></thead>
        <tbody>${g.table.map(row=>`<tr>${row.map((cell,i)=>`<td class="${i===1?"es-form":""}">${cell}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>` : "";
    const tipHtml = g.tip ? `<div class="grammar-tip">${g.tip}</div>` : "";
    const exHtml  = g.examples ? `
      <div class="grammar-examples">${g.examples.map(ex=>`
        <div class="grammar-example">
          <span class="es">${ex.es} ${audioBtn(ex.es, true)}</span>
          ${ex.pron ? `<div class="sentence-pron">[${ex.pron}]</div>` : ""}
          <span class="ko">${ex.ko}</span>
        </div>`).join("")}
      </div>` : "";
    return `<div class="grammar-item"><h3>${g.title}</h3><p class="explanation">${g.explain}</p>${tipHtml}${tableHtml}${exHtml}</div>`;
  }).join("");
}

// ------------------------------------------
// RENDER: DIALOGUE  (shows pron below each line)
// ------------------------------------------
function renderDialogue(dialogue) {
  const el = document.getElementById("dialogue-box");
  if (!el || !dialogue) return;
  const linesHtml = dialogue.lines.map(line => `
    <div class="dialogue-line">
      <div class="speaker-badge speaker-${line.sp}">${line.sp}</div>
      <div class="line-content">
        <div class="line-spanish">${line.es} ${audioBtn(line.es, true)}</div>
        ${line.pron ? `<div class="sentence-pron">[${line.pron}]</div>` : ""}
        <div class="line-korean">${line.ko}</div>
      </div>
    </div>`).join("");
  const allSpanish = dialogue.lines.map(l => l.es).join(" ");
  el.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:8px;">
      <div>
        <div class="dialogue-title">${dialogue.titleKo}</div>
        <div class="dialogue-title-es">${dialogue.titleEs}</div>
      </div>
      <button class="audio-btn" onclick="speakIdx(${_reg(allSpanish)})" title="전체 듣기" style="border-radius:8px;width:auto;padding:0 14px;">🔊 전체 듣기</button>
    </div>
    ${linesHtml}`;
}

// ------------------------------------------
// RENDER: EXERCISES
// ------------------------------------------
function renderExercises(exercises) {
  const el = document.getElementById("exercises-list");
  if (!el || !exercises) return;
  el.innerHTML = exercises.map((ex, ei) => {
    if (ex.type === "mc") {
      const qsHtml = ex.qs.map((q, qi) => `
        <div class="exercise-question" id="mc-${ei}-${qi}">
          <div class="prompt">${qi+1}. ${q.prompt}</div>
          <div class="mc-options">
            ${q.opts.map((opt, oi) => `<button class="mc-option" onclick="checkMC(${ei},${qi},${oi},${q.ans},${JSON.stringify(q.explain)})">${opt}</button>`).join("")}
          </div>
          <div class="exercise-feedback" id="fb-mc-${ei}-${qi}"></div>
        </div>`).join("");
      return `<div class="exercise-item"><h4>📝 객관식 문제</h4><p class="exercise-instruction">${ex.instruct}</p>${qsHtml}</div>`;
    }
    if (ex.type === "fill") {
      const qsHtml = ex.qs.map((q, qi) => `
        <div class="exercise-question">
          <div class="prompt">${qi+1}. ${q.prompt}</div>
          <div class="hint-text">힌트: ${q.hint}</div>
          <div class="exercise-input" style="margin-top:8px;">
            <input type="text" id="fill-${ei}-${qi}" placeholder="답 입력..." onkeydown="if(event.key==='Enter')checkFill(${ei},${qi},${JSON.stringify(q.ans)})">
            <button class="check-btn" onclick="checkFill(${ei},${qi},${JSON.stringify(q.ans)})">확인</button>
          </div>
          <div class="exercise-feedback" id="fb-fill-${ei}-${qi}"></div>
        </div>`).join("");
      return `<div class="exercise-item"><h4>✏️ 빈칸 채우기</h4><p class="exercise-instruction">${ex.instruct}</p>${qsHtml}</div>`;
    }
    return "";
  }).join("");
}

// ------------------------------------------
// EXERCISE CHECKERS — Correcto / Incorrecto
// ------------------------------------------
function checkMC(ei, qi, chosen, correct, explain) {
  const container = document.getElementById(`mc-${ei}-${qi}`);
  const buttons   = container.querySelectorAll(".mc-option");
  const fb        = document.getElementById(`fb-mc-${ei}-${qi}`);
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add("correct");
    else if (i === chosen) btn.classList.add("wrong");
  });
  fb.textContent = chosen === correct
    ? `✅ Correcto! ${explain}`
    : `❌ Incorrecto. ${explain}`;
  fb.className = `exercise-feedback ${chosen === correct ? "feedback-correct" : "feedback-wrong"}`;
}

function checkFill(ei, qi, correct) {
  const input = document.getElementById(`fill-${ei}-${qi}`);
  const fb    = document.getElementById(`fb-fill-${ei}-${qi}`);
  const val   = (input.value || "").trim();
  const ok    = val.toLowerCase() === correct.toLowerCase();
  input.disabled = true;
  fb.textContent = ok
    ? `✅ Correcto! 정답: ${correct}`
    : `❌ Incorrecto. 정답은 "${correct}"입니다.`;
  fb.className = `exercise-feedback ${ok ? "feedback-correct" : "feedback-wrong"}`;
}

// ------------------------------------------
// BOOT
// ------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener("voiceschanged", () => {});
  }
  const path = window.location.pathname;
  if (path.includes("chapters.html")) initChaptersPage();
  if (path.includes("lesson.html"))   initLessonPage();
});
