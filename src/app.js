import React, { useState } from "react";
import Navbar from "./components/Common/Navbar/index.jsx";
import FooterNew from "./components/Common/Footer/index.jsx";
import RegisterDoctor from "./components/Doctor/registration.jsx";
import RegisterPatient from "./components/Patient/registration.jsx";
import Login from "./components/Login/index.jsx";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import "./css/app.css";
import PatientList from "./components/Patient/list.jsx";

const { Content } = Layout;

const App = () => {
  return (
    <>
      <Layout className="layout">
        <Navbar />

        <Content style={{ padding: "0 50px" }}>
          <Switch>
            <Route path="/RegisterDoctor">
              <div className="site-layout-content">
                <RegisterDoctor />
              </div>
            </Route>
            <Route path="/RegisterPatient">
              <div className="site-layout-content">
                <RegisterPatient />
              </div>
            </Route>
            <Route path="/Login">
              <div className="site-layout-content">
                <Login />
              </div>
            </Route>
            <Route path="/PatientList">
              <div className="site-layout-content">
                <PatientList />
              </div>
            </Route>
          </Switch>
        </Content>
        <FooterNew />
      </Layout>
    </>
  );
};

export default App;
