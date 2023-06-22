## How to run
```markdown
npm start
```
It will run the main entry point of the app which is a test for `evaluateLogFile()` library method

## Other Scripts Available
```markdown
npm run test
npm run build
npm run lint
```

## Thought List
- Javascript version picked
- Added typescript to be more bugs adamant
- Eslint added
- Jest tests, avoided mocking of child functions because I found that ease to cover by all possible scenarios
- Redux picked to keep a temp stuff in an accumulator/state of application
  - here I was wondering to use recursive function while walking through the items
  - or to JS generators and yield
  - In the end decided for the Redux for sake of readability
- store reducer is not tested (might be in next PR)
- I was continuously cleaning the cache in redux store to keep memory on minimum level
- I was a bit confused by the task description where the desired method is supposed to accept the whole string of the log file which might be memory consuming
  - better to solve by reading the file line by line
- There is a possibility to replace the parser in case the format of lines will change
  - this is achieved by defining a interface and implementing against it `LineParserType`
