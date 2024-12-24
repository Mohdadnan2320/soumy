import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const data = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/podcast",
      name: "Podcast",
    },
    {
      path: "/short_video",
      name: "Short Video",
    },
    {
      path: "/motion_graphic",
      name: "Motion Graphic",
    },
    {
      path: "/explainer_video",
      name: "Explainer Video",
    },
    {
      path: "/trailer_teaser",
      name: "Trailer : Teaser",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center p-5 ">
      <>
        {showSidebar ? (
          <button
            className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            x
          </button>
        ) : (
          <div className="w-full  flex justify-between items-center lg:justify-center">
            <div className="lg:hidden bg-logo bg-no-repeat bg-contain  w-14 h-10"></div>

            <div className="hidden lg:flex lg:w-28 lg:justify-around ">
              <ul>
                <Link to={"/"}>Home</Link>
              </ul>
              <ul>
                <Link to={"/about"}>About</Link>
              </ul>
            </div>

            <svg
              onClick={() => setShowSidebar(!showSidebar)}
              className="flex items-center cursor-pointer lg:hidden "
              fill="#2563EB"
              viewBox="0 0 100 80"
              width="30"
              height="30"
            >
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          </div>
        )}

        <div
          className={`top-0 right-0 w-[75vw] bg-blue-600  p-5 text-white fixed h-full z-40  ease-in-out duration-300 ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <div className="mt-20 text-4xl w-full text-nowrap font-semibold text-white">
            {data.map((item, i) => {
              return (
                <ul key={i}>
                  <Link to={item.path}>{item.name}</Link>
                </ul>
              );
            })}
          </div>
        </div>
      </>
    </div>
  );
};

export default Navbar;

{
  /* <ul>
              <Link to={'/'}>Home</Link>
            </ul>
            <ul>
            <Link to={'/about'}>About</Link>
            </ul>
            <ul>
            <Link to={'/podcast'}>Podcast</Link>
            </ul>
            <ul>
            <Link to={'/short_video'}>Short Video</Link>
            </ul>
            <ul>
            <Link to={'/motion_graphic'}>Motion Graphic</Link>
            </ul>
            <ul>
            <Link to={'/explainer_video'}>Explainer Video</Link>
            </ul>
            <ul>
            <Link to={'/trailer_teaser'}>Trailer : Teaser</Link>
            </ul> */
}

{
  /* min-h-screen right-5 top-2
  <div className='w-screen h-[5vh] my-4  bg-red-500 '>
<div className="flex justify-center items-center ">
  <div className="bg-logo bg-no-repeat bg-contain  w-14 h-10"></div>
  <div
    onClick={handelMenuChange}
    className="cursor-pointer"
  >
    =
  </div>
</div>

<nav className="w-2/6 ">
  <div
    className={`${
      menu ? "inline-block left-[100%]" : "block left-[0]"
    } w-full h-screen  bg-zinc-400 absolute top-0 
      transition-all duration-200 ease-out`}
  >
    <div onClick={handelMenuChange} className="text-2xl cursor-pointer">
      x
    </div>
    <ul className="h-full grid place-items-center justify-center">
      <li className="bg-red-500">
        <a
          href="#"
          className="text-sm font-SequelSansMedium text-gray-500 hover:text-gray-800"
        >
          Home
        </a>
      </li>
      <li className="">
        <a
          href="#"
          className="text-sm font-SequelSansMedium text-gray-500 hover:text-gray-800"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-sm font-SequelSansMedium text-gray-500 hover:text-gray-800"
        >
          Contact
        </a>
      </li>
    </ul>
  </div>
  <div></div>
</nav>
</div> */
}
