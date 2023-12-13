// import { getServerSession } from 'next-auth';
// import { authOptions } from './api/auth/[...nextauth]/route';
"use client"
import { useSession } from 'next-auth/react';

export default function Home() {
  // const data = await getServerSession(authOptions);
  const {data, status} = useSession()
  return (
    <main>
      Hello World!
      <div>{JSON.stringify(data)}</div>
      <div>{JSON.stringify(status)}</div>

    </main>
  );
}
