import { useContext } from "react";
import DataContext from "../../store/data-context";

const Header = () => {
  const { selectedTeam, employees } = useContext(DataContext);
  const teamMemberCount = employees.filter(
    (employee) => employee.teamName === selectedTeam
  ).length;

  return (
    <header>
      <h1>Team Member Allocation</h1>
      <h3>
        {selectedTeam} has {teamMemberCount}{" "}
        {teamMemberCount === 1 ? "member" : "members"}
      </h3>
    </header>
  );
};

export default Header;
