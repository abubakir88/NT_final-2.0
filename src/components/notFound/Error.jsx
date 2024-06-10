import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";
function Error() {
  let navigate = useNavigate();
  return (
    <div className="error">
      <p>404</p>
      <p
        style={{
          fontSize: "110%",
          opacity: "1",
          fontWeight: "600",
          paddingBottom: "30px",
        }}
      >
        Похоже, ничего не нашлось :(
      </p>
      <button onClick={() => navigate("/")}>На главную</button>
    </div>
  );
}

export default Error;
