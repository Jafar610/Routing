import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => navigate("/user/1")}>
        Go to User 1
      </button>
    </div>
  );
}

export default Dashboard;