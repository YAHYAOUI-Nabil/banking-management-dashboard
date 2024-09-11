import HeaderBox from "@/components/HeaderBox";
import HomeSidebar from "@/components/HomeSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const HomePage = () => {
  const loggedIn = {
    firstName: "Nabil",
    lastName: "Yahyaoui",
    email: "yahyaoui@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1256.35}
          />
        </header>
      </div>

      <HomeSidebar user={loggedIn} banks={[]} />
    </section>
  );
};

export default HomePage;
