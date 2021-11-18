import "./ProxyCard.css";
import play from "../../img/play.png";
import pause from "../../img/pause.png";
import pencil from "../../img/pencil.png";
import trash from "../../img/delete.png";

const ProxyCard = ({ proxy }) => {
  return (
    <div className="task-body">
      <div>
        <p>{proxy.ip}</p>
      </div>
      <div>
        <p>{proxy.port}</p>
      </div>
      <div>
        <p>{proxy.user}</p>
      </div>
      <div>
        <p>{proxy.password}</p>
      </div>
    </div>
  );
};

export default ProxyCard;
