import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Myaccount = () => {
  return (
    <>
      <div className="max-w-container mx-auto">
        <div className="w-[1193px]">
          <div className="my-[125px]">
            <h3 className="font-dm text-[#262626] font-bold text-[49px]">
              My Account
            </h3>
          </div>
          <div className="flex justify-between">
            <div className="w-[234px] flex flex-col gap-4">
              <NavLink className="myAccountDetails pt-0" to="/dashbord">
                Dashbord
              </NavLink>
              <NavLink className="myAccountDetails" to="/download">
                Download
              </NavLink>
              <NavLink className="myAccountDetails" to="/address">
                Addresses
              </NavLink>
            </div>
            <div className="w-[918px] ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myaccount;
