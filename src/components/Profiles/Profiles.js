import "./Profiles.css";

import search from "../../img/search.png";
import stock from "../../img/stock-img.jpg";
import ProfileModal from "../ProfileModal/ProfileModal";
import ProfileCard from "../ProfileCard/ProfileCard.js";

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
          <ProfileModal />
        </div>
      </div>
      <div className="profile-card-holder">
        <ProfileCard cardNumber={6} />
        <ProfileCard cardNumber={3} />
        <ProfileCard cardNumber={4} />
        <ProfileCard cardNumber={5} />
        <ProfileCard cardNumber={null} />
        <ProfileCard cardNumber={6} />
        <ProfileCard cardNumber={3} />
        <ProfileCard cardNumber={4} />
        <ProfileCard cardNumber={5} />
        <ProfileCard cardNumber={null} />
        <ProfileCard cardNumber={6} />
        <ProfileCard cardNumber={3} />
        <ProfileCard cardNumber={4} />
        <ProfileCard cardNumber={5} />
        <ProfileCard cardNumber={null} />
      </div>
    </section>
  );
};

export default Profiles;
