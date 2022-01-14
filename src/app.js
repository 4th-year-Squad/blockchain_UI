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
import RegisterUniversity from "./components/Universities/regitration.jsx";
import patientLanding from "./pages/Patient/landing.jsx";
import DoctorLanding from "./pages/Doctors/landing.jsx";
import DoctorsList from "./components/Doctor/list.jsx";
import MOHLanding from "./pages/MOH/landing.jsx";
import UniversityLanding from "./pages/Universities/landing.jsx";
import Home from "./pages/home/landing.jsx";

const { Content } = Layout;

const App = () => {
  return (
    <>
      <Layout className="layout">
        <Navbar />

        <Content
          style={{
            height: "100%",
            padding: "0px 0px 0px 0px",
            overflowX: "hidden",
          }}
        >
          <Switch>
            <Route path="/RegisterDoctor" component={RegisterDoctor}></Route>
            <Route path="/RegisterPatient" component={RegisterPatient}></Route>
            <Route path="/Login" component={Login}></Route>
            <Route path="/PatientList" component={PatientList}></Route>
            <Route path="/DoctorsList" component={DoctorsList}></Route>
            <Route
              path="/RegisterUniversities"
              component={RegisterUniversity}
            ></Route>
            <Route exact path="/patient" component={patientLanding}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route path="/doctor" component={DoctorLanding}></Route>
            <Route path="/moh" component={MOHLanding}></Route>
            <Route path="/univesities" component={UniversityLanding}></Route>
          </Switch>
        </Content>
      </Layout>
    </>
  );
};

export default App;
