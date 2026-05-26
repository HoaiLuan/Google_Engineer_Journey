---

## 📊 Overall Stats

| Metric | Current | Target Year 1 |
|--------|---------|---------------|
| Days completed | 4 / 1095 | 365 |
| LeetCode solved | 1 | 150 |
| Projects built | 0 | 5+ |
| GitHub commits | ~10 | 365+ |
| English level | A1-A2 | B2 |
| Blog posts | 0 | 12+ |

---

## 📅 Daily Log

### Day 1 — 21/05/2026 ✅
**Topic:** Environment Setup

**Completed:**
- [x] Installed Node.js v20+
- [x] Installed VS Code + 7 essential extensions
- [x] Setup Git config (user.name, user.email)
- [x] Created GitHub account
- [x] Setup SSH key for GitHub
- [x] Created folder `~/dev-journey/`
- [x] Initialized git repo `learning-journey`
- [x] Created profile README on GitHub (`HoaiLuan/HoaiLuan`)
- [x] First push to GitHub

**Key learnings:**
1. Git workflow basics (init, add, commit, push)
2. Markdown syntax for README
3. SSH key authentication
4. VS Code shortcuts (Ctrl+P, Ctrl+Shift+P)

**Tools setup:**
- VS Code with: Prettier, ESLint, GitLens, Live Server, Material Icon Theme, Auto Rename Tag, Path Intellisense

**Challenges:**
- 2FA loop on GitHub → resolved by setting up new passkey "080603"

**Files:** None yet (setup only)

---

### Day 2 — 22/05/2026 ✅
**Topic:** Variables & Data Types

**Completed:**
- [x] Created `02-variables.js`
- [x] Learned var vs let vs const
- [x] Practiced 7 primitive types
- [x] Type coercion experiments
- [x] typeof operator usage
- [x] Object and array basics
- [x] Pushed to GitHub

**Key learnings:**
1. `const` by default, `let` when need to reassign, avoid `var`
2. 7 primitives: string, number, bigint, boolean, null, undefined, symbol
3. `null + 1 = 1` (null → 0), but `undefined + 1 = NaN`
4. `0.1 + 0.2 !== 0.3` (floating point precision!)
5. `typeof null === "object"` (historical JS bug)

**Code snippets practiced:**
```javascript
let str = "Hello";
let num = 42;
let bool = true;
const PI = 3.14159;

console.log(typeof str);  // "string"
console.log("5" + 3);      // "53" (coercion)
console.log("5" - 3);      // 2 (coercion)
```

**Challenges:**
- Confused về `==` vs `===` initially
- Surprised by floating point arithmetic

---

### Day 3 — 23/05/2026 ✅ (Late Night Sprint!)
**Topic:** Operators & Conditionals

**Completed:**
- [x] Created `03-operators-conditionals.js`
- [x] Studied arithmetic operators (+, -, *, /, %, **)
- [x] Comparison operators (==, ===, !=, !==)
- [x] Logical operators (&&, ||, !) + short-circuit
- [x] Ternary operator (? :)
- [x] if/else if/else
- [x] switch case
- [x] **Implemented FizzBuzz** (self-debugged 5 bugs!)
- [x] **Implemented Grade Calculator** with proper return

**Key learnings:**
1. **ALWAYS use `===` and `!==`** — never `==` (avoid coercion bugs)
2. **Modulus `%` is powerful** — FizzBuzz, even/odd, cycles
3. **Order matters in if/else** — check strictest case FIRST
4. **`return` vs `console.log`**:
   - `console.log` = print to screen
   - `return` = give value back to caller
5. **Function should RETURN** for reusability
6. Short-circuit: `user && user.name` prevents crash on null
7. `||` for defaults: `name || "Anonymous"`

**Code highlights:**
```javascript
// FizzBuzz - self-coded, no solution viewed
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Grade Calculator - with return pattern
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}
```

**Challenges & Wins:**
- Started with 5 bugs in FizzBuzz:
  1. Missing `let` in for loop
  2. Used `=` instead of `<=`
  3. `let = 15` syntax error
  4. Wrong condition order (Fizz before FizzBuzz)
  5. if/else outside for loop
- **Fixed all 5 without viewing solution** 🎉
- Realized importance of struggle = real learning

**Time logged:** Late night sprint (22:00 - 23:50 PM)

**Deep dive:** Short-circuit evaluation (`&&`, `||`, `??`) — understood that they return VALUE, not boolean

---

### Day 4 — 24/05/2026 ✅ (In progress)
**Topic:** Loops (Vòng lặp)

**Completed (Theory - 1h):**
- [x] Created `04-loops.js`
- [x] for loop variations (counting up, down, step)
- [x] while loop
- [x] do...while loop
- [x] for...of (for arrays/strings)
- [x] for...in (for objects)
- [x] break vs continue
- [x] Nested loops + Big-O preview
- [x] Array methods preview (forEach, map, filter, reduce)

**In Progress (Exercises - 1h):**
- [ ] Sum 1 to N
- [ ] Count Even Numbers
- [ ] Reverse String

**English (catch-up - 30'):**
- [ ] Install Duolingo
- [ ] Complete 5 Duolingo lessons
- [ ] Learn 20 tech vocab (Day 1-4)

**Key learnings:**
1. **for...of > traditional for** for array iteration (cleaner)
2. **while loop = không biết số lần** (use when condition complex)
3. **break vs continue:**
   - break = exit loop completely
   - continue = skip current iteration
4. **Nested loops = O(n²)** — avoid when possible
5. **`for...of` returns VALUE** | **`for...in` returns KEY**

**Next actions:**
- Complete 3 exercises
- Catch up English (Day 1-3 vocab)
- LeetCode #88 Merge Sorted Array

---

## 🎯 LeetCode Tracker

| # | Problem | Difficulty | Date | Pattern | Time | Status |
|---|---------|------------|------|---------|------|--------|
| 1 | Two Sum | Easy | Day 1 | Hash Table | 30' | ✅ Solved (brute force) |

**Total:** 1 problem  
**Target for Week 1:** 3 problems  
**Plan:** #88 Merge Sorted Array (Day 4), #136 Single Number (Day 5)

---

## 📚 Concepts Mastered

### Week 1 Progress

| Concept | Day | Confidence (1-5) |
|---------|-----|------------------|
| Git basics | 1 | ⭐⭐⭐⭐ |
| VS Code setup | 1 | ⭐⭐⭐⭐⭐ |
| Variables (let/const) | 2 | ⭐⭐⭐⭐ |
| Primitive types | 2 | ⭐⭐⭐⭐ |
| Type coercion | 2 | ⭐⭐⭐ |
| Arithmetic operators | 3 | ⭐⭐⭐⭐⭐ |
| Comparison (=== vs ==) | 3 | ⭐⭐⭐⭐⭐ |
| Logical operators | 3 | ⭐⭐⭐⭐ |
| Short-circuit | 3 | ⭐⭐⭐⭐ |
| Ternary | 3 | ⭐⭐⭐⭐ |
| if/else patterns | 3 | ⭐⭐⭐⭐⭐ |
| switch case | 3 | ⭐⭐⭐⭐ |
| Functions + return | 3 | ⭐⭐⭐⭐ |
| for loop | 4 | ⭐⭐⭐⭐⭐ |
| while loop | 4 | ⭐⭐⭐⭐ |
| for...of / for...in | 4 | ⭐⭐⭐ |
| break/continue | 4 | ⭐⭐⭐⭐ |

---

## 🌐 English Progress

### Daily English (Goal: 1h/day)

| Day | Duolingo | Anki | Reading | Listening | Speaking |
|-----|----------|------|---------|-----------|----------|
| 1 | ⭕ Skip | ⭕ | ⭕ | ⭕ | ⭕ |
| 2 | ⭕ Skip | ⭕ | ⭕ | ⭕ | ⭕ |
| 3 | ⭕ Skip | ⭕ | ⭕ | ⭕ | ⭕ |
| 4 | 🔄 Tonight | 🔄 Tonight | ⭕ | ⭕ | ⭕ |

**Status:** ⚠️ Behind schedule - catching up tonight with 30 min sprint

**Vocab learned:**
- Day 4: function, variable, array, loop, debug, compile, syntax, algorithm, execute, declare (10 words)
- Tonight target: condition, operator, iterate, parameter, return, boolean, statement, expression, string, number (10 more)

**Total vocab:** 20 words active

---

## 🏆 Milestones Achieved

- ✅ **Day 1:** Set up complete dev environment
- ✅ **Day 1:** First GitHub commit
- ✅ **Day 1:** Created profile README
- ✅ **Day 1:** Solved first LeetCode problem (Two Sum)
- ✅ **Day 3:** Self-debugged 5 bugs without help
- ✅ **Day 3:** Implemented FizzBuzz (interview classic)
- ✅ **Day 3:** Implemented Grade Calculator with proper function design
- 🎯 **Day 4 (in progress):** Mastering loops fundamentals

---

## 💡 Key Insights & Reflections

### Day 1-2 Reflections
- Setup phase important — don't rush
- Better tools = better productivity (VS Code extensions worth time)
- Git habit must start from Day 1

### Day 3 Reflections
- **Late night coding is harder but possible** — but not sustainable
- **Struggle = real learning** — viewing solutions = forgetting fast
- **Bugs are friends, not enemies** — each bug fixed = new knowledge
- **Don't skip English** — pattern of skipping = will continue skipping

### Day 4 Reflections (so far)
- Theory phase faster when motivated
- Need to balance theory + practice (not just reading)
- English catch-up is harder than starting fresh
- Loops are foundation for ALL algorithms

---

## 🚧 Challenges & Solutions

| Day | Challenge | Solution | Lesson |
|-----|-----------|----------|--------|
| 1 | GitHub 2FA loop | Created new passkey | Always backup auth methods |
| 3 | FizzBuzz 5 bugs | Iterated with hints from mentor | Bugs teach more than solutions |
| 3 | Late night = slow | Self-imposed 12 AM cutoff | Sleep > extra hours |
| 4 | English skipped 3 days | 30 min catch-up sprint | Daily > weekly bursts |

---

## 📅 Upcoming Plan

### Tomorrow (Day 5) - Functions Deep Dive
- Function declaration vs expression
- Arrow functions
- Default + rest parameters
- LeetCode #88 Merge Sorted Array
- English Day 5 (no more skipping!)

### This Week (Week 1 Goals)
- [ ] Complete Day 4-7 of code
- [ ] Solve 3 LeetCode Easy problems
- [ ] Catch up English completely (20+ words)
- [ ] First blog post on dev.to

### This Month (Month 1 Capstone)
- [ ] Build Pomodoro Timer App (vanilla JS)
- [ ] Deploy to GitHub Pages
- [ ] 15-20 LeetCode problems
- [ ] 500 active vocab words

---

## 🛠️ Tech Stack Used So Far

- **Language:** JavaScript (ES6+)
- **Editor:** VS Code
- **Version Control:** Git + GitHub
- **Runtime:** Node.js v20+
- **Documentation:** Markdown
- **Tools:** Terminal (Warp/iTerm)

---

## 📈 Streak Tracker
