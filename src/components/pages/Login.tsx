import React, { useContext, useState } from "react";
import Context from "../../contexts/Context";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const history = useHistory();
  const { allUsers, setLoggedInUser } = useContext(Context);
  const [selectUserId, setSelectUserId] = useState<string>("");

  const handleSubmit = (e: React.FormEventHandler<HTMLFormElement> | any) => {
    e.preventDefault();
    const selectedUser = allUsers.find((user: { id: number }) => user.id === +selectUserId);
    setLoggedInUser(selectedUser);
    history.push("/");
  };

  return (
    <div className="container-center">
      <div className="login center60">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">User name</label>
          <select onChange={(e) => setSelectUserId(e.target.value)} required>
            <option value="">Select User</option>
            {allUsers.map((user: { id : string, firstname: string}, index: number) => (
              <option key={`${user}-${index}`} value={user.id}>
                {user.firstname}
              </option>
            ))}
          </select>
          <button className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
