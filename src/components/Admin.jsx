import React, { useState } from "react";

export default function Admin({employees, setEmployees}) {
    const [formData, setFormData] = useState({
        name:'',
        lastname:'',
        position:'',
    });

    const handleChange = () => {
        setFormData({
           ...formData,
            [e.target.name]: e.target.value
        })
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setEmployees([...employees, formData ])
        setFormData({name:'', lastname:'', position:''})
    }


    return (
        <div>
            <div>
                <h2>Create User Here</h2>
                <form onSubmit={handleSubmit} className="" >
                    <div>
                        <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        />
                        <input 
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder="Last Name"
                        />
                        <input 
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        placeholder="Position"
                        />
                        <button type="submit" className="">Save</button>
                    </div>
                </form>
                <div>
                    <h2>Table 1</h2>
                      <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Last Name</th>
                                <th>Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee, index) => (
                                <tr key={index}>
                                    <td>{employee.name}</td>
                                    <td>{employee.lastname}</td>
                                    <td>{employee.position}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
};