import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Home() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const loadUsers = () => {
    axios
      .get("http://localhost:3333/contacts")
      .then((response) => {
        setUsers(response.data.reverse());
      })
      .catch((error) => {
        setError("something wong with api", error);
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  function Delete(id) {
    axios.delete(`http://localhost:3333/contacts/${id}`).then(() => {
      toast("User Deleted");

      loadUsers();
    });
  }

  return (
    <div className="w-full h-full flex-col px-10 py-8">
      <div className="flex flex-col">
        <h1
          className="text-black text-3xl font-semibold font-monterse flex
         justify-center items-center"
        >
          Home Page
        </h1>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center mt-8 border border-black border-bottom-black">
                <thead className="border-b bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      1
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((data, index) => (
                    <tr key={index} className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.name}
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.email}
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.phone}
                      </td>
                      <td className="flex space-x-4 justify-center items-center mt-1">
                        <Link
                          to={`/users/${data.id}`}
                          className="px-6 py-2 text-white bg-green-700 font-semibold rounded-md"
                        >
                          View
                        </Link>

                        <Link
                          to={`/edit-user/${data.id}`}
                          className="px-6 py-2 text-white bg-black font-semibold  rounded-md"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => Delete(data.id)}
                          className="px-6 py-2 text-white bg-red-800 font-semibold  rounded-md"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
