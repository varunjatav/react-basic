import React from 'react'

const Users = (user) => {
    
  return (
    <div className="mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left bg-white">
  <div className="mb-4 md:mr-6 md:mb-0">
    <img className="h-56 rounded-lg object-cover md:w-56" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="" />
  </div>
  <div className="">
    <p className="text-xl font-medium text-gray-700">{user.login}</p>
    <p className="mb-4 text-sm font-medium text-gray-500">Senior Editor</p> 
    <div className="flex space-x-2">
      <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
        <p className="text-sm font-medium text-gray-500">Articles</p>
        <p className="text-3xl font-medium text-gray-600">13</p>
      </div>
      <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
        <p className="text-sm font-medium text-gray-500">Papers</p>
        <p className="text-3xl font-medium text-gray-600">7</p>
      </div>
      <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
        <p className="text-sm font-medium text-gray-500">Followers</p>
        <p className="text-3xl font-medium text-gray-600">2.5k</p>
      </div>
      <div className=""></div>
    </div>
    <div className="mb-3"></div>
    <div className="flex space-x-2">
      <button className="w-full rounded-lg border-2 bg-white px-4 py-2 font-medium text-gray-500">Message</button>
      <button className="w-full rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white">Follow</button>
    </div>
  </div>
</div>

  )
}

export default Users