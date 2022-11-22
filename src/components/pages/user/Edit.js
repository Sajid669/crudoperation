import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState("");

  const loadUsers = () => {
    axios
      .get(`http://localhost:3333/contacts/${id}`)
      .then((response) => {
        //setUser(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
      })
      .catch((error) => {
        // setError("something wong with api", error);
      });
  };


    const updateUser = (e) => {
      e.preventDefault()
      axios
        .put(`http://localhost:3333/contacts/${id}`,{
          name, email, phone
        })
        .then((response) => {
          console.log({response})
          //setUser(response.data);
          // setName(response.data.name);
          // setEmail(response.data.email);
          // setPhone(response.data.phone);
        })
        .catch((error) => {
          // setError("something wong with api", error);
        });
    };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="w-screen h-ful flex flex-col justify-center items-center mt-16">
      <h1 className="text-black text-3xl font-semibold font-monterse">
        Edit User
      </h1>
      <form
        onSubmit={updateUser}
        className="w-[80%] h-full flex flex-col justify-center items-center mt-4"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Your Name"
          className="w-[80%] bg-white text-xl font-Montserrat font-normal outline-none mt-4 py-4 pl-6 border bord-zinc-400"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Your Email"
          className="w-[80%] bg-white text-xl font-Montserrat font-normal outline-none mt-4 py-4 pl-6 border bord-zinc-400"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="phone"
          placeholder="Enter Your Phone"
          className="w-[80%] bg-white text-xl font-Montserrat font-normal outline-none mt-4 py-4 pl-6 border bord-zinc-400"
        />
        <button type="submit" className="w-[80%] bg-blue-600  text-white text-xl font-Montserrat font-semibold mt-4 py-4 pl-6 ">
          Update User
        </button>
      </form>
    </div>
  );
}

export default Edit;
