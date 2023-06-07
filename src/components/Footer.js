import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { paymentLogo } from '../assets';

import { MdLocationOn } from 'react-icons/md';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/* ================== LogoIcon Starts here ================== */}
        <div className="flex flex-col gap-7">
          <h1 className="text-3xl font-bold text-white w-32">Trendista</h1>
          <a
            className="text-white text-sm tracking-wide"
            href="https://jaydennguyen.dev/"
          >
            &copy; jaydennguyen.dev
          </a>
          <img className="w-56" src={paymentLogo} alt="payment logo" />

          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* ================== LogoIcon Ends here ================== */}

        {/* ================== Locate Us Starts here ================== */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Nguyen, Jayden</p>
            <p>Mobile: (437)-326-2855</p>
            <p>E-mail: trendista@gmail.com</p>
            <p>Address: Toronto, Canada, Earth</p>
          </div>
        </div>
        {/* ================== Locate Us Ends here ================== */}

        {/* ================== Profile Starts here ================== */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              My Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              Track your order
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              Help & Support
            </p>
          </div>
        </div>
        {/* ================== Profile Ends here ================== */}
        {/* ================== Subscribe Starts here ================== */}
        <div className="flex flex-col justify-center ">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="Your E-mail"
            type="text"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
        {/* ================== Subscribe Ends here ================== */}
      </div>
    </div>
  );
};

export default Footer;
