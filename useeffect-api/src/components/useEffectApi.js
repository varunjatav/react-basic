import React, { useEffect, useState } from 'react'
// import Users from './users';


const UseEffectApi = () => {
    const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10;

  const getUsers = async () => {
    try {
      const response = await fetch(`https://api.github.com/users?page=${page}&limit=${perPage}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching GitHub users:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [ page]);
   console.log(users);

   
  return (
    <div>
        <h1 className='text-3xl font-bold'>List of Github Users</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center '>
            {users.map((user) => ( 
            
    <div key={user.id} className="mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left bg-white">
  <div className="mb-4 md:mr-6 md:mb-0">
    <img className="h-56 rounded-lg object-cover md:w-56" src={user.avatar_url} alt={user.login} />
  </div>
  <div className="">
    <p className="text-xl font-medium text-gray-700">{user.login}</p>
    <p className="mb-4 text-sm font-medium text-gray-500">{user.node_id}</p> 
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
        <p className="text-3xl font-medium text-gray-600">{Math.ceil(Math.random())} K</p>
      </div>
      <div className=""></div>
    </div>
    <div className="mb-3"></div>
    <div className="flex space-x-2">
      <button className="w-full rounded-lg border-2 bg-white px-4 py-2 font-medium text-gray-500">Message</button>
      <button className="w-full rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white">Follow</button>
    </div>
  </div>
</div>))}
           
           {/* {users.map(curElem => {console.log(curElem);})} */}
        </div>
        <div className='flex items-end justify-center gap-5'>
            <button onClick={() => {setPage(page - 1)}} disabled={page===1}>Prev</button>
            <button onClick={() => {setPage(page + 1)}}>Next</button>
        </div>
    </div>
  )
}

export default UseEffectApi