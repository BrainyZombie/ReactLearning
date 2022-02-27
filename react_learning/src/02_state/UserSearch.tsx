import React, { useState } from "react";

const users = [
  { name: "Sara", age: 23 },
  { name: "John", age: 30 },
  { name: "Jane", age: 27 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<undefined | { name: string; age: number }>(
    undefined
  );

  const onClick = () => {
    const foundName = users.find((user) => user.name === name);
    setUser(foundName);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Search</button>
      {user ? `${user.age} ${user.name}` : "No Users found"}
    </div>
  );
};

export default UserSearch;
