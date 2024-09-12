"use client"
import { db } from '@/firebase';
import { useUser } from '@clerk/nextjs';
import { Box, Button, TextField } from '@mui/material'
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import toast from 'react-hot-toast';


export default function AddField({addFlashcard, setFeature}) {
  const {user} = useUser();
  const userId = user.id;
  const [topic, setTopic] = useState('');
  async function handleAddCollection(){
    try {
      // Reference to the document where `topic` is the document ID under the `collection` sub-collection
      const userInventoryDocRef = doc(db, 'users', userId, 'collection', topic);
      
      await setDoc(userInventoryDocRef, {
        flashcards: addFlashcard,
        createdAt: new Date(),
      });

      // Optionally reset the topic or perform any other actions after successful addition
      toast.success('Collection added successfully!');
      setFeature('collection');
    } catch (error) {
      console.error('Error adding collection: ', error);
    }
  }
  return (
    <Box display='flex' justifyContent='center' gap={3} alignContent='center'>
        <TextField id='Name' required value={topic} label='Collection Name' onChange={(e) => setTopic(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': { borderRadius: '20px', border: '1px solid black' }, width: '20vw',
        }}
        />
        <Button variant='contained' onClick={handleAddCollection} sx={{
        bgcolor: 'green', transition: 'transform 0.5s ease',
        color: '#fff',
        padding: '7px 17px',
        fontSize: '16px',
        fontWeight: 'bold', 
        height: '60%', mt: 0.95, borderRadius:5,
        '&:hover': {
          bgcolor: 'green', color: 'black', transform: 'translateY(-5px)'
        }
      }}>
          Add To Collection
        </Button>
      </Box>
  )
}
