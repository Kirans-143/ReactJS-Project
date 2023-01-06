import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Component/Counter";

const getUserData = () => {
  return fetch("/user.json").then((response) => response.json());
};
function App() {
  const [name, setName] = useState();
  const [roles, setRoles] = useState();
  const [roleList, setRoleList] = useState();
  useEffect(() => {
    if (name) {
      setRoleList(Object.keys(roles).filter((item) => roles[item]));
    }
  }, [name, roles]);

  const loadUser = async () => {
    const data = await getUserData();
    console.log("data", data);
    setName(data.name);
    setRoles(data.roles);
  };
  // const loadUser = () => {
  //   setName("user1");
  //   setRoles({
  //     reader: true,
  //   });
  // };
  return (
    <div className="app">
      {/* <Counter /> */}
      <h3>{JSON.stringify(name)}</h3>
      <h3>{JSON.stringify(roles)}</h3>
      <h3>{JSON.stringify(roleList)}</h3>
      <button onClick={loadUser}>Load User</button>
    </div>
  );
}
export default App;
