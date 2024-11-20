import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
const page = () => {
  let classInput =
    "w-full rounded-md py-3 px-4 bg-transparent placeholder:text-red-500 focus:outline-none focus:border-red-500 transition-all duration-300 text-sm  border-gray-500 border-2";
  return (
    <div className="container leading-relaxed text-white mx-auto flex min-h-screen max-md:py-20 items-center">
      <div className="grid grid-cols-2 items-center gap-16 p-10 max-md:p-0 rounded-lg shadow-xl mx-auto max-w-4xl  ">
        <div className="max-md:col-span-2 col-span-1">
          <h1 className="text-3xl font-extrabold text-main-color">Let s talk!</h1>
          <p className="text-md text-white mt-4">
            ¿Tiene alguna gran idea o marca que desarrollar y necesita ayuda?
            Póngase en contacto con nosotros nos encantará conocer tu proyecto y
            ofrecerte ayuda.
          </p>
          <div className="mt-12 max-md:mt-0 ">
            <h2 className="text-white text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex flex-wrap items-center">
                <Icon icon="ion:email" className="text-4xl " />
                <a
                  href="javascript:void(0)"
                  className="text-sm ml-4 max-md:ml-0"
                >
                  <p className="tracking-wider">miguelangelmateocollado@gmail.com</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12 max-md:mt-0">
            <h2 className="text-white text-base font-bold">Socials</h2>

            <ul className="flex mt-4 space-x-4">
              <li className="rounded-full flex items-center justify-center shrink-0">
                <Link href="https://www.linkedin.com/in/miguelmateocollado/">
                  <Icon
                    icon={"simple-icons:linkedin"}
                    className="text-2xl cursor-pointer duration-300 ease-in-out hover:text-red-500"
                  />
                </Link>
              </li>
              <li className="rounded-full flex items-center justify-center shrink-0">
                <Link href="https://github.com/MiguelMateoCollado">
                  <Icon
                    icon={"bi:github"}
                    className="text-2xl cursor-pointer hover:text-red-500 ease-in-out duration-300"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <form className="ml-auto space-y-4 max-md:col-span-2 col-span-1">
          <input type="text" placeholder="Name" className={classInput} />
          <input type="email" placeholder="Email" className={classInput} />
          <input type="text" placeholder="Subject" className={classInput} />
          <textarea
            placeholder="Message"
            rows="6"
            className={classInput}
          ></textarea>
          <button
            type="button"
            className="text-white bg-red-500 hover:bg-main-color tracking-wide border-2 border-red-400 rounded-md text-sm px-4 py-3 w-full !mt-6"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
