
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

import "./MainLayout.css";

const { Content } = Layout;

function MainLayout() {

  return (
    <Layout className="app-layout">

      <Header />

      <Layout className="app-body">

        <Sidebar />

        <Content className="main-content">
          <Outlet />
        </Content>

      </Layout>

    </Layout>
  );
}

export default MainLayout;
