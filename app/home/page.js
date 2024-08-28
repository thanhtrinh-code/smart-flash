'use client'
import { useUser } from '@clerk/nextjs'
import { Box } from '@mui/material'
import HomeNavBar from '../_navbar/home/HomeNavBar'
import { useState } from 'react';
import Generator from './generator/Generator';
import Games from './games/Games';
import Collections from './collections/Collections';


export default function Page() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [feature, setFeature] = useState('generator');
    if (!isLoaded || !isSignedIn) {
      return null
    }
    function handleChange(feature){
      setFeature(feature);
    }
    return (
      <>
        <HomeNavBar feature={feature} handleChange={handleChange}/>
        {feature === '' && <Box>Home</Box>}
        {feature === 'generator' && <Generator/>}
        {feature === 'games' && <Games/>}
        {feature === 'collection' && <Collections/>}
      </>
    )
}
