const elements = [
  [1, "H", "水素"], [2, "He", "ヘリウム"], [3, "Li", "リチウム"], [4, "Be", "ベリリウム"],
  [5, "B", "ホウ素"], [6, "C", "炭素"], [7, "N", "窒素"], [8, "O", "酸素"],
  [9, "F", "フッ素"], [10, "Ne", "ネオン"], [11, "Na", "ナトリウム"], [12, "Mg", "マグネシウム"],
  [13, "Al", "アルミニウム"], [14, "Si", "ケイ素"], [15, "P", "リン"], [16, "S", "硫黄"],
  [17, "Cl", "塩素"], [18, "Ar", "アルゴン"], [19, "K", "カリウム"], [20, "Ca", "カルシウム"],
  [21, "Sc", "スカンジウム"], [22, "Ti", "チタン"], [23, "V", "バナジウム"], [24, "Cr", "クロム"],
  [25, "Mn", "マンガン"], [26, "Fe", "鉄"], [27, "Co", "コバルト"], [28, "Ni", "ニッケル"],
  [29, "Cu", "銅"], [30, "Zn", "亜鉛"], [31, "Ga", "ガリウム"], [32, "Ge", "ゲルマニウム"],
  [33, "As", "ヒ素"], [34, "Se", "セレン"], [35, "Br", "臭素"], [36, "Kr", "クリプトン"],
  [37, "Rb", "ルビジウム"], [38, "Sr", "ストロンチウム"], [39, "Y", "イットリウム"], [40, "Zr", "ジルコニウム"],
  [41, "Nb", "ニオブ"], [42, "Mo", "モリブデン"], [43, "Tc", "テクネチウム"], [44, "Ru", "ルテニウム"],
  [45, "Rh", "ロジウム"], [46, "Pd", "パラジウム"], [47, "Ag", "銀"], [48, "Cd", "カドミウム"],
  [49, "In", "インジウム"], [50, "Sn", "スズ"], [51, "Sb", "アンチモン"], [52, "Te", "テルル"],
  [53, "I", "ヨウ素"], [54, "Xe", "キセノン"], [55, "Cs", "セシウム"], [56, "Ba", "バリウム"],
  [57, "La", "ランタン"], [58, "Ce", "セリウム"], [59, "Pr", "プラセオジム"], [60, "Nd", "ネオジム"],
  [61, "Pm", "プロメチウム"], [62, "Sm", "サマリウム"], [63, "Eu", "ユウロピウム"], [64, "Gd", "ガドリニウム"],
  [65, "Tb", "テルビウム"], [66, "Dy", "ジスプロシウム"], [67, "Ho", "ホルミウム"], [68, "Er", "エルビウム"],
  [69, "Tm", "ツリウム"], [70, "Yb", "イッテルビウム"], [71, "Lu", "ルテチウム"], [72, "Hf", "ハフニウム"],
  [73, "Ta", "タンタル"], [74, "W", "タングステン"], [75, "Re", "レニウム"], [76, "Os", "オスミウム"],
  [77, "Ir", "イリジウム"], [78, "Pt", "白金"], [79, "Au", "金"], [80, "Hg", "水銀"],
  [81, "Tl", "タリウム"], [82, "Pb", "鉛"], [83, "Bi", "ビスマス"], [84, "Po", "ポロニウム"],
  [85, "At", "アスタチン"], [86, "Rn", "ラドン"], [87, "Fr", "フランシウム"], [88, "Ra", "ラジウム"],
  [89, "Ac", "アクチニウム"], [90, "Th", "トリウム"], [91, "Pa", "プロトアクチニウム"], [92, "U", "ウラン"],
  [93, "Np", "ネプツニウム"], [94, "Pu", "プルトニウム"], [95, "Am", "アメリシウム"], [96, "Cm", "キュリウム"],
  [97, "Bk", "バークリウム"], [98, "Cf", "カリホルニウム"], [99, "Es", "アインスタイニウム"], [100, "Fm", "フェルミウム"],
  [101, "Md", "メンデレビウム"], [102, "No", "ノーベリウム"], [103, "Lr", "ローレンシウム"], [104, "Rf", "ラザホージウム"],
  [105, "Db", "ドブニウム"], [106, "Sg", "シーボーギウム"], [107, "Bh", "ボーリウム"], [108, "Hs", "ハッシウム"],
  [109, "Mt", "マイトネリウム"], [110, "Ds", "ダームスタチウム"], [111, "Rg", "レントゲニウム"], [112, "Cn", "コペルニシウム"],
  [113, "Nh", "ニホニウム"], [114, "Fl", "フレロビウム"], [115, "Mc", "モスコビウム"], [116, "Lv", "リバモリウム"],
  [117, "Ts", "テネシン"], [118, "Og", "オガネソン"],
].map(([number, symbol, name]) => ({ number, symbol, name }));

const storageKey = "genso-learning-progress";
const saved = readProgress();
const state = {
  learned: new Set(saved.learned),
  correct: saved.correct,
  activeView: "quiz",
  cardIndex: 0,
  revealed: false,
  quizQuestions: [],
  quizIndex: 0,
  quizScore: 0,
  answered: false,
};

const $ = (selector) => document.querySelector(selector);
const learnedCount = $("#learned-count");
const correctCount = $("#correct-count");

function readProgress() {
  try {
    const data = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const learned = Array.isArray(data.learned)
      ? data.learned.filter((number) => Number.isInteger(number) && number >= 1 && number <= 118)
      : [];
    return { learned, correct: Number.isInteger(data.correct) && data.correct >= 0 ? data.correct : 0 };
  } catch (error) {
    console.warn("学習状況を読み込めませんでした。", error);
    return { learned: [], correct: 0 };
  }
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({
      learned: [...state.learned],
      correct: state.correct,
    }));
  } catch (error) {
    console.warn("学習状況を保存できませんでした。", error);
  }
}

function updateStats() {
  learnedCount.textContent = state.learned.size;
  correctCount.textContent = state.correct;
}

function showView(view) {
  state.activeView = view;
  document.querySelectorAll(".tab-button").forEach((button) => {
    const isActive = button.dataset.view === view;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  document.querySelectorAll(".view-panel").forEach((panel) => {
    panel.hidden = panel.id !== `${view}-view`;
  });
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function startQuiz() {
  state.quizQuestions = shuffle(elements).slice(0, 10);
  state.quizIndex = 0;
  state.quizScore = 0;
  state.answered = false;
  renderQuestion();
}

function renderQuestion() {
  const question = state.quizQuestions[state.quizIndex];
  const progress = (state.quizIndex + 1) / state.quizQuestions.length * 100;
  $("#quiz-progress-bar").style.width = `${progress}%`;
  $("#question-counter").innerHTML = `${state.quizIndex + 1} <span>/ ${state.quizQuestions.length}</span>`;
  $("#quiz-atomic-number").textContent = `No. ${String(question.number).padStart(2, "0")}`;
  $("#quiz-symbol").textContent = question.symbol;
  $("#quiz-feedback").textContent = "";
  $("#quiz-feedback").classList.remove("is-wrong");
  $("#next-question").hidden = true;
  const quizChoices = $("#quiz-choices");
  quizChoices.replaceChildren();

  const distractors = shuffle(elements.filter((element) => element.number !== question.number)).slice(0, 3);
  shuffle([...distractors, question]).forEach((element) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = element.name;
    button.dataset.number = element.number;
    button.addEventListener("click", () => answerQuestion(button, question));
    quizChoices.append(button);
  });
  state.answered = false;
}

function answerQuestion(selectedButton, question) {
  if (state.answered) return;
  state.answered = true;
  const isCorrect = Number(selectedButton.dataset.number) === question.number;
  const quizChoices = $("#quiz-choices");
  quizChoices.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
    if (Number(button.dataset.number) === question.number) button.classList.add("is-correct");
  });
  const feedback = $("#quiz-feedback");
  if (isCorrect) {
    state.quizScore += 1;
    state.correct += 1;
    feedback.textContent = "正解！いい調子です。";
    saveProgress();
    updateStats();
  } else {
    selectedButton.classList.add("is-wrong");
    feedback.textContent = `おしい！正解は「${question.name}」です。`;
    feedback.classList.add("is-wrong");
  }
  $("#next-question").textContent = state.quizIndex === state.quizQuestions.length - 1 ? "結果を見る →" : "次の問題 →";
  $("#next-question").hidden = false;
}

function showQuizResult() {
  $("#quiz-progress-bar").style.width = "100%";
  $("#question-counter").innerHTML = `10 <span>/ 10</span>`;
  $("#quiz-card").innerHTML = `
    <div class="quiz-result">
      <p class="eyebrow">CHALLENGE COMPLETE</p>
      <h3>10問チャレンジ終了！</h3>
      <div class="quiz-result-score">${state.quizScore}<span class="stat-unit"> / 10 問正解</span></div>
      <p>${state.quizScore === 10 ? "全問正解！すばらしい！" : "挑戦するたび、少しずつ覚えていこう。"}</p>
      <button class="primary-button" id="restart-quiz" type="button">もう一度挑戦 <span aria-hidden="true">↻</span></button>
    </div>`;
  $("#restart-quiz").addEventListener("click", () => {
    renderQuizCard();
    startQuiz();
  });
}

function renderQuizCard() {
  $("#quiz-card").innerHTML = `
    <div class="quiz-card-top"><span class="quiz-mode">元素記号から選ぼう</span><span class="atomic-number" id="quiz-atomic-number"></span></div>
    <div class="quiz-prompt">この元素の名前は？</div>
    <div class="quiz-symbol" id="quiz-symbol"></div>
    <div class="quiz-choices" id="quiz-choices" role="group" aria-label="答えを選択"></div>
    <div class="quiz-feedback" id="quiz-feedback" aria-live="polite"></div>
    <button class="primary-button next-question" id="next-question" type="button" hidden>次の問題 <span aria-hidden="true">→</span></button>`;
}

function renderCard() {
  const element = elements[state.cardIndex];
  state.revealed = false;
  $("#card-counter").innerHTML = `${state.cardIndex + 1} <span>/ 118</span>`;
  $("#card-number").textContent = String(element.number).padStart(2, "0");
  $("#card-symbol").textContent = element.symbol;
  $("#card-name").textContent = element.name;
  $("#card-name").hidden = true;
  $("#card-hint").textContent = "タップして答えを確認";
  $("#flip-card").innerHTML = '答えを見る <span aria-hidden="true">↗</span>';
  $("#toggle-learned").classList.toggle("is-learned", state.learned.has(element.number));
  $("#toggle-learned").textContent = state.learned.has(element.number) ? "★ おぼえた！" : "☆ おぼえた";
  $("#previous-card").disabled = state.cardIndex === 0;
}

function flipCard() {
  state.revealed = !state.revealed;
  $("#card-name").hidden = !state.revealed;
  $("#card-hint").textContent = state.revealed ? "元素記号と名前をセットで覚えよう" : "タップして答えを確認";
  $("#flip-card").innerHTML = state.revealed
    ? '記号を確認 <span aria-hidden="true">↗</span>'
    : '答えを見る <span aria-hidden="true">↗</span>';
}

function renderElements(filter = "") {
  const query = filter.trim().toLocaleLowerCase();
  const matched = elements.filter((element) => (
    element.name.toLocaleLowerCase().includes(query)
    || element.symbol.toLocaleLowerCase().includes(query)
    || String(element.number).includes(query)
  ));
  $("#element-count").textContent = matched.length;
  $("#empty-state").hidden = matched.length > 0;
  const grid = $("#element-grid");
  grid.replaceChildren();
  matched.forEach((element) => {
    const tile = document.createElement("article");
    tile.className = `element-tile${state.learned.has(element.number) ? " is-learned" : ""}`;
    tile.setAttribute("aria-label", `${element.number}番 ${element.name} ${element.symbol}`);
    tile.innerHTML = `<span class="tile-number">${element.number}</span><span class="tile-symbol"></span><span class="tile-name"></span>`;
    tile.querySelector(".tile-symbol").textContent = element.symbol;
    tile.querySelector(".tile-name").textContent = element.name;
    grid.append(tile);
  });
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.view));
});
$("#quiz-card").addEventListener("click", (event) => {
  if (!event.target.closest("#next-question")) return;
  if (state.quizIndex === state.quizQuestions.length - 1) {
    showQuizResult();
    return;
  }
  state.quizIndex += 1;
  renderQuestion();
});
$("#flashcard").addEventListener("click", flipCard);
$("#previous-card").addEventListener("click", () => {
  if (state.cardIndex > 0) state.cardIndex -= 1;
  renderCard();
});
$("#next-card").addEventListener("click", () => {
  state.cardIndex = (state.cardIndex + 1) % elements.length;
  renderCard();
});
$("#toggle-learned").addEventListener("click", () => {
  const number = elements[state.cardIndex].number;
  if (state.learned.has(number)) state.learned.delete(number);
  else state.learned.add(number);
  saveProgress();
  updateStats();
  renderCard();
  renderElements($("#element-search").value);
});
$("#element-search").addEventListener("input", (event) => renderElements(event.target.value));
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    showView("elements");
    $("#element-search").focus();
  }
});

updateStats();
startQuiz();
renderCard();
renderElements();
