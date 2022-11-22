import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams , Link} from "react-router-dom";
function User() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3333/contacts/${id}`)
      .then((response) => {
        setUser(response.data);
        console.log("state show", response.data);
      })
      .catch((error) => {
        setError("something wong with api", error);
      });
  }, []);

  const { id } = useParams();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Link
        to="/"
        className="text-white font-semibold px-6 py-2 rounded-xl bg-zinc-400 font-Inter text-2xl border-b border-black"
      >
        Back To Home
      </Link>
      {user && (
        <>
          <div className="w-[700px] h-[200px] flex justify-center  items-center  px-6 py-4 border border-black mt-16">
            <div className="w-5/12 flex-col space-y-4">
              <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">
                Name
              </h2>
              <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">
                Email
              </h2>
              <h2 className="text-black font-semibold font-Inter text-2xl  border-b border-black">
                Phone No.
              </h2>
            </div>
            <div className="w-7/12 flex-col space-y-4">
              <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">
                {user.name}
              </h2>
              <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">
                {user.email}
              </h2>
              <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">
                {user.phone}
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default User;



 