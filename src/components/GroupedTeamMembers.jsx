import { useSate } from "react";

const GroupedTeamMembers = ({ setTeam, employees, selectedTeam }) => {
  const [groupedEmployees, setGroupData] = useSate(groupTeamMembers());

  const groupTeamMembers = () => {
    const teams = [];

    //Team A
    const teamAMembers = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    const teamA = {
      team: "TeamA",
      members: teamAMembers,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };
    teams.push(teamA);

    //Team B
    const teamBMembers = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );
    const teamB = {
      team: "TeamB",
      members: teamBMembers,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };
    teams.push(teamB);

    //Team C
    const teamCMembers = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );
    const teamC = {
      team: "TeamC",
      members: teamCMembers,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };
    teams.push(teamC);

    //Team D
    const teamDMembers = employees.filter(
      (employee) => employee.teamName === "TeamD"
    );
    const teamD = {
      team: "TeamD",
      members: teamDMembers,
      collapsed: selectedTeam === "TeamD" ? false : true,
    };
    teams.push(teamD);

    return teams;
  };
  return (
    <section>
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.team}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4 id={item.team} className="card-header text-secondary bg-white">
              Team Name: {item.team}
            </h4>
            <div
              id={"collapse_" + item.team}
              className={item.collapsed === true ? "collapsed" : ""}
            >
              <hr />
              {item.members.map((member) => {
                return (
                  <div className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full Name: {member.fullName}
                      </span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default GroupedTeamMembers;
