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
    </section>
  );
};

export default Dashboard;
