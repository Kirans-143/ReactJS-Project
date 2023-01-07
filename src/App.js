import React from "react";
import "./App.css";
import useFetchData from "./customHooks/useFetchData";

function App() {
  const [users] = useFetchData("https://jsonplaceholder.typicode.com/users");
  const [dogData] = useFetchData("https://picsum.photos/id/237/200/300");

  //for making a request and fetching a resource
  //it can take more argument but one mandatory argument ----> path of the resource
  //it returns a promise along with response of that request
  //we fetch json file accross the network
  //it returns a representation of that response
  //so we extract the data json body content from Response object using json()

  return (
    <div>
      {/* <h1>{JSON.stringify(users)}</h1> */}
      {/* // called as optional chaining */}
      <h1>{users[0]?.name}</h1>
      <img src={dogData?.message} />
      {/* <h1>Hello world</h1> */}
    </div>
  );
}
export default App;
