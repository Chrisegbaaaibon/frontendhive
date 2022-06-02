import React, { memo, useState, useRef, useEffect } from "react";
import AOS from "aos";
import Typed from "typed.js";

import "aos/dist/aos.css";
import { validateEmail } from "../utils/validator";
import Spinner from "../components/Spinner";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/Faq";
import api from "../api";
import Modal from "../components/Modal";
import { CollabVid } from "../components/CollabVideoFrame";
// import useWindowDimensions from "$src/hook/useWindowDimensions";
// import breakpoints from "$src/breakpoints";

const Home = () => {
  const TypedText = useRef<HTMLSpanElement>();
  //Initiate AOS and typed.js
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    // @ts-ignore
    const typed = new Typed(TypedText.current, {
      strings: ["Learning."],
      typeSpeed: 150,
      loop: true,
      loopCount: Infinity,
      smartBackspace: true,
      backDelay: 1400,
      shuffle: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const [comments, setComments] = useState([
    {
      name: "Jayj Savage",
      comment: "Overall love the build up so far, I'm anticipating the launch",
      img: "img/jayj.jpg",
    },
    {
      name: "Godswill Akaiso",
      comment:
        "Hivend will be the educational foundation of the next generation !!! ...i dey tell you...",
      img: "img/godswill.jpg",
    },
    {
      name: "Sadiq Isiaka",
      comment:
        "Hivend makes gaining knowledge easier and seamless by allowing anyone from anywhere to access educational resources capable of changing their lives for good",
      img: "img/sadiq.jpg",
    },
  ]);
  const [Year, SetYear] = useState(new Date().getFullYear());
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{
    userError: boolean;
    message: string;
  } | null>(null);
  const [success, setSuccess] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const emailInputRef = useRef<null | HTMLInputElement>(null);
  // setSuccess(true);
  const sleep = async (ms = 2000) =>
    setTimeout(() => new Promise((r) => r(ms)), ms);
  const handleJoin = async (email: string) => {
     const emailRegex =
       /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

     if (!email.match(emailRegex) && email.length <= 6 && email.length !== 0) {
       setError({
         userError: true,
         message: "Not a valid email address 😥",
       });
     } else if (
       !email.match(emailRegex) &&
       email.length > 6 &&
       email.length !== 0
     ) {
       setError({
         userError: true,
         message: "Still not a valid email address 🌚",
       });
     } else if (inputFocused && email.length === 0) {
       setError({
         userError: true,
         message: "Please Fill Your Email",
       });
     } else {
       setLoading(true);
       await sleep(5000);
       api
         .post(
           "/addEmail",
           { email: email.trim().toLowerCase() },
           {
             timeout: 25000,
             timeoutErrorMessage: "Network Error",
           }
         )
         .then(() => {
           setLoading(false);
           setSuccess(true);
           setEmail("");
         })
         .catch((err) => {
           setError({
             userError: false,
             message: err?.response?.data?.message || err.message,
           });
           setLoading(false);
           setSuccess(false);
         });
     }
  };
  return (
    <>
      {/*  @ts-ignore */}
      <Modal onBack={() => setSuccess(false)} open={success}>
        <div className="w-full flex flex-col items-center">
          {/* <div className="w-20 h-12">
              <img src="/img/facemoji.png" />
            </div> */}
          <p
            className="max-w-[480px] text-dark text-[13.5px] sm:text-base text-center
            tracking-[.01em]"
          >
            Congratulations boss! You have successfully joined the waitlist and
            You will be among the first users to try our app. Invite Your Family
            and Friends
          </p>
        </div>
      </Modal>
      <div className="w-full flex items-center justify-center z-10 font-roboto">
        <div className="w-full flex items-center justify-center z-10 px-1">
          <main className="w-full min-h-[calc(100vh-128px)] sm:min-h-fit max-w-[2160px] lg:w-[94vw] flex flex-col items-center justify-start px-3 sm:px-10">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-[10vw] 2xl:space-x-[13vw] mt-2 lg:mt-3 py-2">
              <div className="w-full px-0">
                <h1 className="text-center lg:text-left text-5xl lg:text-6xl font-bold lg:font-bold tracking-wide py-3 font-poppins_semibold">
                  Providing {""}
                  <span className="text-secondary">Free</span> {""}<br /> E-
                  <span // @ts-ignore
                    ref={TypedText}
                    className="text-secondary"
                  ></span> <br className="hidden lg:block" />
                  For All.
                </h1>
                <div className="w-full max-h-[500px] mb-1 flex flex-col flex-1 items-center justify-between">
                  <div className="w-full">
                    <p className="text-[17px] sm:text-2xl text-center font-normal text-muted mb-4 sm:mb-6">
                      Creating and providing a free decentralized education
                      network......
                      <br /> Join the early acess
                    </p>
                    <form
                      className="w-full flex flex-col items-center pt-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleJoin(email);
                      }}
                    >
                      <div
                        className="bg-white flex flex-row  w-full max-w-[550px]
        border-2 rounded-[1rem] border-secondary/80 px-2 py-1 overflow-hidden"
                      >
                        <input
                          placeholder="Enter your email address"
                          className="flex-[.55] sm:flex-[.7] h-full w-full text-dark text-[13.5px] sm:text-base outline-none rounded-[1rem] px-4 pt-2.5"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => {
                            setError(null);
                            setInputFocused(true);
                          }}
                          onBlur={() => setInputFocused(false)}
                          ref={emailInputRef}
                        />

                        <button
                          className={`max-w-full flex-[.45] sm:flex-[.3] h-full
        bg-secondary dark:bg-secondary dark:transy rounded-[1rem] dark:neon dark:text-neutral-900 rounded-[1rem] font-semibold text-[13.5px] sm:text-base text-white
        justify-self-center disabled:pointer-events-none px-2 py-2 ${
          ((error && error.userError) || loading) && "bg-opacity-70"
        }`}
                          type="submit"
                        >
                          {loading ? <Spinner /> : "Join Waitlist"}
                        </button>
                      </div>
                      <div className="flex overflow-hidden justify-center items-center transition-[height] duration-150">
                        <p
                          className={`text-center ${
                            error ? "translate-y-0" : "translate-y-8"
                          } text-[13.5px] sm:text-base text-red-500 font-semibold text-center
        text-error transition-all ease-[ease] duration-300`}
                        >
                          {error?.message}
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="w-full h-full hidden lg:block lg:bg-transparent">
                <img
                  data-aos=""
                  src="/img/Splash-Mockup.png"
                  alt="All"
                  className=" h-[40rem] w-full object-contain scale-0"
                  style={{ transform: "translate(0px, 0px)" }}
                />
              </div>
              {/* </div> */}
            </div>
          </main>
        </div>
      </div>

      {/* <div>
        <h1 className="text-3xl mb-5">Big Announcement</h1>
        <CollabVid />
      </div> */}
      {/* Mobile */}
      <div className="relative lg:hidden block mt-[0.2px] py-2">
        <img
          src="/img/mockup-phone.png"
          data-aos="fade-left"
          alt="Mobile"
          className="w-[50%] h-[50%] mt-[10%] md:w-[25%] lg:w-[40%] object-contain left-0 right-0 -top-12 mx-auto"
        />

        <div className="mt-[2%] w-[90%] text-[#242424] dark:text-white mx-auto text-center overflow-hidden pt-1">
          <h1
            className="w-[70%] mx-auto text-4xl font-semibold"
            data-aos="fade-down"
          >
            What is <span className="text-secondary">Hivend</span>
          </h1>
          <p
            data-aos="fade-left"
            className="text-lg font-poppins_light leading-[50px]"
          >
            Hivend is an e-learning platform that facilitates and provides
            education and information in all digital forms (videos, audio,
            images, PDFs, etc).
          </p>
          <div className="mt-[9vh]"></div>
        </div>
      </div>
      {/* Desktop view */}
      <div className="relative hidden lg:block mt-[0.4vh] py-2 overflow-hidden">
        <div className="grid-cols-2 gap-10 hidden lg:grid h-full items-center mt-2">
          <div className="bg-white/30 rounded-[25%] h-full py-[15%] border-2 border-neutral-200/30">
            <img
              data-aos="fade-right"
              src="/img/mockup-phone.png"
              alt="phone"
              className="w-[40%] object-contain mx-auto"
            />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-[75%]" data-aos="fade-left">
              <h1 className="text-3xl font-bold mt-2 mb-3" data-aos="fade-up">
                What Is <span className="text-secondary">Hivend</span>
              </h1>
              <p
                className="text-lg font-poppins_light leading-[50px]"
                data-aos="fade-right"
              >
                Hivend is an e-learning platform that facilitates and provides
                education and information in all digital forms (videos, audio,
                images, PDFs, etc).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our services */}

      <div>
        {/* Mobile */}
        <div className="relative lg:hidden mt-[2vh] block space-y-6 py-2 overflow-hidden">
          <img
            src="/img/Splash-Mockup.png"
            data-aos="fade-left"
            alt="Mobile"
            className="w-[50%] h-[50%] mt-[3%] md:w-[25%] lg:w-[40%] object-contain  left-0 right-0 -top-12 mx-auto"
          />

          <div className="mt-[80vh] w-[90%] mx-auto text-center overflow-hidden">
            <h1
              className="w-[70%] mb-5 mx-auto text-4xl font-semibold dark:text-white text-primary"
              data-aos="fade-down"
            >
              Some of our <span className="text-secondary">unique</span>{" "}
              features
            </h1>
            <div
              className="text-lg font-poppins_light grid grid-cols-1 place-items-center gap-10 lg:grid-cols-3 leading-[50px]"
              data-aos="fade-right"
            >
              <div className="p-5 max-w-2xl text-lg bg-white rounded-lg neon dark:bg-neutral-800">
                <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Diverse Learning Systems
                </h5>
                <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                  We are providing diverse and unique learning systems for
                  people of any age, giving them the chance to learn anything no
                  matter how technical it might seem.
                </p>
              </div>
              <div className="p-5 max-w-2xl text-lg bg-white rounded-lg neon dark:bg-neutral-800">
                <a href="#">
                  <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Examinations Preparations
                  </h5>
                </a>
                <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                  Giving you examination tips, tests and simulation grounds to
                  help you prepare more effectively for your upcoming exams.
                </p>
              </div>
              <div className="p-5 max-w-2xl text-lg bg-white rounded-lg neon dark:bg-neutral-800">
                <a href="#">
                  <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Engage In Chats
                  </h5>
                </a>
                <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                  Get to engage in public discussions and private chats with
                  fellow students and tutors where you can ask questions
                  pertaining to your learning journey.
                </p>
              </div>
            </div>
            <div className="mt-[9vh]"></div>
          </div>
        </div>
        {/* Desktop view */}
        <div className="relative hidden lg:block mt-[0.1rem] py-2 overflow-hidden">
          <div className="grid-cols-1 gap-10 hidden lg:grid h-full items-center mt-3">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="w-[75%]" data-aos="fade-left">
                <h1 className="text-3xl font-bold mt-2 mb-3" data-aos="fade-up">
                  Some of our <span className="text-secondary">unique</span>{" "}
                  features
                </h1>
                <div
                  className="text-lg font-poppins_light grid grid-cols-1 gap-10 lg:grid-cols-3 leading-[50px]"
                  data-aos="fade-right"
                >
                  <div className="p-5 max-w-2xl text-lg bg-white rounded-lg neon dark:bg-neutral-800">
                    <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Diverse Learning Systems
                    </h5>
                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                      We are providing diverse and unique learning systems for
                      people of any age, giving them the chance to learn
                      anything no matter how technical it might seem.
                    </p>
                  </div>
                  <div className="p-5 max-w-2xl text-lg bg-white rounded-lg neon dark:bg-neutral-800">
                    <a href="#">
                      <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Examinations Preparations
                      </h5>
                    </a>
                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                      Giving you examination tips, tests and simulation grounds
                      to help you prepare more effectively for your upcoming
                      exams.
                    </p>
                  </div>
                  <div className="p-5 max-w-2xl text-lg bg-white rounded-lg neon dark:bg-neutral-800">
                    <a href="#">
                      <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Engage In Chats
                      </h5>
                    </a>
                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                      Get to engage in public discussions and private chats with
                      fellow students and tutors where you can ask questions
                      pertaining to your learning journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bg-neutral-800 h-full py-[15%] border-l-2 border-t-2 border-b-2 border-neutral-500">
              <img
                data-aos="fade-right"
                src="/img/Splash-Mockup.png"
                alt="phone"
                className="w-[40%] object-contain mx-auto"
              />
            </div> */}
          </div>
        </div>
      </div>
      <div className="mt-1 mb-1.5">
        <h1 className="text-3xl font-bold mt-3 mb-3" data-aos="fade-up">
          What the <span className="text-secondary">community</span> says
        </h1>
        <div data-aos="fade-down">
          <Testimonial comment={comments} />
        </div>
      </div>
      <div className="mt-1 mb-1.5">
        <div data-aos="fade-down">
          <FAQ />
        </div>
      </div>
      <div className="py-[0.6vh] px-5 flex items-center">
        <img
          src="/img/dark-logo.png"
          alt="header"
          className="h-32 object-contain dark:block hidden mb-3"
        />
        <img
          src="/img/logo.png"
          alt="header"
          className="h-32 object-contain block dark:hidden mb-3"
        />
        <p className="text-[#b0b0b0] text-left text-[14px] tracking-wide font-light">
          &copy; {Year} Hivend Technology
        </p>
      </div>
    </>
  );
};

export default Home;
