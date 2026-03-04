# TypeScript Multi-Tool CLI

This is a comprehensive, multi-purpose command-line interface (CLI) tool built with **Node.js**, **TypeScript**, and **Commander.js**. 

It follows an Object-Oriented Architecture, encapsulating each command into its own dedicated class within the `commands/` directory.

## Features

- **Object-Oriented Architecture**: Clean, maintainable, and scalable design.
- **TypeScript**: Fully typed for development safety.
- **Commander.js**: Robust argument parsing and help menus.
- **Chalk**: Elegant, colorized terminal output.

## Prerequisites

- Node.js (v18 or newer recommended)
- npm

## Installation & Setup

1. **Clone the repository** (or navigate into the project directory).
2. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

You can run the CLI locally using `ts-node` during development:

```bash
npx ts-node cli.ts <command> [options]
```

To see the help menu and all available commands:
```bash
npx ts-node cli.ts --help
```

## Available Commands

The CLI tool includes 10 built-in utility commands. 

### 1. Random Number (`random`)
Generate a random integer between a minimum and maximum value.
```bash
npx ts-node cli.ts random 1 100
```

### 2. Palindrome Checker (`palindrome`)
Check if a given string is a palindrome (ignores case and non-alphanumeric characters).
```bash
npx ts-node cli.ts palindrome "racecar"
```

### 3. Word Count (`wordcount`)
Count the total number of words in a sentence.
```bash
npx ts-node cli.ts wordcount "hello world from typescript"
```

### 4. Factorial Calculator (`factorial`)
Calculate the factorial of a given non-negative integer.
```bash
npx ts-node cli.ts factorial 5
```

### 5. Fibonacci Sequence (`fibonacci`)
Print the Fibonacci sequence up to N numbers.
```bash
npx ts-node cli.ts fibonacci 10
```

### 6. UUID Generator (`uuid`)
Generate a random UUID v4 string.
```bash
npx ts-node cli.ts uuid
```

### 7. JSON Formatter (`jsonformat`)
Parse and pretty-print a minimized or raw JSON string.
```bash
npx ts-node cli.ts jsonformat '{"name":"John","age":30,"city":"New York"}'
```

### 8. URL Status Checker (`urlstatus`)
Check the HTTP status code of a given URL.
```bash
npx ts-node cli.ts urlstatus google.com
```

### 9. Base64 Encoder/Decoder (`base64`)
Encode or decode strings using Base64 format.
```bash
npx ts-node cli.ts base64 encode "hello world"
npx ts-node cli.ts base64 decode "aGVsbG8gd29ybGQ="
```

### 10. Date Difference (`datediff`)
Calculate the absolute difference in days between two dates (Format: YYYY-MM-DD).
```bash
npx ts-node cli.ts datediff 2026-03-01 2026-03-25
```

## Building for Production

To compile the TypeScript project into JavaScript for production use:
```bash
npx tsc
```
This will compile the files into the `dist/` directory. You can then run the built version using:
```bash
node dist/cli.js <command>
```
