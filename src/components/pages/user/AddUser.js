import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const data = {
    name: name,
    email: email,
    phone: phone,
  };

  function Submit(e) {
    e.preventDefault();
    axios.post("http://localhost:3333/contacts", data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-ful flex flex-col justify-center items-center mt-16">
      <h1 className="text-black text-3xl font-semibold font-monterse">
        Add User
      </h1>
      <form className="w-[80%] h-full flex flex-col justify-center items-center mt-4">
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
        <button
          onSubmit={Submit}
          className="w-[80%] bg-blue-600  text-white text-xl font-Montserrat font-semibold mt-4 py-4 pl-6 "
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
