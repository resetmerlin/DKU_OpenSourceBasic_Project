import { Link } from "react-router-dom";
import logo from "../../../../assets/notion-logo-white.png";

export default function Header() {
  return (
    <header
      id="header"
      className="flex w-full items-center justify-center	bg-black font-sans text-white "
    >
      <Link to="https://www.notion.com" className="h-3/6" target="_blank">
        <img
          src={logo}
          alt="icon"
          className="h-3/4 rounded-ful duration-300 ease-in hover:border-white bg-transparent"
        />
      </Link>
    </header>
  );
}
