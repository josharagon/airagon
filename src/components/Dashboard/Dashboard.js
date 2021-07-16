import "./Dashboard.css";
import down from "../../img/down.png";
import stock from "../../img/stock-img.jpg";

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
      <div className="history">
        <select name="type" id="category">
          <option value="volvo">Checkouts</option>
          <option value="saab">Money Spent</option>
          <option value="mercedes">Declines</option>
        </select>
        <select name="type" id="category">
          <option value="volvo">365d</option>
          <option value="saab">30d</option>
          <option value="mercedes">7d</option>
        </select>
      </div>
      <div className="checkout-feed"></div>
    </section>
  );
};

export default Dashboard;
