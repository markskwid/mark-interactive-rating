import { useState, useEffect } from "react";
import "./scss/style.scss";
import StarLogo from "./images/icon-star.svg";
import Dialog from "./Dialog";
const App = () => {
  const [rate, setRate] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Interactive Rating Component";
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setRate(e.target.value);
  };

  const RatingComponent = () => {
    return (
      <>
        <div className="box">
          <img src={StarLogo} alt="star-logo" aria-hidden="true" />
          <h1>How did we do?</h1>
          <form onSubmit={handleSubmit}>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <input
              type="radio"
              id="one"
              value={1}
              name="rate"
              onChange={handleChange}
              defaultChecked={rate === 1}
            />
            <label className={rate == 1 ? "checked" : null} for="one">
              1
            </label>

            <input
              type="radio"
              id="two"
              value={2}
              name="rate"
              onChange={handleChange}
              defaultChecked={rate === 2}
            />
            <label for="two" className={rate == 2 ? "checked" : null}>
              2
            </label>

            <input
              type="radio"
              id="three"
              value={3}
              name="rate"
              onChange={handleChange}
              defaultChecked={rate === 3}
            />
            <label for="three" className={rate == 3 ? "checked" : null}>
              3
            </label>

            <input
              type="radio"
              id="four"
              value={4}
              name="rate"
              onChange={handleChange}
              defaultChecked={rate === 4}
            />
            <label for="four" className={rate == 4 ? "checked" : null}>
              4
            </label>

            <input
              type="radio"
              id="five"
              value={5}
              name="rate"
              onChange={handleChange}
              defaultChecked={rate === 5}
            />
            <label for="five" className={rate == 5 ? "checked" : null}>
              5
            </label>

            <button>Submit</button>
          </form>
        </div>
      </>
    );
  };

  return (
    <main>
      <div className="container-main">
        {!submitted ? <RatingComponent /> : <Dialog rateValue={rate}/>}
      </div>
    </main>
  );
};

export default App;
