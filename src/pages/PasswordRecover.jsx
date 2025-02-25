import PropTypes from "prop-types";
import google from "../assets/google.png";
import { XMarkIcon } from "@heroicons/react/24/outline";

const PasswordRecover = (
  handleClosePopup,
  handleForgotPassword,
  handleCloseForgotPassword
) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm ">
      <div className="relative flex flex-col items-center justify-center bg-[#151A32] p-10 rounded-xl border-2 border-orange-500">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 z-10"
          onClick={() => {
            handleClosePopup();
            handleForgotPassword();
          }}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold mb-6">Welcome to Budget Buddy</h1>

        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              User
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email or phone number"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter password"
            />
            {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <img src={logo} alt="" className="w-6 h-6" />
            </div> */}
          </div>

          <div className="mb-6 flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm text-gray-400">Remember me</span>
            </label>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot password?
            </a>
          </div>

          <div className="mb-4">
            <button
              className="bg-[#EF5D1E] hover:bg-[#D94E18] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Sign up
            </button>
          </div>

          <div className="mb-4">
            <button
              className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center"
              type="button"
            >
              <img src={google} alt="" className="w-6 h-6 mr-2" />
              Or sign up with Google
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm">
              Already have an account?
              <a
                className="text-blue-500 hover:text-blue-800 ml-2"
                onClick={() => {
                  handleCloseForgotPassword();
                }}
              >
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

PasswordRecover.propTypes = {
    handleClosePopup: PropTypes.func,
    handleForgotPassword: PropTypes.func,
    handleCloseForgotPassword: PropTypes.func,
    };

export default PasswordRecover;
