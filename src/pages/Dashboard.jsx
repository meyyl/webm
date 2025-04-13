import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import LoadingScreen from "../component/Loading";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <Layout>
      <h1>Ws Iki engkok isi main contentne garek jupuk tekan mongo</h1>
    </Layout>
  );
};

export default Dashboard;
