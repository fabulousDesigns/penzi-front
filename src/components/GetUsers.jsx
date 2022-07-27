import React, { useState, useEffect } from "react";

function GetUsers() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost/penzi-v2.0/API/fetchUsersApi.php", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((resultUser) => {
        setUser(resultUser);
        console.log(resultUser);
      });
  }, []);
  return (
    <div className="row">
      <div className="d_flex my-4, text-uppercase">
        <table className="table caption-top table-bordered">
          <caption className="text-dark text-center text-bold">
            Fetch Users In the system
          </caption>
          <thead className="table-dark text-center">
            <tr>
              <th>ID</th>
              <th>FULL NAME</th>
              <th>TELEPHONE</th>
              <th>AGE</th>
              <th>SEX</th>
              <th>COUNTY</th>
              <th>TOWN</th>
              <th>RELIGION</th>
              <th>MARITAL STATUS</th>
              <th>EDUCATION</th>
              <th>PROFFESSION</th>
              <th>DESCRIPTION</th>
              <th>DATE JOINED</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.full_name}</td>
                <td>{user.telephone}</td>
                <td>{user.age}</td>
                <td>{user.sex}</td>
                <td>{user.county}</td>
                <td>{user.town}</td>
                <td>{user.religion}</td>
                <td>{user.maritalStatus}</td>
                <td>{user.education}</td>
                <td>{user.proffession}</td>
                <td>{user.description}</td>
                <td>{user.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetUsers;
