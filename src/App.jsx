import "./App.css";
import Header from "./components/Header";
import Employees from "./components/Employees";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupedTeamMembers from "./components/GroupedTeamMembers";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import { DataContextProvider } from "../store/data-context";

function App() {
  return (
    <DataContextProvider>
      <Router>
        <Nav />
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={<Employees />}></Route>
            <Route
              path="/GroupedTeamMembers"
              element={<GroupedTeamMembers />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>

          <Footer />
        </Layout>
      </Router>
    </DataContextProvider>
  );
}

export default App;
