import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
      <div className="bg-[#D38D4F]">
        <div class="drawer drawer-mobile">
          <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            <h2 className="text-2xl font-semibold text-black my-5 px-5">
              Welcome to your dashboard
            </h2>
            <Outlet></Outlet>
          </div>
          <div class="drawer-side">
            <label for="dashboard-sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              <li>
                <Link to="/dashboard">Profile</Link>
              </li>
              <li>
                <Link to="/dashboard/orders">Orders</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;