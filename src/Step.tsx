import "./Step.css";
import stepCompletedSrc from "./assets/step-completed.svg";
import stepCurrentSrc from "./assets/step-current.svg";

type StepProps = {
  stepNumber: number;
  stepString: string;
  label: string;
  state: "completed" | "current" | "default";
};

export default function Step({
  stepNumber,
  stepString,
  label,
  state,
}: StepProps) {
  return (
    <li className="step">
      <div className="step-visual" data-state={state}>
        {state === "completed" ? (
          <img
            alt="checkmark"
            className="step-indicator"
            src={stepCompletedSrc}
          />
        ) : state === "current" ? (
          <img alt="" className="step-indicator" src={stepCurrentSrc} />
        ) : (
          <div className="step-indicator" />
        )}
      </div>
      <div className="step-content">
        <span className="text-counter step-counter">
          {stepNumber.toString().padStart(2, "0")}
        </span>
        {state === "current" && (
          <span className="visually-hidden">Current: </span>
        )}
        {state === "completed" && (
          <span className="visually-hidden">Completed: </span>
        )}
        <span className="text-overline step-overline">Step {stepString}</span>
        <span className="text-label">{label}</span>
      </div>
    </li>
  );
}
