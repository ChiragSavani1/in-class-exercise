# Unit Testing In-Class Exercise

## 🚀 Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/ChiragSavani1/in-class-exercise.git
   cd in-class-exercise
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests:
   ```bash
   npm test
   ```

## 📝 Exercise Tasks
Complete these in `calculator.test.js`:
1. Test all calculator operations (`add`, `subtract`, `multiply`, `divide`)
2. Add error case testing (division by zero)
3. Implement mocking examples

## 🛠️ Development Tools
### Recommended VS Code Extensions
| Extension | Purpose |
|-----------|---------|
| [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) | Run individual tests |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | Code linting |
| [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) | Catch typos |

## 📂 Project Structure
```
in-class-exercise/
├── calculator.js       # Implementation
├── calculator.test.js  # Tests
├── package.json        # Dependencies
└── .gitignore         # Ignored files
```

## 🔍 How to Verify
```bash
npm test
```
Expected output:
```
PASS  ./calculator.test.js
  Calculator
    ✓ adds 1 + 2 to equal 3 (2ms)
    ✓ subtracts 5 - 3 to equal 2
```