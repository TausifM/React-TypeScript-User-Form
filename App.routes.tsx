
import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import {UserForm} from "../core/components/UserForm.component";
import { AppPage } from "./App.page";
import Dashboard from "./Dashboard.page";
import { NotFoundScreen } from "./NotFound.page";
import Order from "./Order.page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppPage />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/signin" element={<UserForm />} />
      </Route>
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};

export default AppRoutes;
