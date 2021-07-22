import "./TaskCards.css";
import play from "../../img/play.png";
import pause from "../../img/pause.png";
import pencil from "../../img/pencil.png";
import trash from "../../img/delete.png";

const TaskCards = ({ task }) => {
  return (
    <div className="task-body">
      <div className="task-stacked">
        <p>{task.name}</p>
        <p className="sub-text">{task.type}</p>
      </div>
      <div className="task-stacked">
        <p>{task.product}</p>
        <p className="sub-text">{task.size}</p>
      </div>
      <div>
        <p>{task.profile}</p>
      </div>
      <div>
        <p>{task.proxy}</p>
      </div>
      <div>
        <p>{task.status}</p>
      </div>
      <div className="actions">
        <img src={play}></img>
        <img src={pencil}></img>
        <img src={trash}></img>
      </div>
    </div>
  );
};

export default TaskCards;
