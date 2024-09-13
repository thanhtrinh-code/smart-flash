import { db } from '@/firebase';
import { useUser } from '@clerk/nextjs';
import { Box, Button, CardActionArea, CardContent, Grid, TextField, Typography } from '@mui/material'
import { collection, doc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import LoadingSpinner from '../generator/LoadingSpinner';
import { useRouter } from 'next/navigation';


const StyledSpinner = {
  display: 'flex', 
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}
export default function Collections() {
  const {user} = useUser();
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const router = useRouter();
  useEffect(() => {
    async function getFlashcard() {
      try {
        setIsLoading(true);
        const userId = user?.id;
        if (!userId) return; // Ensure userId is available

        const userInventoryRef = collection(db, 'users', userId, 'collection');
        const querySnapshot = await getDocs(userInventoryRef);
        const collections = querySnapshot.docs.map((doc) => ({
          id: doc.id,
         ...doc.data(),
        }));
        setCollections(collections);
      } catch (error) {
        console.error('Error fetching flashcards:', error);
      } finally {
        setIsLoading(false);
      }
    }

    getFlashcard();
  }, [setIsLoading, setCollections, user]);
  function handleClick(id){
    router.push(`/flashcard?id=${id}`);
  }
  

  return (
    <Box width='100vw' height='100vh' bgcolor='#e8e8e8' display='flex' alignContent='center' flexDirection='column'>
      {isLoading ? <Box sx={StyledSpinner}><LoadingSpinner isLoading={isLoading}/></Box> :
      <>
      <Box width='100vw' display='flex' justifyContent='space-around' mt={5}>
        <Typography variant='h3' color='#181e32' fontFamily="Space Grotesk">
          Flashcard Collections
        </Typography>
        <Box display='flex' alignItems='center' gap={2}>
          <TextField value={search} onChange={(e) => setSearch(e.target.value)}  label='Search'
          sx={{
            '& .MuiInputBase-root': {
              height: '3rem',
            },
            '& .MuiInputBase-input': {
              alignContent: 'center',  // Centers the text inside the TextField
            },
          }}/>
          <Button variant='contained' onClick={() => router.push('/create-collection')}>
            Create Collection
          </Button>
        </Box>
      </Box>
      <Grid container spacing={3} sx={{width: '100vw', height: '90vh', pt:3,}}>
        {collections.filter((card) => {
          return card.id.toLowerCase() === ''? card : card.id.toLowerCase().includes(search.toLowerCase());
        }).map(collection => (
            <Grid item xs={8} md={4} lg={3} key={collection.id} sx={{display: 'flex', justifyContent: 'center'}}>
            <CardActionArea onClick={() => handleClick(collection.id)}
              sx={{
                borderRadius: 5, height: '12rem',
                '&:hover': {
                  boxShadow: '5px 10px',
                }, width: '70%'
              }}
            >
              <CardContent 
                sx={{
                  padding: 2, borderRadius: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  backgroundColor: '#f5f5f5', height: '100%'
                }}
              >
                <Box
                  sx={{
                    padding: 2,
                    backgroundColor: '#ffffff', height: '100%',
                    borderRadius: 1,
                    boxShadow: 1,
                    width: '100%',
                  }}
                >
                  <Typography 
                    variant="body1" 
                    color="textSecondary" 
                    sx={{ fontWeight: 500, marginBottom: 1 }}
                  >
                    {new Date(collection.createdAt.seconds * 1000).toDateString()}
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ fontWeight: 600, marginBottom: 1 }}
                  >
                    {collection.id}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ fontWeight: 500 }}
                  >
                    Total of flashcards: {collection.flashcards.length}
                  </Typography>
                  
                </Box>
              </CardContent>
            </CardActionArea>
          </Grid>
          ))}
      </Grid>
      </>
      }

    </Box>
  )
}
