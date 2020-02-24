import React from "react";
import Profile from "./profile/profile";
import "./App.css";

function App() {
  let data = {
    fullname: "foulen ben foulen",
    bio: "bla bla bla",
    profession: "Teacher"
  };

  const handleName = e => {
    // e.preventDefault();
    alert(data.fullname);
  };

  const style = {
    width: "500px",
    height: "600px",
    borderRadius: "10px",
    border: "1px solid black",
    marginTop: "10px"
  };

  return (
    <div className="App">
      <Profile data={data}>
        <img
          onClick={handleName}
          style={style}
          alt="img"
          src="https://i.pinimg.com/originals/c3/e5/98/c3e598ad24447e2a25e805a9a3b76315.jpg"
        />
      </Profile>
    </div>
  );
}

export default App;
