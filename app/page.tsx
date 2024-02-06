"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;

}

const Home = () => {
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        console.log(result, "HHHHHHHHHHHHH");

        setUserData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 className='text-3xl font-bold p-5'>Home Page</h1>
      <a href="/news" className="text-black hover:text-blue-500 hover:underline">Go to News Page</a>
      <ul>
        {userData.map((user: User) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
