import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative flex w-lvw items-center justify-between bg-black	 font-sans text-white">
      <div className="ml-4 flex h-full items-center justify-evenly text-center	">
        <Link
          to="https://github.com"
          target="_blank"
          className="flex h-full  items-center text-xs text-gray-500	"
        >
          https://github.com
        </Link>
      </div>

      <div className="absolute left-1/2 top-1/2 flex w-72 -translate-x-1/2 -translate-y-1/2 justify-evenly text-center max-[500px]:text-xl sm:text-xl md:text-xl lg:text-lg 2xl:w-96">
        <Link
          to="/"
          className=" flex items-center duration-100 ease-out hover:border-b-4 focus:border-b-4	"
        >
          Home
        </Link>
        <Link
          to="/about"
          className=" flex items-center	duration-100 ease-out hover:border-b-4 focus:border-b-4 "
        >
          About me
        </Link>
      </div>

      <div className="flex h-full w-40 justify-evenly text-center ">
        <Link
          to="https://www.linkedin.com"
          className="mx-1.5 flex items-center text-2xl "
          target="_blank"
        >
          <i className="bx bxl-linkedin-square" />
        </Link>
      </div>
    </footer>
  );
}
