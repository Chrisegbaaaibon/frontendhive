import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Toggle from "../Toggle";

const NavBar: FC = () => {
  return (
    <>
      <div className="w-full h-[80px] flex items-center justify-center bg-transparent mt-4 mb-8 sm:mb-16 z-10">
        <nav className="Nav w-full max-w-[2160px] lg:w-[94vw] flex items-center justify-between px-3 md:px-6">
          <div className="mr-2 flex flex-row gap-2 dark:hidden">
            <img src="/img/logo.png" className="w-40 h-40 object-contain" />
          </div>
          <div className="mr-2 flex-row gap-2 hidden dark:flex">
            <img
              src="/img/dark-logo.png"
              className="w-40 h-40 object-contain"
            />
          </div>
          <div className="flex justify-center items-center text-primary dark:text-secondary text-[13px] sm:text-lg">
            {/* <a href="#" className="mr-3 sm:mr-4"> */}
              <Toggle />
            {/* </a> */}
            <a
              href="https://twitter.com/hivendtech"
              target="_blank"
              rel="noreferrer"
              className="mr-3 sm:mr-4"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://facebook.com/hivendtech"
              target="_blank"
              rel="noreferrer"
              className="mr-3 sm:mr-4"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://instagram.com/hivendtech"
              target="_blank"
              rel="noreferrer"
              className="mr-3 sm:mr-4"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
