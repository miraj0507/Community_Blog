import "./header.css";
import head from "./img/head.jpg"
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">WELCOME TO PERSONALIZED</span>
        <span className="headerTitleLg">COMMUNITY-BLOGS</span>
      </div>
      <img
        className="headerImg"
        src={head}
        alt=""
      />
    </div>
  );
}
