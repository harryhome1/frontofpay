// import { useState } from "react"
// import { BottomWarning } from "../components/BottomWarning"
// import { Button } from "../components/Button"
// import { Heading } from "../components/Heading"
// import { InputBox } from "../components/InputBox"
// import { Subheading } from "../components/Subheading"
// import axios from 'axios';
// import { useNavigate } from "react-router-dom"
// export const Signup = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate=useNavigate();

//   return <div className="bg-slate-300 h-screen flex justify-center">

//     <div className="flex flex-col justify-center">
//       <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
//         <Heading label={"Sign up"} />
//         <Subheading label={"Enter your infromation to create an account"} />
//         <InputBox onChange={(e) => {
//           setFirstName(e.target.value);
//         }} placeholder="John" label={"First Name"} />
     
//         <InputBox onChange={(e) => {
//           setLastName(e.target.value);
//         }} placeholder="Doe" label={"Last Name"} />
//         <InputBox onChange={(e) => {
//           setUsername(e.target.value);
//         }} placeholder="harkirat@gmail.com" label={"Email"} />
//         <InputBox onChange={(e) => {
//           setPassword(e.target.value);
//         }} placeholder="123456" label={"Password"} />
//         <div className="pt-4">
//           <Button onClick={async() => {
//           const response= await axios.post("http://localhost:3000/api/v1/user/signup", {
//               username,
//               firstName,
//               lastName,
//               password
//             });
//             localStorage.setItem("token",response.data.token);
//             navigate("/dashboard")
//           }} label={"Sign up"} />
//         </div>
//         <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
//       </div>
//     </div>
//   </div>
// }
// export default Signup



import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Subheading } from "../components/Subheading";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full max-w-sm p-6 bg-gray-50 rounded-lg shadow-md">
        <div className="text-center w-full">
          <Heading label={"Create Your Account"} className="text-blue-600 font-bold text-xl" />
          <Subheading label={"Sign up to continue"} className="text-gray-600 text-sm" />
        </div>

        <div className="w-full mt-4">
          <InputBox 
            onChange={(e) => setFirstName(e.target.value)} 
            placeholder="First Name" 
            label={"First Name"} 
            className="border-b-2 border-gray-300 focus:border-blue-600 py-2 px-3" 
          />

          <InputBox 
            onChange={(e) => setLastName(e.target.value)} 
            placeholder="Last Name" 
            label={"Last Name"} 
            className="border-b-2 border-gray-300 focus:border-blue-600 py-2 px-3 mt-3" 
          />

          <InputBox 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Email" 
            label={"Email"} 
            className="border-b-2 border-gray-300 focus:border-blue-600 py-2 px-3 mt-3" 
          />

          <InputBox 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            label={"Password"} 
            type="password" 
            className="border-b-2 border-gray-300 focus:border-blue-600 py-2 px-3 mt-3" 
          />
        </div>

        <div className="w-full mt-6">
          <Button 
            onClick={async () => {
              const response = await axios.post("https://payon-cwhm.onrender.com/api/v1/user/signup", {
                username,
                firstName,
                lastName,
                password
              });
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }} 
            label={"Sign up"} 
            className="bg-blue-600 text-white w-full py-2 rounded-md mt-4 hover:bg-blue-700 transition-all" 
          />
        </div>

        <div className="mt-4">
          <BottomWarning 
            label={"Already have an account?"} 
            buttonText={"Sign in"} 
            to={"/signin"} 
            className="text-blue-600" 
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;