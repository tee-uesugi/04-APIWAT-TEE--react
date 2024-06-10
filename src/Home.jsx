import React, { useState, useEffect } from "react"
import Admin from "./components/Admin"
import User from "./components/User"


const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
  const [sector, setSector] = useState("")
  const [employees,setEmployees] = useState(mockEmployees)
  const [message,setMessage] = useState()

  useEffect(() => {
    setMessage(
      sector === "user"
        ?"Generation Thailand Home - User Sector"
        :sector === "admin"
        ? "Generation Thailand Home - Admin Sector"
        :"Generation Thailand React - Assessment"
      );
    },[sector]);
      
  
  const togglePosition = (newSector) => {
    setSector( (preSector) => preSector === newSector ? "" : newSector )
  }
  
  return (
    <body className="bg-red-300">
      <div >
        <div>
          <div className="font-bold text-2xl">
            <h1>{message}</h1>
          </div>
          <div className="flex flex-between p-2 ">
            <button onClick={() => togglePosition("user")}>User Home Sector</button>
            <button onClick={() => togglePosition("admin")}>Admin Home Sector</button>
          </div>
          { sector === "user" ? 
          <User employees= {employees} /> 
          : sector === "admin" ?
          <Admin setEmployees={setEmployees} employees = {employees} />
          : "" }
        </div>
      </div>
    </body>
  )
}



export default Home
