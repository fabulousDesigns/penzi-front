import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewData() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('')
  useEffect(() => {
    loadMsgsData();
  }, []);

  const loadMsgsData = async () => {
    return await axios
      .get("http://localhost/penzi-v2.0/API/fetchMessagesFromApi.php")
      .then((Response) => setData(Response.data))
      .catch((err) => console.log(err));
  };
   const searchMsgs = async () => {
    return await axios
      .get(`http://localhost/penzi-v2.0/API/searchMessages.php?search=${search}`)
      .then((Response) => setData(Response.data))
      .catch((err) => console.log(err));
  };
  console.log("data", data);

  return (
    <div className="container-fluid">
    <form onSubmit={searchMsgs}>
      <input className="form-control" name="search" onChange={(e)=>setSearch(e.target.value)}/>
    </form>
      <div style={{ marginTop: "100px" }}>
        <h3 className="text-center">Messages From</h3>
        <div className="row">
          <div className="col" aria-setsize={12}>
            <table className="table table-borderless">
              <thead className="bg-dark text-white text-center">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">MSG ID</th>
                  <th scope="col">MSG CODE</th>
                  <th scope="col">MSG FROM TXT</th>
                  <th scope="col">TELEPHONE</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">ARRIVAL TIME</th>
                </tr>
              </thead>
              {data.length === 0 ? (
                <tbody className="aliign-center mb-0">
                  <tr>
                    <td colSpan={8} className="text-center mb-0">
                      No Data Found
                    </td>
                  </tr>
                </tbody>
              ) : (
                data.map((item, index) => {
                  <tbody key={index}>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.msg_id}</td>
                      <td>{item.msg_code}</td>
                      <td>{item.msg_from_txt}</td>
                      <td>{item.telephone}</td>
                      <td>{item.status}</td>
                      <td>{item.arrival_time}</td>
                    </tr>
                  </tbody>;
                })
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewData;
