import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const ChangeProfile = () => {
  const [newUser, setNewUser] = useState("");
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input onChange={(event) => setNewUser(event.target.value)} />
      <button onClick={() => setUsername(newUser)}>Change Profile Name</button>
    </div>
  );
};

export default ChangeProfile;
