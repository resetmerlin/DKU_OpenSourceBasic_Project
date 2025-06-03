import { Link } from "react-router-dom";
import logo from "../../../../assets/notion-logo-white.png";

export default function Header() {
  const { socials, loading } = useSocials();

  const notion = socials.find((s) => s.platform === "github");
  return (
    <header
      id="header"
      className="flex w-full items-center justify-center	bg-black font-sans text-white "
    >
      <Link
        to={notion?.url ?? "https://github.com/shinsuin"}
        className="h-3/6"
        target="_blank"
      >
        <img
          src={logo}
          alt="icon"
          className="h-3/4 rounded-ful duration-300 ease-in hover:border-white bg-transparent"
        />
      </Link>
    </header>
  );
}
import { useEffect, useState } from "react";
import axios from "axios";

export function useSocials() {
  const [socials, setSocials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/socials")
      .then((res) => setSocials(res.data.socials))
      .finally(() => setLoading(false));
  }, []);

  return { socials, loading };
}
