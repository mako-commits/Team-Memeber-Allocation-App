import { createContext, useState, useEffect } from "react";
import TEAM_DATA from "../src/static";

const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
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
    <DataContext.Provider
      value={{
        employees,
        selectedTeam,
        handleTeamSelectionChange,
        handleEmployeeCardClick,
        setTeam,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
