import "./Dashboard.css";
import down from "../../img/down.png";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="signed-in-user">
        <h2>Good Morning, Josh</h2>
        <div className="drop-down">
          <img className="down" src={down}></img>
          <div>
            <p>joshcooks</p>
            <p>#0001</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
