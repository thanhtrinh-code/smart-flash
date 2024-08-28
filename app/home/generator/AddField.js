import { db } from '@/firebase';
import { useUser } from '@clerk/nextjs';
import { Box, Button, TextField } from '@mui/material'
import { doc, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';


export default function AddField({topic, addFlashcard, setTopic, initial}) {
  const {user} = useUser();
  const userId = user.id;
  const prevTopic = topic;
  if(!initial) return null;  // Only show when initial is true.
  async function handleAddCollection(){
    if(prevTopic === topic){
      toast.error('Please enter a different topic. This topic is already existed');
      return; 
    }
    try {
      // Reference to the document where `topic` is the document ID under the `collection` sub-collection
      const userInventoryDocRef = doc(db, 'users', userId, 'collection', topic);
      
      await setDoc(userInventoryDocRef, {
        flashcards: addFlashcard,
        createdAt: new Date(),
      });

      // Optionally reset the topic or perform any other actions after successful addition
      toast.success('Collection added successfully!');
    } catch (error) {
      console.error('Error adding collection: ', error);
    }
  }
  return (
    <Box display='flex' justifyContent='center' gap={3} alignContent='center' pt={3}>
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
