import "./ProfileCard.css";
import mc from "../../img/mastercard-color.png";
import amex from "../../img/amex-color.png";
import visa from "../../img/visa-color.png";
import discover from "../../img/discover-color.png";
import paypal from "../../img/paypal-color.png";

const ProfileCard = ({ cardNumber }) => {
  
  const showCorrectCard = (cardNum) => {
    if (cardNum === 5) {
      return mc;
    }
    if (cardNum === 4) {
      return visa;
    }
    if (cardNum === 6) {
      return discover;
    }
    if (cardNum === null) {
      return paypal;
    }
    if (cardNum === 3) {
      return amex;
    }
  };

  return (
    <div className="profile-card">
      <div className="profile-info">
        <h4>Profile Name</h4>
        <p>John Doe</p>
        <p>123 Main Street</p>
      </div>
      <div className="card-type">
        <img className="card-icon" src={showCorrectCard(cardNumber)}></img>
        <p>1073</p>
      </div>
    </div>
  );
};

export default ProfileCard;
