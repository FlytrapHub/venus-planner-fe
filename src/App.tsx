import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "@domain/auth/page/SignInPage";
import SignInCallbackPage from "@domain/auth/page/SignInCallBackPage";
import { ROUTER_PATH } from "@constant/RouterPath";
import Layout from "@domain/main/component/Layout";
import PlannerMainPage from "@domain/planner/page/PlannerMainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTER_PATH.PLANNER.MAIN} 
            element={<Layout title={'플래너'}><PlannerMainPage /></Layout>} />
          <Route path={ROUTER_PATH.AUTH.SIGN_IN} element={<SignInPage />} />
          <Route path={ROUTER_PATH.AUTH.CALLBACK} element={<SignInCallbackPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
