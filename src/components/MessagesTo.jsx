import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import "./view.css";

function MessagesTo() {
  const [data, setData] = useState([]);
  const [paginatedPosts, setPaginatedPosts] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  //   searchfilter
  const [value, setSearchValue] = useState("");
  const [order, setOrder] = useState("DSC")
  useEffect(() => {
    loadMsgsData();
  }, []);

  const loadMsgsData = async () => {
    return await axios
      .get(`http://localhost/penzi-v2.0/API/fetchMessagesToApi.php`)
      .then((Response) => {
        setData(Response.data);
        // looks at each element of the list and returns first occurence of the element that satisfies the condition
        setPaginatedPosts(_(Response.data).slice(0).take(pageSize).value());
      })
      .catch((err) => console.log(err));
  };
  console.log("data", data);
  // pagination
  // load 15 items on the table
  const pageSize = 15;
  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;
  
  if (pageCount === 0) return null;
  
  const Pages = _.range(1, pageCount + 1);
  
  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(data).slice(startIndex).take(pageSize).value();
    setPaginatedPosts(paginatedPost);
  };
  // end pagination
  // sorting
  const sorting = (col)=>{
    if(order === "DSC")
     {
       const sorted = [...data].sort((a,b)=>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
    setData(sorted)
    setOrder("ASC")
     }else if(order === "ASC")
     {
       const sorted = [...data].sort((a,b)=>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
    setData(sorted)
    setOrder("DSC")
     }
  }

  return (
    <>
      <div className="container">
        <form className="mt-3">
          <input
            type="search"
            value={value}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="search..."
          />
          <button className="btn btn-outline-danger">RESET</button>
        </form>
        <div style={{ marginTop: "20px" }}>
          <h3 className="text-center">Messages</h3>
          <div className="row">
            <div className="col" aria-setsize={12}>
              <table className="table table-bordered">
                <thead className="bg-dark text-white text-center">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col" onClick={()=> sorting("msg_id")}>MSG ID</th>
                    <th scope="col" onClick={()=> sorting("msg_code")}>MSG CODE</th>
                    <th scope="col" onClick={()=> sorting("msg_text")}>MSG TEXT</th>
                    <th scope="col" onClick={()=> sorting("telephone")}>TELEPHONE</th>
                    <th scope="col" onClick={()=> sorting("arrival_time")}>ARRIVAL TIME</th>
                  </tr>
                </thead>
                {paginatedPosts.length === 0 ? (
                  <tbody className="aliign-center mb-0">
                    <tr>
                      <td colSpan={8} className="text-center mb-0">
                        No Data Found
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  paginatedPosts
                    .filter((val) => {
                      if (value === "") {
                        return val;
                      } else if (
                        // create array
                        // array some(val)
                        // array.some() also have done the trick
                        val.msg_id
                          .toLowerCase()
                          .includes(value.toLowerCase()) ||
                        val.msg_code
                          .toLowerCase()
                          .includes(value.toLowerCase()) ||
                        val.msg_text
                          .toLowerCase()
                          .includes(value.toLowerCase()) ||
                        val.telephone
                          .toLowerCase()
                          .includes(value.toLowerCase()) ||
                        val.arrival_time
                          .toLowerCase()
                          .includes(value.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((item, index) => (
                      <tbody key={index}>
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{item.msg_id}</td>
                          <td>{item.msg_code}</td>
                          <td>{item.msg_text}</td>
                          <td>{item.telephone}</td>
                          <td>{item.arrival_time}</td>
                        </tr>
                      </tbody>
                    ))
                )}
              </table>
              <nav className="d-flex justify-content-center">
                <ul className="pagination">
                  {Pages.map((page) => (
                    <li
                      className={
                        page === currentPage ? "page-item active" : "page-item"
                      }
                    >
                      <p className="page-link" onClick={() => pagination(page)}>
                        {page}
                      </p>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MessagesTo;
