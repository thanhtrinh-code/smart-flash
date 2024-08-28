'use client'
import React, { useState } from 'react'
import CreateCollectionBar from './CreateCollectionBar';
import {Box } from '@mui/material';
import { useUser } from '@clerk/nextjs';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { db } from '@/firebase';
import CreateCollectionTittle from './CreateCollectionTittle';
import CreateCollectionCard from './CreateCollectionCard';
import InvalidToAdd from './InvalidToAdd';
import { useRouter } from 'next/navigation';

export default function Page() {
    const { isSignedIn, user, isLoaded } = useUser(); 
    const [topic, setTopic] = useState('');
    const [cards, setCards] = useState([
         {
            front: '',
            back: ''
         },
         {
            front: '',
            back: ''
         },
         {
        front: '',
        back: ''
    }]);
    const [validToAdd, setValidToAdd] = useState(false);
    const router = useRouter();
    if (!user) {
        return null
      }
    
    async function handleAddCollection(){
      if(topic === ''){
        toast.error('Please enter a topic.');
        return; 
      }
      if(!cards[0]['front'] && !cards[0]['back'] && !cards[1]['front'] && !cards[1]['back']){
        setValidToAdd(true);
        return;
      }
      try {
        // Reference to the document where `topic` is the document ID under the `collection` sub-collection
        const userInventoryRef = collection(db, 'users', user.id, 'collection');
        const docSnap = await getDocs(userInventoryRef);
        if (docSnap.empty) {
          const docRef = doc(db, 'users', user.id, 'collection', topic);
          await setDoc(docRef, {
          flashcards: cards,
          createdAt: new Date(),
          }); 
          toast.success('Collection added successfully!');
          router.push('/home');
        }else{
          const exists = docSnap.docs.some((doc) => doc.id === topic);
          if(exists){
            toast.error('A collection with this name already exists.');
            return;
          }else{
            const docRef = doc(db, 'users', user.id, 'collection', topic);
            await setDoc(docRef, {
              flashcards: cards,
              createdAt: new Date(),
            });
            router.push('/home');
          }
        }
      } catch (error) {
        console.error('Error adding collection: ', error);
      }
    }
  return (
    <Box width='100vw' height='100vh' bgcolor='#e8e8e8' overflow='scroll'>
      <CreateCollectionBar/>
      <CreateCollectionTittle topic={topic} setTopic={setTopic} handleAddCollection={handleAddCollection}/>
      <Box width='100vw' height='100%' bgcolor='inherit' mt={3}>
        {validToAdd && <InvalidToAdd/>}
        <CreateCollectionCard cards={cards} setCards={setCards} setValidToAdd={setValidToAdd}/>
      </Box>

    </Box>
  )
}
