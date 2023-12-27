# Installation 

Node v16 should be installed together with NPM > 5.2
For reports install allure CLI, can be done via NPM:

```
npm install -g allure-commandline
```

# How to set up project

```
npm install || npm i
```

# Test Execution

1. To run all three scenarios execute:

```
npm run wdio
```

2. To run all three scenarios by browser:

```
npm run wdio:chrome || npm run wdio:firefox || npm run wdio:edge
```

3. To run all three scenarios headlessly and by browser:

```
npm run wdio:chrome:headless || npm run wdio:firefox:headless || npm run wdio:edge:headless
```

4. To run tests all tests in parallel:

```
npm run wdio:parallel
```

5. To run tests by specific tag, specific browser and headlessly:

```
npm run wdio -- --cucumberOpts.tagExpression='@Checkout' --browser='firefox' --headless='true'
```

6. To run tests with allure:

```
--allure='true'

npm run wdio -- --allure='true'
```

7. To run tests headlessly:

```
--headless='true'

npm run wdio -- --headless='true'
```

# Observe the report

If allure is enabled (--allure='true') then after test exuction run:

```
allure serve
```