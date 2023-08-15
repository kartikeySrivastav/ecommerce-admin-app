import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import "./layout.scss";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <div className="main-wrapper">
            <Col md={3} className="sidebar-wrappper">
              <Sidebar />
            </Col>
            <Col md={9} className="main-content">
              <Outlet />
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
