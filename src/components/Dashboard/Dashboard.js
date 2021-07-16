import "./Dashboard.css";
import down from "../../img/down.png";
import stock from "../../img/stock-img.jpg";

import CheckoutCard from "../CheckoutCard/CheckoutCard";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="signed-in-user">
        <h2>Good Morning, Josh</h2>
        <div className="drop-down">
          <img className="down" src={down}></img>
          <div>
            <p className="username">joshdadev</p>
            <p className="id">#0001</p>
          </div>
          <div className="pfp">
            <img src={stock}></img>
          </div>
        </div>
      </div>
      <div className="main-feed">
        <div className="history">
          <div class="select_box">
            <select>
              <option>Checkouts</option>
              <option>$ Spent</option>
            </select>
          </div>
          <div class="select_box date">
            <select>
              <option>365d</option>
              <option>30d</option>
              <option>7d</option>
            </select>
          </div>
        </div>

        <div className="checkout-feed">
          <h1>Checkout Feed</h1>
          <div className="success-feed">
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
