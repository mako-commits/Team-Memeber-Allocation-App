import "./App.css";
import Header from "./components/Header";
import Employees from "./components/Employees";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import TEAM_DATA from "./static";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupedTeamMembers from "./components/GroupedTeamMembers";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamA"
  );
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || TEAM_DATA
  );

  //runs when the employees array changes
  useEffect(() => {
    //save employee list to local storage
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    //save selected team to local storage
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  const handleTeamSelectionChange = (e) => {
    setTeam(e.target.value);
    console.log(e.target.value);
  };

  const handleEmployeeCardClick = (e) => {
    //
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(e.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );

    setEmployees(transformedEmployees);
  };
  return (
    <>
      <Router>
        <Nav />
        <Layout>
          <Header
            selectedTeam={selectedTeam}
            teamMemberCount={
              employees.filter((employee) => employee.teamName === selectedTeam)
                .length
            }
          />
          <Routes>
            <Route
              path="/"
              element={
                <Employees
                  employees={employees}
                  selectedTeam={selectedTeam}
                  handleEmployeeCardClick={handleEmployeeCardClick}
                  handleTeamSelectionChange={handleTeamSelectionChange}
                />
              }
            ></Route>
            <Route
              path="/GroupedTeamMembers"
              element={
                <GroupedTeamMembers
                  employees={employees}
                  selectedTeam={selectedTeam}
                  setTeam={setTeam}
                />
              }
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>

          <Footer />
        </Layout>
      </Router>
    </>
  );
}

export default App;
