import "./App.css";

// Progress architecture comes from https://www.w3.org/WAI/tutorials/forms/multi-page/#using-the-html5-progress-element
function App() {
  return (
    <div className="progress-wrapper">
      <ol className="progress">
        <li className="progress-step progress-step__past">
          <span className="text-counter progress-step-counter">01</span>
          <span className="visually-hidden">Completed: </span>
          <span className="text-overline progress-step-overline">Step one</span>
          <span className="text-label">Your basket</span>
        </li>
        <li className="progress-step progress-step__past">
          <span className="text-counter progress-step-counter">02</span>
          <span className="visually-hidden">Completed: </span>
          <span className="text-overline progress-step-overline">Step two</span>
          <span className="text-label">Your details</span>
        </li>
        <li className="progress-step progress-step__current">
          <span className="text-counter progress-step-counter">03</span>
          <span className="visually-hidden">Completed: </span>
          <span className="text-overline progress-step-overline">
            Step three
          </span>
          <span className="text-label">Payment</span>
        </li>
        <li className="progress-step">
          <span className="text-counter progress-step-counter">04</span>
          <span className="text-overline progress-step-overline">
            Step four
          </span>
          <span className="text-label">Order complete</span>
        </li>
      </ol>
    </div>
  );
}

export default App;
