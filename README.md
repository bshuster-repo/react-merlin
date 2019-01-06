# Introduction

A `render-props` component to write wizards in React.

## Prior Art

1. [react-step-wizard](https://www.npmjs.com/package/react-step-wizard)
2. [react-stepzilla](https://www.npmjs.com/package/react-stepzilla)

## Getting Started

### Install

```bash
yarn add react-merlin
```

### Create A Step Component

`react-merlin` gives you the capability to design your own steps
or to mix it with other designs without duplicating the logic.

Here is an example of a step component:

```js
import React from 'react';

const Step = ({ stepIndex, setStep, isLast, children }) => (
  <React.Fragment>
    {children}
    <button onClick={() => {
      nextIndex = isLast ? 0 : stepIndex+1;
      setStep(nextIndex);
    }}>next</button>
  </React.Fragment>
)

export default Step
```

### Setup Wizard Data Structure

If you have a simple flow probably `Array` will be good.
Otherwise, Tree or Hash (`Object` or `Array` of `Object`s) will work for you.

```js
import Step from './step';

const WizardSteps = (setStep) => {
  return [
    <Step setStep={setStep} stepIndex={0} isLast={false}>Step 1</Step>,
    <Step setStep={setStep} stepIndex={1} isLast={false}>Step 2</Step>,
    <Step setStep={setStep} stepIndex={2} isLast={true}>Step 3</Step>,
  ];
}

export default WizardSteps
```

**Note**: `stepIndex` starts at `0` like in `Array`.

### Put Everything Together

```js
import React from 'react';
import Merlin from 'react-merlin';
import WizardSteps from './wizardStep';

const App = () => (
  <Merlin>
    {({index, setIndex}) => WizardSteps(setIndex)[index]}
  </Merlin>
)
```

## License

MIT.
