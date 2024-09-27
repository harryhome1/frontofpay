// import { Appbar } from "../components/Appbar"
// import { Balance } from "../components/Balance"
// import { Users } from "../components/User"
// export const Dashboard=()=>{
//     return <div>
//         <Appbar/>
//         <div className="m-8">
//             <Balance value ={"10000"}/>
//             <Users/>

//         </div>
//     </div>
// }


import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/User"
import React from 'react'

export const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Paytm-like Appbar */}
      <Appbar />

      <div className="p-6">
        {/* Card for balance info */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Balance</h2>
          <Balance value={"10000"} />
        </div>

        {/* Card for users info */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Users</h2>
          <Users />
        </div>
      </div>
    </div>
  )
}
