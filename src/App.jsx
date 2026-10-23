
import { useState } from "react";
import axios from "axios";
import "./index.css";


function App() {
  const [userId, setUserId] = useState("1");
  const [result, setResult] = useState(null);

  const getUsers = async () => {
    const res = await axios.get('/users');
    setResult(res.data);
  };

  const getUserById = async () => {
    const res = await axios.get(`/users/${userId}`);
    setResult(res.data);
  };

  const createUser = async () => {
    const res = await axios.post(`/users`, {
      name: "John",
      email: "john@gmail.com",
      password: "123456",
    });
    setResult(res.data);
  };

  const updateUser = async () => {
    const res = await axios.put(`/users/${userId}`, {
      name: "Bala Updated",
      email: "balaupdated@gmail.com",
      password: "654321",
    });
    setResult(res.data);
  };

  const deleteUser = async () => {
    const res = await axios.delete(`/users/${userId}`);
    setResult(res.data);
  };

  return (
    <div className="container">
      <button onClick={getUsers}>GET Users</button>

      <div>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID"
        />
        <button onClick={getUserById}>GET User By ID</button>
      </div>

      <button onClick={createUser}>POST User</button>

      <button onClick={updateUser}>PUT User</button>

      <button onClick={deleteUser}>DELETE User</button>

      <h3>Response</h3>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default App;
