import React from "react";
import femaleProfile from "../images/femaleProfile.jpg";
import maleProfile from "../images/maleProfile.jpg";
import { useContext } from "react";
import DataContext from "../../store/data-context";

const TeamMemberCard = ({ employee }) => {
  const { handleEmployeeCardClick, selectedTeam } = useContext(DataContext);

  return (
    <div
      className={
        employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
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
  );
};
export default TeamMemberCard;
