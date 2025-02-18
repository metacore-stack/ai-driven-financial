import PropTypes from "prop-types";
import Assets from "./Assets";
import Income from "./Income";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faWallet, faShoppingCart, faTag, faBus } from "@fortawesome/free-solid-svg-icons";

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
                    <FontAwesomeIcon icon={faWallet} size="2x" color="#EF5D1E" />
                  </div>
                  <div className="flex flex-col text-white text-sm pt-1 font-medium">
                    <p>Salary</p>
                    <p className="text-base">$4321</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex justify-center items-center">
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#EF5D1E" />
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
        <div>input</div>
      )}
    </div>
  );
};

Main.propTypes = {
  selectedMenuItem: PropTypes.string,
};

export default Main;
