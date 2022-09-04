import TeamMembers from "./TeamMembers";
import Teams from "./Teams";

const Employees = ({
  employees,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
  selectedTeam,
}) => {
  return (
    <main>
      <Teams
        handleTeamSelectionChange={handleTeamSelectionChange}
        selectedTeam={selectedTeam}
      />
      <div className="card-collections">
        <TeamMembers
          employees={employees}
          handleEmployeeCardClick={handleEmployeeCardClick}
          selectedTeam={selectedTeam}
        />
      </div>
    </main>
  );
};

export default Employees;
