import femaleProfile from "../images/femaleProfile.jpg";
import maleProfile from "../images/maleProfile.jpg";

const Employees = ({
  employees,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
  selectedTeam,
}) => {
  return (
    <main>
      <select
        className="form-select form-select-lg"
        value={selectedTeam}
        onChange={handleTeamSelectionChange}
      >
        <option value="TeamA">Team A</option>
        <option value="TeamB">Team B</option>
        <option value="TeamC">Team C</option>
        <option value="TeamD">Team D</option>
      </select>

      <div className="card-collections">
        {employees.map((employee) => (
          <div
            className={
              employee.teamName === selectedTeam
                ? "card m-2 standout"
                : "card m-2"
            }
            id={employee.id}
            key={employee.id}
            style={{ cursor: "pointer" }}
            onClick={handleEmployeeCardClick}
          >
            {employee.gender === "male" ? (
              <img src={maleProfile} className="card-img-top" />
            ) : (
              <img src={femaleProfile} className="card-img-top" />
            )}
            <div className="card-body">
              <h5 className="card-title">Full Name: {employee.fullName}</h5>
              <p className="card-text">
                <b>Designation: </b> {employee.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Employees;
