import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, Exchange, CryptoDetails, CrytoCurrencies, News, HomePage } from "./components";
import "./App.css";


const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cryptocurrencies" element={<CrytoCurrencies />} />
              <Route path="/crypto/:coinid" element={<CryptoDetails />} />
              <Route path="/exchange" element={<Exchange />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      

      <div className="footer">
      <Typography.Title  level={5} style={{ color:'white' , textAlign:'center'}}>
        Cryptoverse<br/>
        All Rights rserved
      </Typography.Title>
      <Space>
        <Link to='/'>Home</Link>
        <Link to='/exchanges '>Exchange</Link>
        <Link to='/news'>News</Link>
      </Space>
      </div>
      </div>
    </div>
  );
};

export default App;
