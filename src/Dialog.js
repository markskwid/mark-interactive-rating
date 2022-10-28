import "./scss/style.scss";
import Thankyou from "./images/illustration-thank-you.svg";
const Dialog = ({ rateValue }) => {
  return (
    <div className="box thankyou-modal">
      <img
        src={Thankyou}
        alt="device-logo"
        className="thankyou"
        aria-hidden="true"
      />
      <p className="result">You selected {rateValue} out of 5</p>
      <h1>Thank you!</h1>

      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Dialog;
