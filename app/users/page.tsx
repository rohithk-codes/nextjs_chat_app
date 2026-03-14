import React from 'react'

interface User{
    _id:"number"
    name:"string"
}

const UserPage = async () => {
//caching in next.js
    const res = await fetch('https://jsonplaceholder.typicode.com/users',{next:{revalidate:10}})
     const users :User[] = await res.json()

  return (
    <>
    <h1>Users</h1>
    <p>{ new Date().toLocaleTimeString()}</p>
    <ul>
    {users.map(user=><li key={user._id}>{user.name}</li>)}
    </ul>
    </>
  )
}

export default UserPage
