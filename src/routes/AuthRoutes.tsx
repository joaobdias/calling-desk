import { Route, Routes } from "react-router";
import { SignIn } from "../pages/Authentication/SignIn";
import { SignUp } from "../pages/Authentication/SignUp";
import { BaseLayout } from "../pages/BaseLayout";
import { NotFound } from "../pages/NotFound";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/criar-conta" element={<SignUp />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
