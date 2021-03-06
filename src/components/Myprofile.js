import { signOut } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.config';

const Myprofile = () => {
     const [user] = useAuthState(auth);
     console.log(user)
     const navigate = useNavigate();
     const [disable, setDisable] = useState(false);

      const nameref = useRef();

     const locationref = useRef();
     const phoneref = useRef();
     const facebookref = useRef();
     const [userinfo, setUserinfo] = useState();


   
      useEffect(() => {
      
        if (user) {
          fetch(`http://localhost:7000/userInfo?email=${user.email}`, {
            method: "GET",
            headers: {
              // authorization: `Bearer ${localStorage.getItem(
              //   "accessToken"
              // )}`,
            },
          })
            .then((res) => {
              if (res.status === 401 || res.status === 403) {
                navigate("/");
                signOut(auth);
                localStorage.removeItem("accessToken");
              }
              return res.json();
            })
            .then((data) => {
              setUserinfo(data[0]);
              console.log(data);
            });
        }
      }, [user, userinfo]);




      const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameref.current.value;
        const email = user?.email;
        const location = locationref.current.value;
        const phone = phoneref.current.value;
        const facebook = facebookref.current.value;

        const userInfo = { email, name, location, phone, facebook };
        console.log(userInfo);

         
  

        fetch(`http://localhost:7000/usersinfo/${email}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              alert("Your Information Submitted Succesfully");
              console.log("data inside useToken", data);
            }
          });

        locationref.current.value = " ";
        phoneref.current.value = " ";
        facebookref.current.value = " ";
      };
    return (
      <div className="flex justify-evenly px-5">
        <div className="w-2/4 ">
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div class="card-body items-start">
              <h2 class="card-title">Name : {userinfo?.name}</h2>
              <h2 class="card-title">Location : {userinfo?.location} </h2>
              <h2 class="card-title">Email : {user?.email}</h2>
              <h2 class="card-title">Facebook : {userinfo?.facebook} </h2>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div class="border-b-2 lg:w-full md:flex sm:w-full rounded">
            <div class="w-full bg-white lg:ml-4 shadow-md">
              <form class="rounded shadow p-6" onSubmit={handleSubmit}>
                <div class="pb-6">
                  <label
                    for="name"
                    class="font-semibold text-gray-700 block pb-1"
                  >
                    Name
                  </label>
                  <div class="flex">
                    <input
                     
                      id="username"
                      class="border-1  rounded-r px-4 py-2 w-full"
                      ref={nameref}
                      type="text"
                     
                    />
                  </div>
                </div>
                <div class="pb-4">
                  <label
                    for="about"
                    class="font-semibold text-gray-700 block pb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="email"
                    value={user?.email}
                  />
                </div>
                <div class="pb-4">
                  <label
                    for="about"
                    class="font-semibold text-gray-700 block pb-1"
                  >
                    Location
                  </label>
                  <input
                    ref={locationref}
                    id="email"
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    required
                  />
                </div>
                <div class="pb-4">
                  <label
                    for="about"
                    class="font-semibold text-gray-700 block pb-1"
                  >
                    Phone
                  </label>
                  <input
                    id="number"
                    ref={phoneref}
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="number"
                    required
                  />
                </div>
                <div class="pb-4">
                  <label
                    for="about"
                    class="font-semibold text-gray-700 block pb-1"
                  >
                    Facebook
                  </label>
                  <input
                    id="linkedin"
                    ref={facebookref}
                    class="border-1 border-solid  rounded-r px-4 py-2 w-full"
                    type="text"
                    required
                  />
                </div>
                <button
                  className="btn btn-success"
                  type="submit"
                  disabled={disable}
                >
                  Submit
                </button>
                <button className="btn btn-primary ml-5" type="submit">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Myprofile;