// import React from "react"
import { useContext, useEffect, useState } from 'react';
import Login from "./components/Auth/Login"
import { EmployeeDashboard } from "./components/Dashboard/EmployeeDashboard"
import { AdminDashboard } from "./components/Dashboard/AdminDashboard"
import { AuthContext } from './context/AuthProvider';

// import { getLocalStorage, setLocalStorage } from "./utils/localStorage"


const App = () => {
  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const data = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
      }
    },[]
  
  )
  
  
  const handleLogin = (email,password)=>{
    if(email=='admin@me.com' && password =='123'){
      setUser('admin')
      console.log("This is Admin Login")
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(data){
      const employee = data.employees.find((e) => e.email == email && e.password == password)
      if(employee){
        setUser('employee')
        setloggedInUserData('employee')
      }
      
      console.log("This is Employee Login")
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
    }
    else{
      alert("Invalid login info")
    }
  }
  
  return (
    <>
     {!user ? <Login handleLogin={handleLogin} />: ''}
     {user == 'admin' ? <AdminDashboard/> : null}
     {user == 'employee' ? <EmployeeDashboard data = {loggedInUserData}/>:null }
     {/* <EmployeeDashboard /> */}
     {/* <AdminDashboard /> */}
    </>
  )
}

export default App
