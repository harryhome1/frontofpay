// import axios from "axios"
// import { useState } from "react"
// import { useSearchParams } from "react-router-dom";

// export const SendMoney = () => {
//     const [searchParams]=useSearchParams(0);
//     const id=searchParams.get("id");
//     const name=searchParams.get("name");
//     const[amount,SetAmount]=useState(0);
//     return <div className="flex justify-center h-screen bg-gray-100">
//         <div className="h-full flex flex-col justify-center">
//             <div
//                 className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
//             >
//                 <div className="flex flex-col space-y-1.5 p-6">
//                 <h2 className="text-3xl font-bold text-center">Send Money</h2>
//                 </div>
//                 <div className="p-6">
//                 <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
//                     <span className="text-2xl text-white">{name[0]}</span>
//                     </div>
//                     <h3 className="text-2xl font-semibold">{name}</h3>
//                 </div>
//                 <div className="space-y-4">
//                     <div className="space-y-2">
//                     <label
//                         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                         for="amount"
//                     >
//                         Amount (in Rs)
//                     </label>
//                     <input
//                     onChange={(e)=>{
//                         SetAmount(e.target.value);
//                     }}
//                         type="number"
//                         className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
//                         id="amount"
//                         placeholder="Enter amount"
//                     />
//                     </div>
//                     {/* <button onClick={()=>{
//                        axios.post("http://localhost:3000/api/v1/accounts/transfer",{
//                             to: id,
//                             amount
//                         },{
//                        headers :{
//                         Authorization:"Bearer " +localStorage.getItem("token")
//                       }
//                     })
//                     }} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
//                         Initiate Transfer
//                     </button> */}

// <button
//     onClick={async () => {
//         console.log("Amount to send:", amount);
//         try {
//             const response = await axios.post("http://localhost:3000/api/v1/accounts/transfer", {
//                 to: id,
//                 amount
//             }, {
//                 headers: {
//                     Authorization: "Bearer " + localStorage.getItem("token")
//                 }
//             });

//             console.log("Transfer successful:", response.data);
//             alert("Money sent successfully!");
//         } catch (error) {
//             console.error("Error sending money:", error);
//             alert("Failed to send money. Please try again.");
//         }
//     }}
//     className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
// >
//     Initiate Transfer
// </button>

//                 </div>
//                 </div>
//         </div>
//       </div>
//     </div>
// }


// import axios from "axios";
// import { useState } from "react";
// import { useSearchParams } from "react-router-dom";

// export const SendMoney = () => {
//     const [searchParams] = useSearchParams();
//     const id = searchParams.get("id");
//     const name = searchParams.get("name");
//     const [amount, setAmount] = useState(0);

//     const handleSendMoney = async () => {
//         // Validate amount input
//         if (amount <= 0) {
//             alert("Please enter a valid amount greater than zero.");
//             return;
//         }

//         const token = localStorage.getItem("token");
//         if (!token) {
//             alert("User not authenticated. Please log in again.");
//             return;
//         }

//         console.log("Amount to send:", amount);
//         try {
//             const response = await axios.post(
//                 "http://localhost:3000/api/v1/accounts/transfer",
//                 {
//                     to: id,
//                     amount,
//                 },
//                 {
//                     headers: {
//                         Authorization: "Bearer " + token,
//                     },
//                 }
//             );

//             console.log("Transfer successful:", response.data);
//             alert("Money sent successfully!");
//         } catch (error) {
//             console.error("Error sending money:", error.response ? error.response.data : error.message);
//             alert("Failed to send money. Please try again.");
//         }
//     };

//     return (
//         <div className="flex justify-center h-screen bg-gray-100">
//             <div className="h-full flex flex-col justify-center">
//                 <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
//                     <div className="flex flex-col space-y-1.5 p-6">
//                         <h2 className="text-3xl font-bold text-center">Send Money</h2>
//                     </div>
//                     <div className="p-6">
//                         <div className="flex items-center space-x-4">
//                             <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
//                                 <span className="text-2xl text-white">{name[0]}</span>
//                             </div>
//                             <h3 className="text-2xl font-semibold">{name}</h3>
//                         </div>
//                         <div className="space-y-4">
//                             <div className="space-y-2">
//                                 <label
//                                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                                     htmlFor="amount"
//                                 >
//                                     Amount (in Rs)
//                                 </label>
//                                 <input
//                                     onChange={(e) => {
//                                         setAmount(Number(e.target.value));
//                                     }}
//                                     type="number"
//                                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
//                                     id="amount"
//                                     placeholder="Enter amount"
//                                 />
//                             </div>
//                             <button
//                                 onClick={handleSendMoney}
//                                 className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
//                             >
//                                 Initiate Transfer
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(""); // Initialize as an empty string

    const handleSendMoney = async () => {
        // Validate amount input
        if (amount <= 0) {
            alert("Please enter a valid amount greater than zero.");
            return;
        }

        const token = localStorage.getItem("token");
        if (!token) {
            alert("User not authenticated. Please log in again.");
            return;
        }

        console.log("Amount to send:", amount);
        try {
            const response = await axios.post(
                "https://payon-cwhm.onrender.com/api/v1/accounts/transfer",
                {
                    to: id,
                    amount: parseFloat(amount), // Make sure the amount is a valid number
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            console.log("Transfer successful:", response.data);
            alert("Money sent successfully!");
        } catch (error) {
            console.error("Error sending money:", error.response ? error.response.data : error.message);
            alert("Failed to send money. Please try again.");
        }
    };

    return (
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="flex flex-col justify-center items-center h-full">
                <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-6">
                    {/* Avatar and User Info */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl">
                            {name ? name[0].toUpperCase() : "?"}
                        </div>
                    </div>

                    {/* User's Name */}
                    <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                        Send to {name || "Recipient"}
                    </h3>

                    {/* Amount Input */}
                    <div className="mb-6">
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                            Enter Amount (in Rs)
                        </label>
                        <input
                            id="amount"
                            type="number"
                            value={amount}
                            onChange={(e) => {
                                const value = e.target.value;
                                // Prevents leading zero unless it's "0" alone
                                setAmount(value === "" ? "" : value.replace(/^0+(?!\.|$)/, ""));
                            }}
                            className="block w-full h-12 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="₹0.00"
                            onFocus={() => {
                                // Clear the input when focused if the value is 0
                                if (amount === "0") setAmount("");
                            }}
                            onBlur={() => {
                                // Restore the placeholder if the user leaves the input empty
                                if (amount === "") setAmount("0");
                            }}
                        />
                    </div>

                    {/* Send Button */}
                    <button
                        onClick={handleSendMoney}
                        className="w-full h-12 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-all"
                    >
                        Send Money
                    </button>
                </div>

                {/* Additional spacing */}
                <div className="mt-6 text-sm text-gray-500">
                    Secured by PayON
                </div>
            </div>
        </div>
    );
};

