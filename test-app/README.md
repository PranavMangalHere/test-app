# Quiz CLI

An interactive command-line quiz game for learning JavaScript, Node.js, and general programming concepts.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Quiz](#running-the-quiz)
- [How It Works](#how-it-works)
- [Question Data](#question-data)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview

Quiz CLI is a terminal-based quiz application implemented as an ES module Node.js program. It loads quiz questions from a JSON file, lets the player choose a category and question count, presents questions interactively, displays results, and offers the option to play again.

The included question categories are JavaScript Basics, Node.js Fundamentals, and General Programming.

## Features

- Interactive terminal menus for category and question-count selection.
- Three built-in programming quiz categories.
- Choice of all available questions, three questions, or five questions when enough questions exist.
- Immediate interactive question flow with explanations stored in the question data.
- Score/results display through the quiz implementation.
- Option to play multiple rounds in one session.
- Colored terminal output and user-friendly error handling.
- Questions loaded asynchronously from `data/questions.json`.

## Technology Stack

- **Runtime:** Node.js 18 or newer.
- **Language:** JavaScript using ECMAScript modules.
- **Dependencies:** No external npm dependencies are declared.
- **Testing:** Node.js built-in test runner.
- **License:** MIT.

## Prerequisites

Install Node.js version 18 or later. npm is normally included with Node.js.

Verify the runtime:

```bash
node --version
npm --version
```

## Installation

Clone the repository and enter the application directory:

```bash
git clone <repository-url>
cd test-app
```

No package dependencies are currently declared, so there is no required dependency installation step. Running `npm install` is harmless if you want npm to create/update its local package metadata, but the application itself uses only Node.js and local source files.

## Running the Quiz

Start the application with:

```bash
npm start
```

Alternatively, run the entry point directly:

```bash
node index.js
```

During a session:

1. Choose a quiz category.
2. Choose all questions, three questions, or five questions when available.
3. Press Enter to begin.
4. Select an answer by entering its displayed number.
5. Review the results and explanations provided by the quiz flow.
6. Choose whether to play another round.

The executable entry point is `index.js`, which is also marked with a Node.js shebang.

## How It Works

1. `index.js` creates the terminal input interface.
2. Questions are read asynchronously from `data/questions.json` and parsed as JSON.
3. Category names are presented to the user.
4. The selected category's questions are sliced according to the chosen count.
5. A `Quiz` instance runs the question flow and displays results.
6. The application repeats until the player chooses not to continue.
7. The input interface is closed in the `finally` block, including after an error.

The application uses native Node.js modules for file loading and ES module-compatible path resolution, including `node:fs/promises`, `node:url`, and `node:path`.

## Question Data

Questions are stored in `data/questions.json` under the `categories` object. Each category contains:

- `name`: the user-facing category name.
- `questions`: an array of question objects.

Each question object contains:

- `question`: the prompt shown to the player.
- `options`: the possible answers.
- `answer`: the zero-based index of the correct option.
- `explanation`: an explanation associated with the correct answer.

To add or update quiz content, edit `data/questions.json` while preserving this structure. The application currently includes five questions in each of its three categories.

## Testing

Run the configured test command with:

```bash
npm test
```

This invokes Node.js's built-in test runner using `node --test`. No test files or additional test configuration are present in the repository, so the command may report that no tests were found until tests are added.

## Project Structure

```text
test-app/
├── data/
│   └── questions.json   # Categories and quiz questions
├── index.js             # Application entry point and main game loop
├── package.json         # Project metadata and npm scripts
└── README.md            # Project documentation
```

`index.js` imports `src/input.js`, `src/quiz.js`, and `src/colors.js`. These modules are referenced by the entry point and are expected to provide terminal input helpers, quiz behavior, and color-formatting helpers respectively.

## Troubleshooting

### The application cannot find an imported module

Confirm that the `src/` modules referenced by `index.js` are present in your checkout and that you are running the command from the application directory.

### Questions fail to load

Ensure `data/questions.json` exists, contains valid JSON, and retains the expected `categories` structure. The application reports the error message and stack trace before exiting with status code 1.

### The terminal display does not clear

The welcome banner calls `console.clear()`. Terminal behavior can vary by environment; this does not affect quiz execution.

## Contributing

The repository does not define a formal contribution workflow. For changes, preserve the existing ES module configuration, keep question data compatible with the documented JSON shape, and run `npm test` before submitting changes.

## License

This project declares the [MIT License](https://opensource.org/licenses/MIT) in `package.json`.
