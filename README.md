# quiz-cli

An interactive command-line quiz game for learning JavaScript.

## Overview

`quiz-cli` is a JavaScript command-line application that presents multiple-choice questions in an interactive terminal session. It loads quiz content from `data/questions.json`, lets the player choose a category and question count, accepts answers, displays results, and offers the option to play again.

The package metadata identifies the project as version `1.0.0` and describes it as an educational quiz game.

## Features

The inspected application code supports:

- A terminal welcome banner.
- Quiz category selection.
- Selection of the number of questions.
- Interactive answering of quiz questions.
- Result viewing after a quiz.
- Explanations associated with questions.
- The option to play again.
- Error handling and cleanup of the readline interface when execution finishes.

## Technology Stack

- **Language:** JavaScript
- **Runtime:** Node.js `>=18.0.0`
- **Module system:** ECMAScript modules (`"type": "module"`)
- **Node.js APIs used:** `node:fs/promises`, `node:url`, and `node:path`
- **Application type:** Command-line interface (CLI)
- **Dependencies:** No runtime or development dependencies are declared in `package.json`

## Prerequisites

- Node.js `18.0.0` or later.
- A terminal capable of running an interactive Node.js program.

## Installation

Clone the repository and change into its directory:

```bash
git clone https://github.com/PranavMangalHere/test-app.git
cd test-app
```

No package dependencies are declared by the inspected `package.json`, so no dependency-installation command is specified by the repository metadata.

> **Important:** The inspected `index.js` imports `./src/input.js`, `./src/quiz.js`, and `./src/colors.js`, but no `src/` directory or those files were present in the verified repository structure. The application may therefore not run from the inspected `main` branch until those modules are available. This README does not infer their implementation or provide replacement commands.

## Running the Application

The declared start script is:

```bash
npm start
```

It resolves to `node index.js`.

The application is designed to load `data/questions.json`, present the welcome banner, guide the user through category and question-count selection, collect answers, show results, and allow another game. Because the imported source modules listed above were not present in the inspected branch, successful runtime behavior cannot be confirmed for that branch.

## Testing

The declared test script is:

```bash
npm test
```

It resolves to:

```bash
node --test
```

No test files or test directories were found in the verified repository structure. The repository therefore does not provide an identified test suite to run, and successful test execution cannot be confirmed from the inspected branch.

## Quiz Data

Quiz content is stored in `data/questions.json`. The verified data contains three categories, with five questions in each category:

- **JavaScript Basics** — constants, array methods, strict equality, primitive types, and `typeof null`.
- **Node.js Fundamentals** — filesystem functionality, the event loop, `npm init`, `process.argv`, and ECMAScript module imports.
- **General Programming** — APIs, recursion, JSON, callbacks, and version control.

Each question entry contains:

- `question`: the question text.
- `options`: the available answer choices.
- `answer`: a zero-based index identifying the correct option.
- `explanation`: an explanation associated with the answer.

The repository does not specify a separate schema-validation command or data-editing tool.

## Architecture and Application Flow

The verified entry point is `index.js`. Its observable responsibilities are:

1. Import Node.js filesystem, URL, and path APIs.
2. Import the input, quiz, and color modules from `src/`.
3. Load `data/questions.json`.
4. Display the terminal welcome banner.
5. Coordinate category selection, question-count selection, interactive answers, results, and replay.
6. Close the readline interface in a `finally` block.

A `Quiz` class is used by the entry point. The implementations of the imported `src/input.js`, `src/quiz.js`, and `src/colors.js` modules were not present in the verified file structure, so their internal design and exact interfaces are not documented here.

## Project Structure

Only the following files were verified on the inspected `main` branch:

```text
test-app/
├── data/
│   └── questions.json   # Quiz categories and question data
├── index.js             # CLI entry point and application flow
└── package.json         # Project metadata, scripts, and Node.js engine requirement
```

No `README.md`, `src/` directory, test files or directories, lockfiles, `.env` files, deployment or container files, or CI workflow files were found in the verified structure.

## Development Notes

- The package uses ECMAScript module syntax through `"type": "module"`.
- The entry point uses asynchronous functions and the promise-based filesystem API.
- Quiz data is read from the repository rather than described as being provided by an external service.
- There are no declared package dependencies to install or update.
- The package declares `index.js` as its main entry point.

## Limitations and Verified Repository Inconsistencies

The following limitations are based on the inspected `main` branch and are intentionally not resolved or inferred in this documentation:

- `index.js` imports `./src/input.js`, `./src/quiz.js`, and `./src/colors.js`, but those files were not returned in the verified repository structure. The CLI may not start until the missing modules are available.
- `npm test` is declared, but no test files or directories were found. The presence of a passing test suite is not verified.
- No deployment procedure, container configuration, CI workflow, environment-variable configuration, or lockfile is specified by the repository.
- The exact behavior and APIs of the missing `src/` modules cannot be documented from the inspected files.

## License

The `package.json` declares the project license as **MIT**. No separate license file was included in the verified repository structure.

## Repository

[https://github.com/PranavMangalHere/test-app](https://github.com/PranavMangalHere/test-app)
