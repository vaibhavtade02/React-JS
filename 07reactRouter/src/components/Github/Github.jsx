import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data =  useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/vaibhavtade02')
    //     .then(response=>response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // })
    return(
        <div className='text-center m-4 bg-gray-600 p-4 text-3xl text-white'>Github Followers : {data.followers} 
        <img className="mx-auto py-3" src={data.avatar_url}></img></div>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/vaibhavtade02')
    return response.json()
}