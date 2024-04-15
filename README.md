# Demo TypeScript Jest

Demonstration of:

* TypeScript

* Jest testing

## Start

Initialize:

```sh
mkdir demo && cd $_
```


### Add git

Run:

```
git init
git remote add origin git@github.com:example/demo.git
git branch -M main
echo "node_modules/" >> .gitignore
git add -A 
git commit -m "Init"
git push -u origin main
```

Verify:

```sh
git status
```

Result:

```stdout
… Your branch is up to date with 'origin/main'.
```


### Add NPM

Run:

```sh
npm init -y
```

Verify:

```sh
npm --version
```

Output:

```stdout
10.5.2
```


### Add TypeScript

Run:

```sh
npm install typescript --save-dev
```

Verify:

```sh
tsc -v
```

Output:

```stdout
Version 5.4.5
```

Initialize:

```sh
tsc --init
```

Review:

```sh
cat tsconfig.json
```

Output:

```stdout
Created a new tsconfig.json with:                                                                                       
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true
```


## Create code


### Create source code

Run:

```sh
mkdir src && cd $_
echo 'console.log("hello world")' > index.ts
tsc index.ts
node index.js
```

Output:

```stdout
hello world
```

Commit:

```sh
git add index.{js,ts}
git commit -m "Add hello world"
```


### Add Jest for testing

Run:

```sh
npm install jest ts-jest @types/jest --save-dev
```

Add a script to your file `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

Create file `jest.config.js`:

```ts
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
```

Create source file `src/sum.ts`:

```ts
export function sum(a: number, b: number): number {
  return a + b;
}
```

Create corresponding test file `tests/sum.test.ts`:

```ts
import { sum } from "../src/sum";

describe("Math functions", () => {
  it("should sum two numbers correctly", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
```

Run:

```sh
npm test
```

Output:

```stdout
 PASS  tests/sum.test.ts
  Math functions
    ✓ should sum two numbers correctly (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.653 s
Ran all test suites.
```
