import "./Proxies.css";
import ProxyModal from "../ProxyModal/ProxyModal";
import ProxyCard from "../ProxyCard/ProxyCard";
import ProxyHolder from "../ProxyHolder/ProxyHolder";

const Proxies = () => {
  return (
    <section className="proxy-container">
      <div className="add-new-holder">
        <ProxyModal />
      </div>
      <div className="proxy-header">
        <p>IP</p>
        <p>Port</p>
        <p>Username</p>
        <p>Password</p>
      </div>

      <ProxyHolder />
    </section>
  );
};

export default Proxies;
