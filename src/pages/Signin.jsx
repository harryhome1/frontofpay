// import { useState } from "react"
// import { BottomWarning } from "../components/BottomWarning"
// import { Button } from "../components/Button"
// import { Heading } from "../components/Heading"
// import { InputBox } from "../components/InputBox"
// import { Subheading } from "../components/Subheading"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"

// export const Signin = () => {
// const [username,setUsername]=useState("");
// const [password, setPassword] = useState("");
// const navigate=useNavigate();
//     return <div className="bg-slate-300 h-screen flex justify-center">
//     <div className="flex flex-col justify-center">
//       <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
//         <Heading label={"Sign in"} />
//         <Subheading label={"Enter your credentials to access your account"} />
//         <InputBox onChange={(e)=>{
//           setUsername(e.target.value);
//         }} placeholder="harkirat@gmail.com" label={"Email"} />
//         <InputBox onChange={(e)=>{
//           setPassword(e.target.value);
//         } }placeholder="123456" label={"Password"} />
//         <div className="pt-4">
//           <Button onClick={async()=>{
//             await axios.post("http://localhost:3000/api/v1/user/signin",{
//               username,
//               password
//             });
//             navigate("/dashboard")
//           }} label={"Sign in"} />
//         </div>
//         <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
//       </div>
//     </div>
//   </div>
// }


import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Subheading } from "../components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-blue-50 to-sky-200 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full max-w-sm">
        <div className="rounded-lg bg-white shadow-lg w-full text-center p-6">
          <Heading label={"Sign in to PayON"} />
          <Subheading label={"Enter your credentials to continue"} />
          <div className="mt-6">
            <InputBox
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Enter your email"
              label={"Email"}
              className="mb-4"
            />
            <InputBox
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter your password"
              label={"Password"}
              type="password"
              className="mb-6"
            />
          </div>
          <div className="pt-4">
            <Button
              onClick={async () => {
                await axios.post("https://payon-cwhm.onrender.com/api/v1/user/signin", {
                  username,
                  password,
                });
                navigate("/dashboard");
              }}
              label={"Sign in"}
              className="w-full py-2 bg-gradient-to-r from-blue-500 to-sky-400 text-white font-bold rounded-full shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600"
            />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
};
