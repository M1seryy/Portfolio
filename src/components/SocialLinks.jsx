import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/feed/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/M1seryy?tab=repositories",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:victorhachkajlo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Cv <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://www.linkedin.com/feed/",
      style: "rounded-br-md",
    },
  ];
  return (
    <div  className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map((item) => {
          return (
            <li
              key={item.id}
              className={`flex justify-between items-center h-14 px-4 w-40 bg-gray-500 ml-[-100px]  duration-500 hover:ml-[-10px] hover:rounded-md ${item.style}`}
            >
              <a
                className="flex justify-between items-center w-full text-white"
                href={item.href}
                target={"blank"}
              >
                {item.child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
