import React from 'react'

interface User{
    _id:"number"
    name:"string"
}

const UserPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
     const users :User[] = await res.json()

  return (
    <>
    <h1>Users</h1>
    <ul>
    {users.map(user=><li key={user._id}>{user.name}</li>)}
    </ul>
    </>
  )
}

export default UserPage
