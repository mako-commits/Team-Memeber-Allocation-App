import TeamMembers from "./TeamMembers";
import Teams from "./Teams";

const Employees = () => {
  return (
    <main>
      <Teams />
      <div className="card-collections">
        <TeamMembers />
      </div>
    </main>
  );
};

export default Employees;
