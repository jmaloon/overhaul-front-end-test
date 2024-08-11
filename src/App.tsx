import "./App.css";

import Step from "./Step";

const STEPS = [
  { stepString: "one", label: "Your basket" },
  { stepString: "two", label: "Your details" },
  { stepString: "three", label: "Payment" },
  { stepString: "four", label: "Order complete" },
];

function App() {
  const currentStepIndex = 2;

  return (
    <div className="progress-wrapper">
      <ol className="progress">
        {STEPS.map(({ stepString, label }, index) => (
          <Step
            key={label}
            state={
              index < currentStepIndex
                ? "completed"
                : index === currentStepIndex
                ? "current"
                : "default"
            }
            stepNumber={index + 1}
            stepString={stepString}
            label={label}
          />
        ))}
      </ol>
    </div>
  );
}

export default App;
