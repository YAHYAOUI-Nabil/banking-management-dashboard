import Image from "next/image";
import Link from "next/link";
import React from "react";
import BankCard from "./BankCard";

const HomeSidebar = ({ banks, transactions, user }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user?.name[0]}
            </span>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">{user?.name}</h1>
            <p className="profile-email">{user?.email}</p>
          </div>
        </div>
        <section className="banks">
          <div className="flex justify-between w-full">
            <h2 className="header-2">My Banks</h2>
            <Link href="/" className="flex gap-2">
              <Image src="/icons/plus.svg" alt="plus" height={20} width={20} />
              <h2 className="text-sm font-semibold text-gray-600">Add Bank</h2>
            </Link>
          </div>

          {banks?.length === 0 && (
            <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
              <div className="relative z-10">
                <BankCard
                  key={banks[0]?.$id}
                  account={banks[0]}
                  userName={user?.name}
                  showBalance={true}
                />
              </div>
              {true && (
                <div className="absolute right-0 top-8 z-0 w-[90%]">
                  <BankCard
                    key={banks[1]?.$id}
                    account={banks[1]}
                    userName={user?.name}
                    showBalance={true}
                  />
                </div>
              )}
            </div>
          )}
        </section>
      </section>
    </aside>
  );
};

export default HomeSidebar;
