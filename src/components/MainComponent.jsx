import PropTypes from "prop-types";
import Assets from "./Assets";
import Income from "./Income";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faWallet,
  faShoppingCart,
  faTag,
  faBus,
} from "@fortawesome/free-solid-svg-icons";

const Main = ({ selectedMenuItem }) => {
  return (
    <div className="bg-[#0B1020] pl-6">
      {selectedMenuItem === "dashboard" ? (
        <div className="flex flex-col">
          <div className="flex">
            <div
              className="flex flex-col items-start justify-center py-4 px-8 rounded-lg"
              style={{
                background: "linear-gradient(90deg, #F17342, #E13C4B)",
              }}
            >
              <p className="text-white text-sm font-medium">Total Net Worth</p>
              <h2 className="text-white text-2xl font-bold">$609,420</h2>
            </div>
            <div className="flex flex-col pl-4 bg-[#151A32] mx-6 px-4 rounded-lg">
              <div className="text-white text-sm font-medium px-2 pt-2">
                Spending
              </div>
              <div className="flex gap-8 p-4">
                <div className="flex gap-3">
                  <div className="flex justify-center items-center">
                    <FontAwesomeIcon icon={faHome} size="2x" color="#EF5D1E" />
                  </div>
                  <div className="flex flex-col text-white text-sm pt-1 font-medium">
                    <p>Housing</p>
                    <p className="text-base">$4321</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex justify-center items-center">
                    <FontAwesomeIcon icon={faUser} size="2x" color="#EF5D1E" />
                  </div>
                  <div className="flex flex-col text-white text-sm pt-1 font-medium">
                    <p>Personal</p>
                    <p className="text-base">$4321</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex justify-center items-center">
                    <FontAwesomeIcon icon={faBus} size="2x" color="#EF5D1E" />
                  </div>
                  <div className="flex flex-col text-white text-sm pt-1 font-medium">
                    <p>Transportation</p>
                    <p className="text-base">$4321</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col pl-4 bg-[#151A32] px-4 rounded-lg">
              <div className="text-white text-sm font-medium px-2 pt-2">
                Income Source
              </div>
              <div className="flex gap-8 p-4">
                <div className="flex gap-2">
                  <div className="flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faWallet}
                      size="2x"
                      color="#EF5D1E"
                    />
                  </div>
                  <div className="flex flex-col text-white text-sm pt-1 font-medium">
                    <p>Salary</p>
                    <p className="text-base">$4321</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      size="2x"
                      color="#EF5D1E"
                    />
                  </div>
                  <div className="flex flex-col text-white text-sm pt-1 font-medium">
                    <p>E-commerce</p>
                    <p className="text-base">$4321</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex justify-center items-center">
                    <FontAwesomeIcon icon={faTag} size="2x" color="#EF5D1E" />
                  </div>
                  <div className="flex flex-col text-white text-sm pt-1 font-medium">
                    <p>Others</p>
                    <p className="text-base">$4321</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className=" mt-3 pr-4">
              <Income />
            </div>
            <div className="mt-3">
              <Assets />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-white mt-6">
          <div className="flex m-4 gap-8">
            <div className="flex flex-col items-center justify-center bg-[#151A32] p-6 rounded-xl">
              <p className="font-semibold">Set Available balance</p>
              <input
                type="number"
                placeholder="Input an amount"
                className="mt-2 p-2 rounded bg-white text-black"
              />
              <button className="mt-2 p-2 bg-[#EF5D1E] rounded w-full hover:bg-[#D94E18] text-white text-base font-semibold">
                Submit
              </button>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#151A32] p-6 rounded-xl">
              <p className="font-semibold">Set Net Worth</p>
              <input
                type="number"
                placeholder="Input an amount"
                className="mt-2 p-2 rounded text-black bg-white"
              />
              <button className="mt-2 p-2 bg-[#EF5D1E] hover:bg-[#D94E18] text-white text-base font-semibold rounded w-full">
                Submit
              </button>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#151A32] p-6 rounded-xl">
              <p className="font-semibold">Set Income Goals</p>
              <input
                type="number"
                placeholder="Input an amount"
                className="mt-2 p-2 rounded bg-white text-black"
              />
              <button className="mt-2 p-2 bg-[#EF5D1E] hover:bg-[#D94E18] text-white text-base font-semibold rounded w-full">
                Submit
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6 mt-4">
            <div className="bg-[#151A32] p-6 rounded-xl flex items-center gap-6">
              <div className="font-semibold">Add spending</div>
              <div>
                <input
                    type="number"
                    placeholder="Input an amount"
                  className="p-2 rounded bg-white text-black"
                />
              </div>
              <div>
                <select className="p-2 rounded bg-white text-black">
                  <option value="" disabled selected>
                    Select a type
                  </option>
                  <option value="option1">Housing</option>
                  <option value="option2">Personal</option>
                  <option value="option3">Transportation</option>
                </select>
              </div>
              <div>
                <button className="p-2 px-6 bg-[#EF5D1E] hover:bg-[#D94E18] text-white text-base font-semibold rounded">
                  Submit
                </button>
              </div>
            </div>
            <div className="bg-[#151A32] p-6 rounded-xl flex items-center gap-6">
              <div className="font-semibold"> Add income</div>
              <div className="ml-3">
                <input
                    type="number"
                    placeholder="Input an amount"
                  className=" p-2 rounded bg-white text-black"
                />
              </div>
              <div>
                <select className="p-2 pr-5 rounded bg-white text-black">
                  <option value="" disabled selected>
                    Select a type
                  </option>
                  <option value="option1">Salary</option>
                  <option value="option2">E-commerce</option>
                  <option value="option3">Others</option>
                </select>
              </div>
              <div>
                <button className="p-2 px-6 bg-[#EF5D1E] hover:bg-[#D94E18] text-white text-base font-semibold rounded">
                  Submit
                </button>
              </div>
            </div>
            <div className="bg-[#151A32] p-6 rounded-xl flex items-center gap-6">
                <div className="font-semibold">Add asset</div>
                <div className="ml-7">
              <input
                    type="number"
                    placeholder="Input an amount"
                className=" p-2 rounded bg-white text-black"
                  /></div>
                <div>
              <select className=" p-2 pr-5 rounded bg-white text-black">
                <option value="" disabled selected>
                  Select a type
                </option>
                <option value="option1">Land</option>
                <option value="option2">Business</option>
                <option value="option3">Stock</option>
                <option value="option4">Others</option>
                  </select></div>
                <div>
              <button className="p-2 px-6 bg-[#EF5D1E] hover:bg-[#D94E18] text-white text-base font-semibold rounded">
                Submit
              </button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Main.propTypes = {
  selectedMenuItem: PropTypes.string,
};

export default Main;
