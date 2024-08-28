"use client"
import getStripe from '@/app/utils/get-stripe';
import HeaderLayout from './_session/HeaderLayout';
import NavBar from './_navbar/NavBar';
import { useUser } from '@clerk/nextjs';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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
