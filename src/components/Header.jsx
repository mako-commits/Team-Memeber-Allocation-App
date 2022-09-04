const Header = ({ selectedTeam, teamMemberCount }) => {
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
