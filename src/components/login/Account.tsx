import { IoCloseSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import React, { useState, useEffect } from "react";

type AccountProps = {
    onClose: () => void;
}

export default function Account({ onClose }:AccountProps) {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-login");
    btns.forEach((btn, index) => {
      if (index === activeLink) {
        btn.classList.add("activelogin");
      } else {
        btn.classList.remove("activelogin");
      }
    });
  }, [activeLink]);

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
    setRegisterOpen(index !== 0);
  };

  return (
    <nav
      className="modal-container z-50 fixed left-0 top-0 w-full h-full flex items-center justify-center bg-slate-700/30"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="z-50 relative bg-white rounded-md p-8 w-[420px]">
        <p
          onClick={() => onClose()}
          className="absolute top-[-20px] right-[-26px] p-2 hover:bg-slate-300 rounded-full cursor-pointer"
        >
          <IoCloseSharp />
        </p>
        <nav>
          <div className="inline-block bg-[#e4e7ea] min-w-60 rounded-md p-2">
            <div className="flex text-center w-full">
              <div
                onClick={() => handleLinkClick(0)}
                className="activelogin btn-login p-1 w-1/2 cursor-pointer"
              >
                Login
              </div>
              <div
                onClick={() => handleLinkClick(1)}
                className="btn-login p-1 w-1/2 cursor-pointer"
              >
                Register
              </div>
            </div>
          </div>
          {registerOpen ? (
            <form className="register flex flex-col gap-y-4">
              <strong className="w-full mt-4">Create your account</strong>
              <div className="flex flex-col gap-y-2">
                <label className="w-full flex text-center items-center gap-x-1">
                  Email address
                  <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full p-2 border-inherit rounded-[0.3rem] py-3 border-[#e7e8eb] hover:border-red-500 border-2 bg-[#e4e7ea]"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="w-full flex text-center items-center gap-x-1">
                  First Name
                </label>
                <input
                  className="w-full p-2 border-inherit rounded-[0.3rem] py-3 border-[#e7e8eb] hover:border-red-500 border-2 bg-[#e4e7ea]"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="w-full flex text-center items-center gap-x-1">
                  Last Name
                </label>
                <input
                  className="w-full p-2 border-inherit rounded-[0.3rem] py-3 border-[#e7e8eb] hover:border-red-500 border-2 bg-[#e4e7ea]"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label>Password</label>
                <input
                  className="w-full rounded-[0.3rem] p-2 border-inherit py-3 border-[#e7e8eb] hover:border-red-500 border-2 bg-[#e4e7ea]"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="bg-black text-white flex justify-center items-center py-3 rounded-md hover:bg-red-500 cursor-pointer">
                REGISTER
              </div>
            </form>
          ) : (
            <form className="flex flex-col gap-y-4 login">
              <strong className="w-full mt-4">
                Insert your account information:
              </strong>
              <div className="flex flex-col gap-y-2">
                <label>Email address</label>
                <input
                  className="w-full p-2 border-inherit rounded-[0.3rem] py-3 border-[#e7e8eb] hover:border-red-500 border-2 bg-[#e4e7ea]"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label>Password</label>
                <input
                  className="w-full rounded-[0.3rem] p-2 border-inherit py-3 border-[#e7e8eb] hover:border-red-500 border-2 bg-[#e4e7ea]"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex text-center items-center gap-x-1">
                <CgMail />
                <p>Forgot your</p>
                <strong className="hover:text-red-500 cursor-pointer">
                  Password?
                </strong>
              </div>
              <div className="bg-black text-white flex justify-center items-center py-3 rounded-md hover:bg-red-500 cursor-pointer">
                LOGIN
              </div>
            </form>
          )}
        </nav>
      </div>
    </nav>
  );
}
