import "./App.css";

// Progress architecture comes from https://www.w3.org/WAI/tutorials/forms/multi-page/#using-the-html5-progress-element
function App() {
  return (
    <div className="progress-wrapper">
      <ol className="progress">
        <li className="progress-step progress-step__past">
          <span className="visually-hidden">Completed: </span>
          <span className="progress-step">Step one</span>
          <span className="progress-label">Your basket</span>
        </li>
        <li className="progress-step progress-step__past">
          <span className="visually-hidden">Completed: </span>
          <span className="progress-step">Step two</span>
          <span className="progress-label">Your details</span>
        </li>
        <li className="progress-step progress-step__current">
          <span className="visually-hidden">Completed: </span>
          <span className="progress-step">Step three</span>
          <span className="progress-label">Payment</span>
        </li>
        <li className="progress-step">
          <span className="progress-step">Step four</span>
          <span className="progress-label">Order complete</span>
        </li>
      </ol>
    </div>
  );
}

export default App;
