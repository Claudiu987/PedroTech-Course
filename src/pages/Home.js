import React from "react";
import { useContext } from "react";
import App, { AppContext } from "../App";

const Home = () => {
  const { username } = useContext(AppContext);
  return <div>This is profile of user: {username}</div>;
};

export default Home;
