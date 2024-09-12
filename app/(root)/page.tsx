import HeaderBox from "@/components/HeaderBox";
import HomeSidebar from "@/components/HomeSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const HomePage = async () => {
  const loggedInUser = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedInUser?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1256.35}
          />
        </header>
      </div>

      <HomeSidebar user={loggedInUser} transactions={[]} banks={[]} />
    </section>
  );
};

export default HomePage;
