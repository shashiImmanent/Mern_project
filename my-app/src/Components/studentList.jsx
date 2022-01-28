import React, { useEffect, useState } from "react";
const StudentList = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("http://localhost:8001/students")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
		
			<h1>Name list</h1>
     
        <ol>
          {users.map(user => (
            <li key={user.id}>{user.fullname}</li>
          ))}
        </ol>
     
		<ol>
			<h1>Contact List</h1>
          {users.map(user => (
            <li key={user.id}>{user.phone}</li>
          ))}
        </ol>

		<ol>
			<h1>Email Address</h1>
          {users.map(user => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ol>

		<ol>
			<h1>Messages</h1>
          {users.map(user => (
            <li key={user.id}>{user.message}</li>
          ))}
        </ol>


	  
    </div>
  ) 
}

	

export default StudentList;
