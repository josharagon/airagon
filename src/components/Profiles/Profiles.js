import "./Profiles.css";

import search from "../../img/search.png";
import stock from "../../img/stock-img.jpg";
import ProfileModal from "../ProfileModal/ProfileModal";

const Profiles = () => {
  return (
    <section className="tasks">
      <div className="task-user">
        <h1>Profiles</h1>
        <div className="signed-user">
          <div>
            <p className="username">joshdadev</p>
            <p className="id">#0001</p>
          </div>
          <div className="pfp">
            <img src={stock}></img>
          </div>
        </div>
      </div>
      <div className="task-editor">
        <div className="task-count">
          <div id="task-num">
            <p id="count">400</p>
            <p className="mini-title">Tasks</p>
          </div>
        </div>
        <div id="search-task">
          <div className="search-tasks">
            <img src={search}></img>
            <input type="search" placeholder="Search" />
          </div>
          <button>
            <span id="add">+</span> New Profile
          </button>
        </div>
      </div>
      {/* <div className="card-info">
        <div className="selected-profile"></div>
        <div>
          <h4>Card Information</h4>
          <input placeholder="Card Number"></input>
          <div>
            <input placeholder="Card Month"></input>
            <input placeholder="Card Year"></input>
          </div>
          <input placeholder="CVV"></input>
        </div>
      </div> */}

      <ProfileModal />
    </section>
  );
};

export default Profiles;
