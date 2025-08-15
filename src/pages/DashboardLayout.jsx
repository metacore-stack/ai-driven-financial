import { useState } from "react";
import Header from "../components/Header";
import MainComponent from "../components/MainComponent";
import RightPanel from "../components/RightPanel";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("dashboard");
  const [availableBalance, setAvailableBalance] = useState(0);
  const [incomeGoal, setIncomeGoal] = useState(4200);

  const handleMenuItemChange = (menuItemID) => {
    setSelectedMenuItem(menuItemID);
  };

  const handleBalanceChange = (newBalance) => {
    setAvailableBalance(newBalance);
  };

  const handleIncomeGoalChange = (newIncomeGoal) => {
    setIncomeGoal(newIncomeGoal);
  };

  return (
    <div className="bg-[#0B1020] w-screen min-w-[1200px] max-w-[2000px] min-h-screen m-auto">
      <div className="grid grid-rows-[0.5fr_3.5fr] grid-cols-[0.5fr_3.5fr_1fr] gap-2  p-4 bg-[#0B1020] ">
        <Sidebar />
        <Header
          onMenuItemChange={handleMenuItemChange}
          availableBalance={availableBalance}
        />
        <MainComponent
          selectedMenuItem={selectedMenuItem}
          onBalanceChange={handleBalanceChange}
          onIncomeGoalChange={handleIncomeGoalChange}
        />
        <RightPanel incomeGoal={incomeGoal} />
      </div>
    </div>
  );
};

export default DashboardLayout;
