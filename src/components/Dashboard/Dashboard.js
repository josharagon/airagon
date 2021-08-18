import "./Dashboard.css";
import down from "../../img/down.png";
import stock from "../../img/stock-img.jpg";

import CheckoutCard from "../CheckoutCard/CheckoutCard";
import Chart from "../Chart/Chart.js";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="signed-in-user">
        <h2>Good Morning, Josh!</h2>
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
          <div className="selectors">
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
          <Chart />
          <div className="stats">
            <div className="checkouts">
              <p className="stat-title">Checkouts</p>
              <div className="number-perc">
                <p className="stat-number">250</p>
                <span className="perc-diff pos">+186%</span>
              </div>
              <p className="compared">Compared to 134</p>
            </div>
            <div className="spent">
              <p className="stat-title">Money Spent</p>
              <div className="number-perc">
                <div className="align-symbol">
                  <span id="dollar">$</span>
                  <p className="stat-number">1250</p>
                </div>
                <span className="perc-diff pos">+312%</span>
              </div>
              <p className="compared">Compared to $400</p>
            </div>
            <div className="declines">
              <p className="stat-title">Declines</p>
              <div className="number-perc">
                <p className="stat-number">66</p>
                <span className="perc-diff neg">-14%</span>
              </div>
              <p className="compared">Compared to 78</p>
            </div>
          </div>
          <div>
            <div className="update-button">
              <h3>Update Log</h3>
              <button>Refresh</button>
            </div>
            <div className="previous-updates">
              <p className="update-text">
                <span className="log-version cur">v0.0.3</span>
                <span className="date">01/25/21</span>• Added Captcha Bypass for
                Walmart US
              </p>
              <p className="update-text">
                <span className="log-version">v0.0.2</span>
                <span className="date">01/10/21</span>• Add UI Bug Fixes
              </p>
              <p className="update-text">
                <span className="log-version">v0.0.1</span>
                <span className="date">01/05/21</span>• Add Supreme US
              </p>
            </div>
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
