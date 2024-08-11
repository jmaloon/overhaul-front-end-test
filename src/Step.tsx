import "./Step.css";

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
    </li>
  );
}
