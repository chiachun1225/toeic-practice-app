const STORAGE_KEY = "toeicPracticeLab.v2";

const certLevels = {
  orange: { label: "Orange", range: "10-219", min: 10, max: 219 },
  brown: { label: "Brown", range: "220-469", min: 220, max: 469 },
  green: { label: "Green", range: "470-729", min: 470, max: 729 },
  blue: { label: "Blue", range: "730-859", min: 730, max: 859 },
  gold: { label: "Gold", range: "860-990", min: 860, max: 990 }
};

const levelDifficulty = {
  orange: ["入門"],
  brown: ["入門", "基礎"],
  green: ["基礎", "中等"],
  blue: ["中等", "進階"],
  gold: ["進階", "高階"]
};

const typeLabels = {
  vocabulary: "語彙",
  grammar: "文法",
  reading: "閱讀理解",
  listening: "聽力理解"
};

const baseQuestions = [
  q("vocabulary", "brown", "Part 5 - Vocabulary", "Choose the best word.", "The marketing team will release the new brochure once the final design has been ____ by the client.", ["approved", "approving", "approval", "approves"], 0, "has been 後面需要過去分詞形成被動語態，所以選 approved。", "中等", "高", "高", ["approve", "brochure", "client"]),
  q("vocabulary", "green", "Part 5 - Vocabulary", "Choose the best word.", "Please keep all receipts so that the accounting department can ____ your travel expenses.", ["reimburse", "subscribe", "announce", "preserve"], 0, "reimburse 是報銷、償還費用，常和 expenses 搭配。", "中等", "高", "中", ["reimburse", "receipt", "expense"]),
  q("vocabulary", "blue", "Part 5 - Vocabulary", "Choose the best word.", "The supplier offered a ____ discount to customers who ordered more than 500 units.", ["substantial", "substitute", "subtle", "suburban"], 0, "substantial 表示大量的、可觀的，修飾 discount 很自然。", "進階", "中", "中", ["supplier", "substantial", "unit"]),
  q("vocabulary", "green", "Part 5 - Vocabulary", "Choose the best word.", "The new policy will be ____ next Monday, after all supervisors receive training.", ["implemented", "occupied", "negotiated", "inherited"], 0, "implement a policy 是實施政策的常見搭配。", "中等", "高", "高", ["policy", "implement", "supervisor"]),
  q("vocabulary", "blue", "Part 5 - Vocabulary", "Choose the best word.", "Because of high demand, the company has decided to ____ production at its main factory.", ["expand", "expire", "expose", "exclude"], 0, "expand production 表示擴大產量，是商務新聞和 TOEIC 常見搭配。", "中等", "高", "高", ["demand", "expand", "production"]),
  q("vocabulary", "gold", "Part 5 - Vocabulary", "Choose the best word.", "The consultant's report provided a ____ analysis of the merger's financial risks.", ["comprehensive", "temporary", "manual", "residential"], 0, "comprehensive analysis 表示全面分析，屬高分段常見抽象名詞搭配。", "高階", "中", "中", ["consultant", "comprehensive", "merger"]),

  q("grammar", "brown", "Part 5 - Grammar", "Choose the best answer.", "The sales report must be submitted ____ noon on Friday.", ["by", "for", "during", "about"], 0, "by noon 表示不晚於中午前完成，是截止時間常用介系詞。", "基礎", "高", "高", ["submit", "noon", "report"]),
  q("grammar", "green", "Part 5 - Grammar", "Choose the best answer.", "Neither the manager nor the assistants ____ available for the call this afternoon.", ["are", "is", "was", "be"], 0, "neither...nor 通常與較近主詞一致；assistants 是複數，所以用 are。", "進階", "中", "中", ["neither", "assistant", "available"]),
  q("grammar", "green", "Part 6 - Text Completion", "Choose the best connector.", "The training room is under renovation this week. ____ all onboarding sessions will be held online.", ["Therefore,", "Although,", "Meanwhile,", "For example,"], 0, "前後是因果關係，場地整修導致課程改線上，因此 Therefore 最合理。", "中等", "高", "高", ["renovation", "therefore", "onboarding"]),
  q("grammar", "blue", "Part 5 - Grammar", "Choose the best answer.", "The new software is easier to use than the version ____ last year.", ["released", "releasing", "release", "has released"], 0, "the version released last year 是過去分詞片語修飾 version。", "進階", "高", "高", ["software", "release", "version"]),
  q("grammar", "brown", "Part 5 - Grammar", "Choose the best answer.", "Customers may return unopened items ____ thirty days of purchase.", ["within", "until", "among", "beside"], 0, "within thirty days 表示三十天內，是退貨期限常見用法。", "基礎", "高", "高", ["customer", "return", "within"]),
  q("grammar", "gold", "Part 5 - Grammar", "Choose the best answer.", "Had the shipment arrived earlier, the technicians ____ the installation yesterday.", ["could have completed", "can complete", "will complete", "complete"], 0, "這是假設過去情況的倒裝條件句，主要子句用 could have p.p.。", "高階", "中", "中", ["shipment", "technician", "installation"]),

  q("reading", "brown", "Part 7 - Notice", "Read the notice and answer the question.", email("Notice", "To reduce waiting time at the front desk, all visitors to Hartwell Tower must register online at least one day before arrival. After registering, visitors will receive a QR code by e-mail. Security staff will scan the code at the entrance.", "What are visitors asked to do?"), ["Register before they arrive", "Call security after entering", "Print a monthly pass", "Wait at the front desk"], 0, "公告指出 visitors must register online at least one day before arrival。", "基礎", "高", "高", ["visitor", "register", "security"]),
  q("reading", "green", "Part 7 - E-mail", "Read the e-mail and answer the question.", email("Subject: Updated Delivery Schedule", "Dear Ms. Lin,\n\nDue to a delay at the warehouse, the display units will arrive on Thursday instead of Tuesday. Our installation team can still complete the setup by Friday afternoon if they receive access to the showroom by 8 A.M.\n\nRegards,\nDaniel Ortiz", "Why did Daniel write the e-mail?"), ["To explain a change in arrival date", "To request a product refund", "To cancel an installation", "To advertise a showroom"], 0, "信件主旨和內容都在說 delivery schedule 改期。", "中等", "高", "高", ["warehouse", "delivery", "schedule"]),
  q("reading", "blue", "Part 7 - Article", "Read the article and answer the question.", email("Business News", "Riverton Foods announced that it will open a second distribution center in September. The new facility will reduce delivery times to southern retailers and create 120 jobs. According to the company, construction was completed two weeks ahead of schedule.", "What is mentioned about the new facility?"), ["It will help shorten delivery times", "It will replace all retail stores", "It opened two weeks late", "It will sell products directly"], 0, "文章提到新設施 will reduce delivery times to southern retailers。", "進階", "中", "中", ["distribution", "facility", "retailer"]),
  q("reading", "gold", "Part 7 - Double Passage", "Read the messages and answer the question.", email("Message 1", "The quarterly budget review has been moved to June 18 because the finance director will be attending a conference the previous week.\n\nMessage 2\nPlease submit revised department forecasts by June 14 so that they can be included in the budget packet.", "Why must forecasts be submitted by June 14?"), ["They are needed for the budget packet", "The conference starts that day", "The finance director requested vacation", "The department is closing"], 0, "第二則訊息說 forecasts 要納入 budget packet，因此需在 6/14 前提交。", "高階", "中", "中", ["quarterly", "forecast", "budget"]),

  q("listening", "brown", "Part 3 - Conversation", "Read the transcript and answer the question.", transcript("Woman: The projector in Conference Room B is not working again.\nMan: I will move the client meeting to Room D. Could you tell reception about the change?\nWoman: Sure, I will update the room sign as well.", "What will the man probably do?"), ["Change the meeting location", "Repair the projector", "Cancel the client meeting", "Call the equipment supplier"], 0, "男士說 I will move the client meeting to Room D。", "基礎", "高", "高", ["projector", "conference", "reception"]),
  q("listening", "green", "Part 4 - Short Talk", "Read the transcript and answer the question.", transcript("Good morning. This is a reminder that the south parking entrance will be closed from 9 A.M. to 3 P.M. today while crews repaint the traffic lines. Employees should use the west entrance during this time.", "What are employees instructed to do?"), ["Use a different entrance", "Move their cars by 3 P.M.", "Repaint the parking lines", "Park outside the building"], 0, "廣播指示 employees should use the west entrance。", "基礎", "高", "高", ["entrance", "employee", "reminder"]),
  q("listening", "blue", "Part 3 - Conversation", "Read the transcript and answer the question.", transcript("Man: The printer on the sixth floor keeps jamming.\nWoman: I called maintenance, but they cannot come until tomorrow.\nMan: Then I will print the training packets downstairs.", "What will the man do next?"), ["Use another printer", "Cancel the training", "Call maintenance again", "Repair the machine"], 0, "男士說會到樓下印 training packets。", "中等", "高", "高", ["maintenance", "packet", "downstairs"]),
  q("listening", "gold", "Part 4 - Short Talk", "Read the transcript and answer the question.", transcript("Thank you for calling Meridian Office Supply. Because of a system upgrade, online orders placed this morning may not appear in your account until after 2 P.M. If you need immediate confirmation, please speak with a customer service representative.", "What problem is mentioned?"), ["Some orders may not appear right away", "The store is closed for the day", "Representatives are unavailable", "Payments cannot be accepted"], 0, "短講說上午下單可能到下午兩點後才會出現在帳戶。", "進階", "中", "中", ["upgrade", "confirmation", "representative"])
];

const templateSets = {
  vocabulary: [
    ["invoice", "The supplier sent a revised ____ after adding the express shipping fee.", "發票或請款單加上運費後會修正。", "green", ["agenda", "directory", "warranty"]],
    ["inventory", "The warehouse manager checks the ____ every Friday afternoon.", "inventory 是庫存，和 warehouse manager 搭配常見。", "green", ["proposal", "attendance", "subscription"]],
    ["deadline", "All applications must be received before the final ____.", "deadline 是截止期限，TOEIC 高頻字。", "brown", ["branch", "receipt", "device"]],
    ["evaluate", "The committee will ____ the proposals before selecting a vendor.", "evaluate proposals 表示評估提案。", "blue", ["decorate", "occupy", "transfer"]],
    ["compatible", "This printer is not ____ with older operating systems.", "compatible with 表示相容。", "blue", ["visible", "annual", "vacant"]],
    ["authorize", "Only department heads may ____ purchases over $2,000.", "authorize purchases 表示授權採購。", "gold", ["hesitate", "assemble", "decorate"]],
    ["postpone", "The outdoor event was ____ because of heavy rain.", "postpone 表示延期。", "green", ["displayed", "inspected", "attached"]],
    ["available", "Additional parking spaces are ____ behind the main office.", "available 表示可使用、可取得。", "brown", ["annual", "former", "brief"]]
  ],
  grammar: [
    ["by", "The technician said the repair would be finished ____ 5 P.M.", "by 表示不晚於某時間。", "brown", ["during", "among", "along"]],
    ["who", "Employees ____ complete the survey will receive a coupon.", "who 引導形容詞子句修飾 employees。", "green", ["which", "where", "whose"]],
    ["has been", "The conference room ____ reserved for the directors' meeting.", "現在完成被動語態：has been reserved。", "green", ["have", "was being", "will"]],
    ["because", "The shipment was delayed ____ the truck broke down.", "because 後接原因子句。", "brown", ["although", "unless", "while"]],
    ["to reduce", "The company installed new software ____ processing time.", "to reduce 表目的。", "blue", ["reduced", "reducing", "reduction"]],
    ["had reviewed", "By the time the meeting started, Mr. Chen ____ all the reports.", "過去某時間前已完成，用過去完成式。", "gold", ["reviews", "has reviewed", "will review"]]
  ]
};

const readingScenarios = [
  ["Office Move", "The customer service department will relocate to the fifth floor on August 3. During the move, phone support will be unavailable from 1 P.M. to 4 P.M. E-mail support will remain open.", "What will happen on August 3?", "Phone support will be temporarily unavailable", "green", ["relocate", "support", "temporarily"]],
  ["Cafeteria Notice", "The cafeteria will introduce a mobile ordering system next week. Employees can place lunch orders before 10:30 A.M. and pick them up at the express counter.", "What is the purpose of the new system?", "To let employees order lunch in advance", "brown", ["cafeteria", "express", "advance"]],
  ["Client E-mail", "Thank you for sending the revised contract. I have forwarded it to our legal department and expect to receive comments by Thursday. I will contact you as soon as the review is complete.", "What is the writer waiting for?", "Comments from the legal department", "blue", ["contract", "forward", "review"]],
  ["Product Update", "The latest model uses less energy than the previous version and includes a larger display. It will be available in stores starting next month.", "What is stated about the latest model?", "It has a larger display", "green", ["model", "display", "available"]],
  ["Policy Memo", "Starting July 1, employees who work remotely more than three days per week must submit a monthly equipment checklist. The policy is intended to keep company devices secure.", "Why is the checklist required?", "To help protect company devices", "gold", ["remotely", "checklist", "secure"]]
];

const listeningScenarios = [
  ["Woman: Do you know where the visitor badges are?\nMan: They were moved to the reception desk yesterday.\nWoman: Thanks, I need one for our guest from Singapore.", "What is the woman looking for?", "A visitor badge", "brown", ["badge", "reception", "guest"]],
  ["Man: The sales figures for March look better than expected.\nWoman: That's because online orders increased by 18 percent.\nMan: Great. Let's include that in the presentation.", "What increased in March?", "Online orders", "green", ["figure", "increase", "presentation"]],
  ["Good afternoon. The 3:15 train to Central Station will depart from platform 6 instead of platform 4 because of track maintenance.", "What has changed?", "The departure platform", "green", ["depart", "platform", "maintenance"]],
  ["Woman: I reserved a table for six, but two clients cannot come.\nMan: I will call the restaurant and change the reservation.\nWoman: Please ask for a quieter table if possible.", "What will the man do?", "Modify a restaurant reservation", "blue", ["reserve", "client", "reservation"]],
  ["Before leaving the workshop, please complete the evaluation form on your seat. Your feedback will help us choose topics for future training sessions.", "Why should listeners complete the form?", "To help plan future training", "gold", ["workshop", "evaluation", "feedback"]]
];

let state = {
  questions: [],
  current: 0,
  mode: "practice",
  startedAt: null,
  timerId: null,
  finished: false
};

let store = loadStore();

const $ = selector => document.querySelector(selector);
const els = {
  userName: $("#userName"),
  addUserBtn: $("#addUserBtn"),
  mode: $("#mode"),
  questionCount: $("#questionCount"),
  focus: $("#focus"),
  level: $("#level"),
  startBtn: $("#startBtn"),
  correctCount: $("#correctCount"),
  progressCount: $("#progressCount"),
  timer: $("#timer"),
  questionNav: $("#questionNav"),
  emptyState: $("#emptyState"),
  questionView: $("#questionView"),
  partLabel: $("#partLabel"),
  questionTitle: $("#questionTitle"),
  difficulty: $("#difficulty"),
  badges: $("#badges"),
  prompt: $("#prompt"),
  choices: $("#choices"),
  feedback: $("#feedback"),
  prevBtn: $("#prevBtn"),
  nextBtn: $("#nextBtn"),
  checkBtn: $("#checkBtn"),
  finishBtn: $("#finishBtn"),
  accuracy: $("#accuracy"),
  accuracyBar: $("#accuracyBar"),
  estimate: $("#estimate"),
  weaknessList: $("#weaknessList"),
  reviewList: $("#reviewList"),
  historyList: $("#historyList")
};

function q(type, level, part, title, prompt, choices, answer, explanation, difficulty, toeicFrequency, wordFrequency, keywords) {
  return { type, level, part, title, prompt, choices, answer, explanation, difficulty, toeicFrequency, wordFrequency, keywords };
}

function email(title, body, question) {
  return `<div class="email"><strong>${title}</strong><br><br>${body.replaceAll("\n", "<br>")}<br><br><strong>Question:</strong> ${question}</div>`;
}

function transcript(body, question) {
  return `<div class="transcript"><strong>Transcript</strong><br>${body.replaceAll("\n", "<br>")}</div><strong>Question:</strong> ${question}`;
}

function loadStore() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (parsed && parsed.users && parsed.currentUser) return parsed;
  } catch (error) {
    console.warn("Could not load saved records.", error);
  }
  return {
    currentUser: "我",
    users: {
      "我": { history: [] }
    }
  };
}

function saveStore() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function renderUsers() {
  els.userName.innerHTML = "";
  Object.keys(store.users).forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    els.userName.appendChild(option);
  });
  els.userName.value = store.currentUser;
  renderHistory();
}

function addUser() {
  const name = prompt("輸入使用者名稱");
  if (!name) return;
  const clean = name.trim().slice(0, 18);
  if (!clean) return;
  if (!store.users[clean]) store.users[clean] = { history: [] };
  store.currentUser = clean;
  saveStore();
  renderUsers();
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function normalize(question) {
  return {
    ...question,
    choices: [...question.choices],
    selected: null,
    checked: false,
    id: globalThis.crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`
  };
}

function generatedQuestion(type, row, index) {
  if (type === "vocabulary") {
    const [answer, prompt, explanation, level, distractors] = row;
    return q(type, level, "Part 5 - Vocabulary", "Choose the best word.", prompt, shuffle([answer, ...distractors]), null, explanation, levelToDifficulty(level), "高", level === "gold" ? "中" : "高", [answer]);
  }
  if (type === "grammar") {
    const [answer, prompt, explanation, level, distractors] = row;
    return q(type, level, index % 3 === 0 ? "Part 6 - Text Completion" : "Part 5 - Grammar", "Choose the best answer.", prompt, shuffle([answer, ...distractors]), null, explanation, levelToDifficulty(level), "高", "高", [answer.replaceAll(" ", "-")]);
  }
  if (type === "reading") {
    const [title, body, question, answer, level, keywords] = row;
    return q(type, level, "Part 7 - Reading", "Read the passage and answer the question.", email(title, body, question), shuffle([answer, "To change a meeting location", "To request payment immediately", "To introduce a new employee"]), null, "答案可由文章中的關鍵句直接推論。", levelToDifficulty(level), "高", level === "gold" ? "中" : "高", keywords);
  }
  const [body, question, answer, level, keywords] = row;
  return q(type, level, "Part 3/4 - Listening", "Read the transcript and answer the question.", transcript(body, question), shuffle([answer, "A delayed invoice", "A new company policy", "A missing product sample"]), null, "聽力題重點是抓住說話者接下來要做的動作或公告中的變更。", levelToDifficulty(level), "高", level === "gold" ? "中" : "高", keywords);
}

function levelToDifficulty(level) {
  return {
    orange: "入門",
    brown: "基礎",
    green: "中等",
    blue: "進階",
    gold: "高階"
  }[level] || "中等";
}

function prepareAnswer(question) {
  if (question.answer === null) {
    const answerText = question.keywords && question.choices.find(choice => question.explanation.includes(choice));
    question.answer = answerText ? question.choices.indexOf(answerText) : 0;
  }
  if (!question.answerText && question.answer === null) question.answer = 0;
  return question;
}

function buildQuestionPool(focus, level) {
  const types = focus === "mixed" ? Object.keys(typeLabels) : [focus];
  let pool = baseQuestions.filter(question => types.includes(question.type));

  const generated = [];
  for (let i = 0; i < 140; i += 1) {
    const type = types[i % types.length];
    const source = type === "reading"
      ? readingScenarios[i % readingScenarios.length]
      : type === "listening"
        ? listeningScenarios[i % listeningScenarios.length]
        : templateSets[type][i % templateSets[type].length];
    generated.push(generatedQuestion(type, source, i));
  }

  pool = [...pool, ...generated].map(question => {
    const copy = normalize(question);
    if (copy.answer === null) {
      const correctText = getCorrectText(question);
      copy.answer = copy.choices.indexOf(correctText);
    }
    return copy;
  });

  if (level !== "all") {
    const allowed = new Set(levelDifficulty[level]);
    pool = pool.filter(question => question.level === level || allowed.has(question.difficulty));
  }
  return shuffle(pool);
}

function getCorrectText(question) {
  const source = [...templateSets.vocabulary, ...templateSets.grammar].find(row => row[1] === question.prompt);
  if (source) return source[0];
  const reading = readingScenarios.find(row => question.prompt.includes(row[0]));
  if (reading) return reading[3];
  const listening = listeningScenarios.find(row => question.prompt.includes(row[0].slice(0, 18)));
  if (listening) return listening[2];
  return question.choices[question.answer || 0];
}

function startTest() {
  const count = Number(els.questionCount.value);
  state.mode = els.mode.value;
  state.questions = buildQuestionPool(els.focus.value, els.level.value).slice(0, count);
  state.current = 0;
  state.startedAt = Date.now();
  state.finished = false;
  clearInterval(state.timerId);
  state.timerId = setInterval(updateTimer, 1000);
  els.emptyState.classList.add("hidden");
  els.questionView.classList.remove("hidden");
  renderAll();
}

function renderAll() {
  renderQuestion();
  renderNav();
  renderStats();
  updateTimer();
}

function renderQuestion() {
  const question = state.questions[state.current];
  if (!question) return;
  els.partLabel.textContent = question.part;
  els.questionTitle.textContent = `Question ${state.current + 1}`;
  els.difficulty.textContent = question.difficulty;
  els.badges.innerHTML = [
    `<span class="badge ${question.level}">${certLevels[question.level].label} ${certLevels[question.level].range}</span>`,
    `<span class="badge hot">題型常見度：${question.toeicFrequency}</span>`,
    `<span class="badge word">單字常見度：${question.wordFrequency}</span>`
  ].join("");
  els.prompt.innerHTML = question.prompt;
  els.choices.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.innerHTML = `<span>${String.fromCharCode(65 + index)}</span><span>${choice}</span>`;
    button.addEventListener("click", () => selectChoice(index));
    if (question.selected === index) button.classList.add("selected");
    if (question.checked || state.finished) {
      if (index === question.answer) button.classList.add("correct-choice");
      if (question.selected === index && index !== question.answer) button.classList.add("wrong-choice");
    }
    els.choices.appendChild(button);
  });

  els.prevBtn.disabled = state.current === 0;
  els.nextBtn.disabled = state.current === state.questions.length - 1;
  els.checkBtn.classList.toggle("hidden", state.mode !== "practice" || state.finished);
  els.finishBtn.classList.toggle("hidden", state.mode !== "exam" || state.finished);
  els.checkBtn.disabled = question.selected === null || question.checked;
  renderFeedback(question);
}

function renderFeedback(question) {
  const shouldShow = question.checked || state.finished;
  els.feedback.classList.toggle("hidden", !shouldShow);
  if (!shouldShow) return;
  const isCorrect = question.selected === question.answer;
  els.feedback.className = `feedback ${isCorrect ? "good" : "bad"}`;
  const selected = question.selected === null ? "未作答" : `${String.fromCharCode(65 + question.selected)}. ${question.choices[question.selected]}`;
  const correct = `${String.fromCharCode(65 + question.answer)}. ${question.choices[question.answer]}`;
  els.feedback.innerHTML = `<strong>${isCorrect ? "答對了" : "需要複習"}</strong><br>你的答案：${selected}<br>正確答案：${correct}<br>${question.explanation}<br><br>核心字：${question.keywords.join("、")}`;
}

function selectChoice(index) {
  if (state.finished) return;
  const question = state.questions[state.current];
  if (state.mode === "practice" && question.checked) return;
  question.selected = index;
  renderAll();
}

function checkCurrent() {
  const question = state.questions[state.current];
  if (question.selected === null) return;
  question.checked = true;
  renderAll();
}

function finishExam() {
  state.finished = true;
  state.questions.forEach(question => {
    question.checked = true;
  });
  clearInterval(state.timerId);
  saveResult();
  renderAll();
}

function maybeSavePracticeResult() {
  if (state.mode !== "practice") return;
  const allChecked = state.questions.length && state.questions.every(question => question.checked);
  if (allChecked && !state.finished) {
    state.finished = true;
    clearInterval(state.timerId);
    saveResult();
  }
}

function saveResult() {
  const checked = state.questions.filter(question => question.checked || state.finished);
  if (!checked.length) return;
  const correct = checked.filter(question => question.selected === question.answer).length;
  const accuracy = Math.round((correct / checked.length) * 100);
  const score = estimateScore(accuracy);
  const record = {
    date: new Date().toLocaleString("zh-TW"),
    mode: state.mode,
    focus: els.focus.value,
    level: els.level.value,
    total: state.questions.length,
    correct,
    accuracy,
    score,
    color: scoreColor(score),
    seconds: Math.floor((Date.now() - state.startedAt) / 1000)
  };
  const user = store.users[store.currentUser] || { history: [] };
  user.history = [record, ...user.history].slice(0, 20);
  store.users[store.currentUser] = user;
  saveStore();
  renderHistory();
}

function renderNav() {
  els.questionNav.innerHTML = "";
  state.questions.forEach((question, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = index + 1;
    if (index === state.current) button.classList.add("current");
    if (question.checked || state.finished) {
      button.classList.add(question.selected === question.answer ? "correct" : "wrong");
    }
    button.addEventListener("click", () => {
      state.current = index;
      renderAll();
    });
    els.questionNav.appendChild(button);
  });
}

function renderStats() {
  const checked = state.questions.filter(question => question.checked || state.finished);
  const correct = checked.filter(question => question.selected === question.answer).length;
  const answered = state.questions.filter(question => question.selected !== null).length;
  const accuracy = checked.length ? Math.round((correct / checked.length) * 100) : 0;
  const score = checked.length ? estimateScore(accuracy) : null;
  const color = score ? scoreColor(score) : null;
  els.correctCount.textContent = correct;
  els.progressCount.textContent = `${answered}/${state.questions.length}`;
  els.accuracy.textContent = `${accuracy}%`;
  els.accuracyBar.style.width = `${accuracy}%`;
  els.estimate.textContent = score ? `${score} / 990 ${certLevels[color].label}` : "--";
  renderWeaknesses();
  renderReview();
  maybeSavePracticeResult();
}

function estimateScore(accuracy) {
  return Math.max(10, Math.min(990, Math.round(10 + accuracy * 9.8)));
}

function scoreColor(score) {
  return Object.entries(certLevels).find(([, level]) => score >= level.min && score <= level.max)?.[0] || "gold";
}

function renderWeaknesses() {
  if (!state.questions.length) return;
  const checked = state.questions.filter(question => question.checked || state.finished);
  if (!checked.length) {
    els.weaknessList.innerHTML = "<li>作答並批改後會顯示統計。</li>";
    return;
  }
  const rows = Object.keys(typeLabels).map(type => {
    const group = checked.filter(question => question.type === type);
    const correct = group.filter(question => question.selected === question.answer).length;
    const rate = group.length ? Math.round((correct / group.length) * 100) : null;
    return { type, label: typeLabels[type], total: group.length, rate };
  }).filter(row => row.total > 0).sort((a, b) => a.rate - b.rate);
  els.weaknessList.innerHTML = rows.map(row => `<li><strong>${row.label}</strong> ${row.rate}% (${row.total} 題)</li>`).join("");
}

function renderReview() {
  const wrong = state.questions
    .map((question, index) => ({ question, index }))
    .filter(item => (item.question.checked || state.finished) && item.question.selected !== item.question.answer);
  if (!wrong.length) {
    els.reviewList.textContent = state.questions.some(question => question.checked || state.finished) ? "目前沒有錯題。" : "尚無錯題。";
    return;
  }
  els.reviewList.innerHTML = wrong.map(({ question, index }) => {
    const selected = question.selected === null ? "未作答" : question.choices[question.selected];
    return `<div class="review-item"><strong>Q${index + 1} ${typeLabels[question.type]}</strong>你的答案：${selected}<br>正解：${question.choices[question.answer]}<br>核心字：${question.keywords.join("、")}</div>`;
  }).join("");
}

function renderHistory() {
  const user = store.users[store.currentUser];
  if (!user || !user.history.length) {
    els.historyList.textContent = "這位使用者尚無紀錄。";
    return;
  }
  els.historyList.innerHTML = user.history.map(record => {
    const focus = record.focus === "mixed" ? "混合" : typeLabels[record.focus];
    const level = record.level === "all" ? "全部" : certLevels[record.level].label;
    return `<div class="history-item"><strong>${record.correct}/${record.total}・${record.accuracy}%・${record.score} ${certLevels[record.color].label}</strong><span class="history-meta">${record.date}<br>${focus} / ${level} / ${record.mode === "practice" ? "練習" : "模擬"} / ${formatTime(record.seconds)}</span></div>`;
  }).join("");
}

function updateTimer() {
  if (!state.startedAt) {
    els.timer.textContent = "--:--";
    return;
  }
  const elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
  els.timer.textContent = formatTime(elapsed);
}

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

els.startBtn.addEventListener("click", startTest);
els.addUserBtn.addEventListener("click", addUser);
els.userName.addEventListener("change", () => {
  store.currentUser = els.userName.value;
  saveStore();
  renderHistory();
});
els.prevBtn.addEventListener("click", () => {
  state.current = Math.max(0, state.current - 1);
  renderAll();
});
els.nextBtn.addEventListener("click", () => {
  state.current = Math.min(state.questions.length - 1, state.current + 1);
  renderAll();
});
els.checkBtn.addEventListener("click", checkCurrent);
els.finishBtn.addEventListener("click", finishExam);

renderUsers();
