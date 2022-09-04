import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = ({ selectedTeam, employees, handleEmployeeCardClick }) => {
  return employees.map((employee) => (
    <TeamMemberCard
      handleEmployeeCardClick={handleEmployeeCardClick}
      selectedTeam={selectedTeam}
      employee={employee}
    />
  ));
};

export default TeamMembers;
