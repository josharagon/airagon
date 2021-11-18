import ProxyCard from "../ProxyCard/ProxyCard";
import "./ProxyHolder.css";

const proxyList = [
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
  {
    ip: "1233.4231.123123",
    port: "1234",
    user: "user",
    password: "password",
  },
];
const ProxyHolder = () => {
  let allProxies = proxyList.map((proxy) => {
    return <ProxyCard proxy={proxy} />;
  });

  return <section className="proxy-holder">{allProxies}</section>;
};

export default ProxyHolder;
