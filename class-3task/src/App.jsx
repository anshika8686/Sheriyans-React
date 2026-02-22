import React from "react";
import Card from "./components/Card";
import users from "./components/users";

const App = () => {
  return (
    <div className="flex gap-2px flex-wrap">
      {users.map((elem, index) => (
  <Card key={index} userData={elem} />
))}
    </div>
  );
};
export default App;
