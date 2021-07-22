import "./Tasks.css";
import down from "../../img/down.png";
import stock from "../../img/stock-img.jpg";

const Tasks = () => {
  return (
    <section className="tasks">
      <div className="task-user">
        <h1>Tasks</h1>
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
            <p className="mini-title">taks</p>
          </div>
          <div id="task-select">
            <p id="count">0</p>
            <p className="mini-title">taks seleted</p>
          </div>
        </div>
        <div id="search-task">
          <div>
            <input type="search" placeholder="Search" />
          </div>
          <button>
            <span id="add">+</span> New Task
          </button>
        </div>
      </div>
      <div className="task-list">
        <div className="task-header">
          <p>Store</p>
          <p>Product</p>
          <p>Profile</p>
          <p>Proxies</p>
          <p>Status</p>
          <p>Actions</p>
        </div>
        <div className="task-body">
          <div className="task-stacked">
            <p>Store Name</p>
            <p className="sub-text">Checkout Type</p>
          </div>
          <div className="task-stacked">
            <p>Product Name</p>
            <p className="sub-text">Size</p>
          </div>
          <div>
            <p>Profile Name</p>
          </div>
          <div>
            <p>Proxies</p>
          </div>
          <div>
            <p>Status</p>
          </div>
          <div>
            <p>Actions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
