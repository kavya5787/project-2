import React from "react";
import "./App.css";
import AppFooter from "./components/common/Footer";
import AppHome from "./views/Home";

import { Layout } from "antd";
import MyDatePicker from "./components/home/Datepicker";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import AppHeader from "./components/common/AppHeader";
import Nextpage from "./components/common/Nextpage";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>

        <Content>
          <Routes>
            <Route path="/" element={<OutletHeader />}>
              <Route index element={<AppHome />} />
              <Route path="/next" element={<Nextpage />} />
              <Route path="/1" element={<></>} />

              {/* Updated component name */}
            </Route>
          </Routes>
          <MyDatePicker />
        </Content>

        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </Router>
  );
}

function OutletHeader() {
  return <Outlet />;
}

export default App;
