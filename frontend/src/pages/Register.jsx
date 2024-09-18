// import axios from "axios";
// import React, { useContext, useState } from "react";
// import { toast } from "react-toastify";
// import { Context } from "../main";
// import { Link, Navigate, useNavigate } from "react-router-dom";

// const Register = () => {
//   const { isAuthenticated, setIsAuthenticated } = useContext(Context);
 
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [nic, setNic] = useState("");  
//   const [dob, setDob] = useState("");
//   const [gender, setGender] = useState("");
//   const [password, setPassword] = useState("");

//   const navigateTo = useNavigate();
   
//   const handleRegister = async (e) => {
//     e.preventDefault();

    // Validate form fields with individual error messages
    // if (!firstName) {
    //   toast.error("Please enter your first name.");
    //   return;
    // }
    // if (!lastName) {
    //   toast.error("Please enter your last name.");
    //   return;
    // }
    // if (!email) {
    //   toast.error("Please enter your email.");
    //   return;
    // }
    // if (!validateEmail(email)) {
    //   toast.error("Please enter a valid email address.");
    //   return;
    // }
    // if (!phone) {
    //   toast.error("Please enter your mobile number.");
    //   return;
    // }
    // if (phone.length < 10) {
    //   toast.error("Please enter a valid phone number.");
    //   return;
    // }
    // if (!nic) {
    //   toast.error("Please enter your NIC.");
    //   return;
    // }
    // if (!dob) {
    //   toast.error("Please enter your date of birth.");
    //   return;
    // }
    // if (!gender) {
    //   toast.error("Please select your gender.");
    //   return;
    // }
    // if (!password) {
    //   toast.error("Please enter your password.");
    //   return;
    // }

//     try {
//       const response = await axios.post(
//         "http://localhost:4000/user/patient/register",
//         { firstName, lastName, email, phone, nic, dob, gender, password,role:"Patient" },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//  console.log(response)
//       toast.success(response.data.message);
//       setIsAuthenticated(true);
//       navigateTo("/");
      // setFirstName("");
      // setLastName("");
      // setEmail("");
      // setPhone("");
      // setNic("");
      // setDob("");
      // setGender("");
      // setPassword("");
  //   } catch (error) {
  //     console.log(error)
  //     toast.error(error.response.data.message);
  //   }
  // };

  

  // if (isAuthenticated) {
  //   return <Navigate to={"/"} />;
  // }
  import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");  
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!firstName) {
      toast.error("Please enter your first name.");
      return;
    }
    if (!lastName) {
      toast.error("Please enter your last name.");
      return;
    }
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!phone) {
      toast.error("Please enter your mobile number.");
      return;
    }
    if (phone.length < 10) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    if (!nic) {
      toast.error("Please enter your NIC.");
      return;
    }
    if (!dob) {
      toast.error("Please enter your date of birth.");
      return;
    }
    if (!gender) {
      toast.error("Please select your gender.");
      return;
    }
    if (!password) {
      toast.error("Please enter your password.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/user/patient/register",
        { firstName, lastName, email, phone, nic, dob, gender, password, role: "Patient" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
    } catch (error) {
      console.log(error); // Log error for debugging
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred during registration.");
      } else {
        toast.error("Unable to connect to the server. Please try again later.");
      }
    }
  };

  // Email validation function
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }


  return (
    <>
      <div className="container form-component register-form">
        <h2>Sign Up</h2>
        <p>Please Sign Up To Continue</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
          voluptas expedita itaque ex, totam ad quod error?
        </p>
        <form onSubmit={handleRegister}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Already Registered?</p>
            <Link
              to={"/Login"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Login Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;

