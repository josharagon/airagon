import "./CheckoutCard.css";
import travis from "../../img/aj6.jpg";

const CheckoutCard = () => {
  return (
    <article>
      <img src={travis}></img>
      <div className="details">
        <p id="product">Travis Scott AJ6</p>
        <p id="store">Footlocker CA</p>
        <p id="cost">Purchased for $200 on 11.02.2021</p>
      </div>
    </article>
  );
};

export default CheckoutCard;
