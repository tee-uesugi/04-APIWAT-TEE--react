import React, { useState } from "react"
import Admin from "./components/Admin"
import User from "./components/User"
import NavBar from "./Navbar"

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

  const togglePosition = (newsector) => {
    setSector( (preSector) => preSector === newsector ? "" : newsector )
  }
  
  return (
    <div className="bg-red">
      <NavBar />
      <div>
        <div className="font-bold text-2xl">
          <h1>Generation ThailandReact - Assessment</h1>
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
  )
}



export default Home
