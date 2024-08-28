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
  const searchParams = useSearchParams();
  const search = searchParams.get('id');
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (isLoaded) {
      if (user && search) {
        // Redirect if user is present
        router.replace(`/home?id=${search}`);
        setRedirect(true);
      } else{
        // Redirect if there's an id in the search params
        router.replace(`/home`);
        setRedirect(true);
      }
      console.log(search);
    }
  }, [isLoaded, user, search, router, setRedirect]);
  if (redirect) return null;
  
  return (
    <>
      <NavBar/>
      <HeaderLayout/>
    </>
  );
}
