const banks = {
  vocabulary: [
    {
      part: "Part 5 - Incomplete Sentences",
      title: "Choose the best word to complete the sentence.",
      prompt: "The marketing team will release the new brochure once the final design has been ____ by the client.",
      choices: ["approved", "approving", "approval", "approves"],
      answer: 0,
      explanation: "空格前有 has been，後面需要過去分詞形成被動語態，所以選 approved。",
      difficulty: "中等"
    },
    {
      part: "Part 5 - Incomplete Sentences",
      title: "Choose the best word to complete the sentence.",
      prompt: "The hotel offers a ____ shuttle service between the airport and the downtown branch.",
      choices: ["complimentary", "compliment", "complement", "completed"],
      answer: 0,
      explanation: "complimentary 表示免費的、附贈的，符合飯店接駁服務語境。",
      difficulty: "中等"
    },
    {
      part: "Part 5 - Incomplete Sentences",
      title: "Choose the best word to complete the sentence.",
      prompt: "Please keep all receipts so that the accounting department can ____ your travel expenses.",
      choices: ["reimburse", "subscribe", "announce", "preserve"],
      answer: 0,
      explanation: "reimburse 是報銷、償還費用，和 travel expenses 搭配自然。",
      difficulty: "中等"
    }
  ],
  grammar: [
    {
      part: "Part 5 - Incomplete Sentences",
      title: "Choose the best answer.",
      prompt: "The sales report must be submitted ____ noon on Friday.",
      choices: ["by", "for", "during", "about"],
      answer: 0,
      explanation: "by noon 表示不晚於中午前完成，是截止時間常用介系詞。",
      difficulty: "基礎"
    },
    {
      part: "Part 5 - Incomplete Sentences",
      title: "Choose the best answer.",
      prompt: "Neither the manager nor the assistants ____ available for the call this afternoon.",
      choices: ["are", "is", "was", "be"],
      answer: 0,
      explanation: "neither...nor 的動詞通常與較近主詞一致，assistants 為複數，所以用 are。",
      difficulty: "進階"
    },
    {
      part: "Part 6 - Text Completion",
      title: "Choose the best sentence connector.",
      prompt: "The training room is under renovation this week. ____ all onboarding sessions will be held online.",
      choices: ["Therefore,", "Although,", "Meanwhile,", "For example,"],
      answer: 0,
      explanation: "前後是因果關係，場地整修導致課程改線上，因此 Therefore 最合理。",
      difficulty: "中等"
    }
  ],
  reading: [
    {
      part: "Part 7 - Single Passage",
      title: "Read the notice and answer the question.",
      prompt: `<div class="email"><strong>Notice</strong><br><br>To reduce waiting time at the front desk, all visitors to Hartwell Tower must register online at least one day before arrival. After registering, visitors will receive a QR code by e-mail. Security staff will scan the code at the entrance.<br><br><strong>Question:</strong> What are visitors asked to do?</div>`,
      choices: ["Register before they arrive", "Call security after entering", "Print a monthly pass", "Wait at the front desk"],
      answer: 0,
      explanation: "公告指出 visitors must register online at least one day before arrival，因此答案是事先登記。",
      difficulty: "基礎"
    },
    {
      part: "Part 7 - E-mail",
      title: "Read the e-mail and answer the question.",
      prompt: `<div class="email"><strong>Subject: Updated Delivery Schedule</strong><br><br>Dear Ms. Lin,<br><br>Due to a delay at the warehouse, the display units will arrive on Thursday instead of Tuesday. Our installation team can still complete the setup by Friday afternoon if they receive access to the showroom by 8 A.M.<br><br>Regards,<br>Daniel Ortiz<br><br><strong>Question:</strong> Why did Daniel write the e-mail?</div>`,
      choices: ["To explain a change in arrival date", "To request a product refund", "To cancel an installation", "To advertise a showroom"],
      answer: 0,
      explanation: "信件主旨和內容都在說 delivery schedule 改期，重點是貨品抵達日從週二改到週四。",
      difficulty: "中等"
    }
  ],
  listening: [
    {
      part: "Part 3 - Conversation",
      title: "Read the transcript and answer the question.",
      prompt: `<div class="transcript"><strong>Transcript</strong><br>Woman: The projector in Conference Room B is not working again.<br>Man: I will move the client meeting to Room D. Could you tell reception about the change?<br>Woman: Sure, I will update the room sign as well.</div><strong>Question:</strong> What will the man probably do?`,
      choices: ["Change the meeting location", "Repair the projector", "Cancel the client meeting", "Call the equipment supplier"],
      answer: 0,
      explanation: "男士說 I will move the client meeting to Room D，表示他會更換會議地點。",
      difficulty: "基礎"
    },
    {
      part: "Part 4 - Short Talk",
      title: "Read the transcript and answer the question.",
      prompt: `<div class="transcript"><strong>Transcript</strong><br>Good morning. This is a reminder that the south parking entrance will be closed from 9 A.M. to 3 P.M. today while crews repaint the traffic lines. Employees should use the west entrance during this time.</div><strong>Question:</strong> What are employees instructed to do?`,
      choices: ["Use a different entrance", "Move their cars by 3 P.M.", "Repaint the parking lines", "Park outside the building"],
      answer: 0,
      explanation: "廣播說 employees should use the west entrance，指示員工使用不同入口。",
      difficulty: "基礎"
    }
  ]
};

const templates = {
  vocabulary: [
    {
      words: ["confirm", "revise", "inspect", "extend"],
      make: word => ({
        part: "Part 5 - Vocabulary",
        title: "Choose the best word.",
        prompt: `Before signing the contract, the legal team needs to ____ the payment terms carefully.`,
        choices: shuffle(["review", word, "deliver", "reserve"]),
        answerText: "review",
        explanation: "payment terms 是條款，簽約前應該 review，表示審閱。"
      })
    },
    {
      words: ["inventory", "deadline", "agenda", "invoice"],
      make: word => ({
        part: "Part 5 - Vocabulary",
        title: "Choose the best word.",
        prompt: `The supplier sent a revised ____ after adding the express shipping fee.`,
        choices: shuffle(["invoice", word, "agenda", "directory"]),
        answerText: "invoice",
        explanation: "加上運費後供應商會寄修改後的 invoice，也就是發票或請款單。"
      })
    }
  ],
  grammar: [
    {
      make: () => ({
        part: "Part 5 - Grammar",
        title: "Choose the best answer.",
        prompt: "The new software is easier to use than the version ____ last year.",
        choices: shuffle(["released", "releasing", "release", "has released"]),
        answerText: "released",
        explanation: "the version released last year 是省略關係代名詞的過去分詞片語，修飾 version。"
      })
    },
    {
      make: () => ({
        part: "Part 5 - Grammar",
        title: "Choose the best answer.",
        prompt: "Customers may return unopened items ____ thirty days of purchase.",
        choices: shuffle(["within", "until", "among", "beside"]),
        answerText: "within",
        explanation: "within thirty days 表示在三十天內，是退貨期限常見用法。"
      })
    }
  ],
  reading: [
    {
      make: () => ({
        part: "Part 7 - Reading",
        title: "Read the message and answer the question.",
        prompt: `<div class="email"><strong>Message</strong><br><br>The monthly staff lunch has been moved from the cafeteria to the rooftop terrace because the cafeteria floor is being repaired. Please bring your employee ID, as access to the terrace requires badge verification.<br><br><strong>Question:</strong> Why will the lunch be held on the rooftop terrace?</div>`,
        choices: shuffle(["The cafeteria is being repaired", "The terrace has new furniture", "Employee IDs are being replaced", "The lunch has become private"]),
        answerText: "The cafeteria is being repaired",
        explanation: "文中 because the cafeteria floor is being repaired 說明了地點更改原因。"
      })
    }
  ],
  listening: [
    {
      make: () => ({
        part: "Part 3 - Listening",
        title: "Read the transcript and answer the question.",
        prompt: `<div class="transcript"><strong>Transcript</strong><br>Man: I thought the training started at ten.<br>Woman: It did, but the presenter is stuck in traffic. We will begin at ten thirty.<br>Man: Great, I will let the new employees know.</div><strong>Question:</strong> What has changed?`,
        choices: shuffle(["The start time", "The presenter", "The training topic", "The list of employees"]),
        answerText: "The start time",
        explanation: "原本十點開始，因講者塞車改成十點半，改變的是開始時間。"
      })
    }
  ]
};

let state = {
  questions: [],
  current: 0,
  mode: "practice",
  startedAt: null,
  timerId: null,
  finished: false
};

const $ = selector => document.querySelector(selector);

const els = {
  mode: $("#mode"),
  questionCount: $("#questionCount"),
  focus: $("#focus"),
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
  reviewList: $("#reviewList")
};

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function normalizeGenerated(question, type) {
  if (question.answerText) {
    question.answer = question.choices.indexOf(question.answerText);
    delete question.answerText;
  }
  return {
    ...question,
    type,
    difficulty: question.difficulty || ["基礎", "中等", "進階"][Math.floor(Math.random() * 3)],
    selected: null,
    checked: false
  };
}

function buildQuestionPool(focus) {
  const types = focus === "mixed" ? Object.keys(banks) : [focus];
  const direct = types.flatMap(type => banks[type].map(item => normalizeGenerated({ ...item }, type)));
  const generated = [];

  for (let i = 0; i < 60; i += 1) {
    const type = types[i % types.length];
    const source = templates[type][Math.floor(Math.random() * templates[type].length)];
    const seed = source.words ? source.words[Math.floor(Math.random() * source.words.length)] : null;
    generated.push(normalizeGenerated(source.make(seed), type));
  }

  return shuffle([...direct, ...generated]);
}

function startTest() {
  const count = Number(els.questionCount.value);
  state.mode = els.mode.value;
  state.questions = buildQuestionPool(els.focus.value).slice(0, count);
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
  els.feedback.innerHTML = `<strong>${isCorrect ? "答對了" : "需要複習"}</strong><br>你的答案：${selected}<br>正確答案：${correct}<br>${question.explanation}`;
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
  renderAll();
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
  const estimate = checked.length ? Math.round(10 + accuracy * 4.85) : null;

  els.correctCount.textContent = correct;
  els.progressCount.textContent = `${answered}/${state.questions.length}`;
  els.accuracy.textContent = `${accuracy}%`;
  els.accuracyBar.style.width = `${accuracy}%`;
  els.estimate.textContent = estimate ? `${estimate} / 495` : "--";
  renderWeaknesses();
  renderReview();
}

function renderWeaknesses() {
  if (!state.questions.length) return;
  const checked = state.questions.filter(question => question.checked || state.finished);
  if (!checked.length) {
    els.weaknessList.innerHTML = "<li>作答並批改後會顯示統計。</li>";
    return;
  }

  const labels = {
    vocabulary: "語彙",
    grammar: "文法",
    reading: "閱讀理解",
    listening: "聽力理解"
  };
  const rows = Object.keys(labels).map(type => {
    const group = checked.filter(question => question.type === type);
    const correct = group.filter(question => question.selected === question.answer).length;
    const rate = group.length ? Math.round((correct / group.length) * 100) : null;
    return { type, label: labels[type], total: group.length, rate };
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
    return `<div class="review-item"><strong>Q${index + 1} ${question.type}</strong>你的答案：${selected}<br>正解：${question.choices[question.answer]}</div>`;
  }).join("");
}

function updateTimer() {
  if (!state.startedAt) {
    els.timer.textContent = "--:--";
    return;
  }
  const elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
  const mins = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const secs = String(elapsed % 60).padStart(2, "0");
  els.timer.textContent = `${mins}:${secs}`;
}

els.startBtn.addEventListener("click", startTest);
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
