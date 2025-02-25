import {
  CalendarDaysIcon,
  Squares2X2Icon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import profile from "../assets/profile.png";
import PropTypes from "prop-types";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PasswordRecover from "../pages/PasswordRecover";

const Header = ({ onMenuItemChange, availableBalance }) => {
  const [name] = useState("Hwang Hyunjin");
  const [role] = useState("Basic User");
  const [currentDate, setCurrentDate] = useState("");
  const [selected, setSelected] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: Squares2X2Icon },
    { id: "spreadsheet", name: "Input Field", icon: MagnifyingGlassIcon },
  ];

  useEffect(() => {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(today.toLocaleDateString("en-US", options));
  }, []);

  const handleMenuItemClick = (menuItemID) => {
    setSelected(menuItemID);
    onMenuItemChange(menuItemID);
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const [signupPage, setSignupPage] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleAvatarClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleLoginPage = () => {
    setLoginPage(true);
  };

  const handleCloseLoginPage = () => {
    setLoginPage(false);
  };

  const handleSignupPage = () => {
    setSignupPage(true);
  };

  const handleCloseSignupPage = () => {
    setSignupPage(false);
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  const handleCloseForgotPassword = () => {
    setForgotPassword(false);
  };

  return (
    <div className="col-span-2 bg-[#0B1020] text-white flex items-center justify-between p-4">
      {/* Left Section */}
      <div>
        <p className="text-md text-gray-400">Personal Finance Tracker</p>
        <p className="text-3xl font-bold">Available Balance</p>
        <p className="text-3xl text-blue-400 font-bold">${availableBalance}</p>
      </div>

      {/* Center Section */}
      <div className="flex items-center gap-10">
        <div className="flex space-x-8 bg-[#151A32] p-6 rounded-md text-white">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center cursor-pointer"
              onClick={() => handleMenuItemClick(item.id)}
            >
              <item.icon
                className={`w-6 h-6 ${
                  selected === item.id ? "text-orange-500" : "text-gray-400"
                }`}
              />
              <span
                className={`ml-2 text-sm font-medium ${
                  selected === item.id ? "text-orange-500" : "text-gray-400"
                }`}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-white p-5 rounded-md bg-[#151A32] ">
          <CalendarDaysIcon className="w-6 h-6 text-blue-400" />{" "}
          <p className="text-lg font-medium">{currentDate}</p>{" "}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-4 items-center">
        {/* User Info */}
        <div className="text-right">
          <p className="text-xl font-bold">{name}</p>
          <p className="text-gray-400">{role}</p>
        </div>

        {/* Avatar */}
        <button
          className="avatar"
          onClick={() => {
            handleAvatarClick();
            handleLoginPage();
          }}
        >
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={profile}
              alt="User Avatar"
            />
          </div>
        </button>
      </div>

      {isPopupVisible && loginPage && (
        <Login
          handleClosePopup={handleClosePopup}
          handleCloseLoginPage={handleCloseLoginPage}
          handleSignupPage={handleSignupPage}
          handleForgotPassword={handleForgotPassword}
        />
      )}

      {isPopupVisible && signupPage && (
        <Signup
          handleClosePopup={handleClosePopup}
          handleCloseSignupPage={handleCloseSignupPage}
          handleLoginPage={handleLoginPage}
          handleForgotPassword={handleForgotPassword}
        />
      )}

      {isPopupVisible && forgotPassword && (
        <PasswordRecover handleClosePopup={handleClosePopup} handleCloseForgotPassword={handleCloseForgotPassword} />
      )}
    </div>
  );
};

Header.propTypes = {
  onMenuItemChange: PropTypes.func.isRequired,
  availableBalance: PropTypes.number.isRequired,
};

export default Header;
