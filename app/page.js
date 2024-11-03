"use client"
import HeaderLayout from './_session/HeaderLayout';
import NavBar from './_navbar/NavBar';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
export default function Home() {
  const {isLoaded, isSigned, user} = useUser();
  const router = useRouter();
  if(user){
    router.push('/home');
  }
  
  return (
    <>
      <NavBar/>
      <HeaderLayout/>
    </>
  );
}
