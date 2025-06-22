/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
import { useState } from "react";
function App() {
  /*let userList = [
    {name:"sam",age:25},
    {name:"jack",age:15}

  ]
  //userList.push({name:"Johnson",age:25});
  let [userList,setuserList] = useState([
    {name:"sam",age:25,email:'sam@gmail.com',password:'12345678'},
  ]
  )
  return (
    <>
    <input type="text" placeholder="Enter email" onClick={(e)=>setuserList([...userList,{name:e.target.value}])}/>
    <ul>
    {
      userList.map((user) => {
        <li key={user.id}>
          {user.name}
        </li>

      })
    }
    </ul>
    </>
  )
}

export default App
import {useState} from "react";
function App() {
  let [userList , setuserList] = useState( [
    {name: 'john',email:'john@gmail.com',password:'12334'},
  ]

  )
return (
  <>
     <input type="text" placeholder="Enter email" onClick={(e ) => setuserList( [...userList,{name:e.target.value}])}/>
     <ul>
      {
          userList.map((user ) => (
            <li key={user.id}>
              {user.name}
            </li>

          ))
      }
     </ul>
  </>
)
}
export default App
import {useState} from "react";
function App(){
  let [count,setcount] = useState(0)
  return (
    <div>
      <button onClick={()=>setcount(count+1)}>
        click
      </button>
      <h1>
        {count}
      </h1>
    </div>
  )
}
export default App
import {useState} from 'react'
function App(){
  let [userList,setUserList] = useState([])
  let [user] = useState({name:'',email:'',password:''});
  return (
    <>
    <form onSubmit={(e)=>{
      e.preventDefault()
      setUserList([...userList,{...user}]);
    }}>
      <input type="text" placeholder="name" onChange={(e)=>{
        user.name=e.target.value;}}/>
        <input type="text" placeholder="email" onChange={(e)=>{
          user.email=e.target.value;}
        }/>
        <button type="submit">Submit</button>
    </form>
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {
          userList.map((user,index)=>(
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </table>
    </div>q
    </>
  )
}
export default App*/
import ListUser from "../ListUser.jsx";

function App(){
  return (
    <ListUser/>
  )
}

export default App