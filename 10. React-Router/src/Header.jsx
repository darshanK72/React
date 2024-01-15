import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>Home</button>
    </>
  );
}

export default Header;
