"use client"
import { db } from "@/firebase";
import { useUser } from "@clerk/nextjs";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LoadingSpinner from "../home/generator/LoadingSpinner";
import { FaRegTrashAlt } from "react-icons/fa";

const StyledSpinner = {
  display: 'flex', 
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}
export default function Page() {
    const {user} = useUser();
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get('id');

    const [isLoading, setIsLoading] = useState(true);
    const [flashcard, setFlashcards] = useState(null);
    const [title, setTitle] = useState(search);
    const overflowCardsRef = useRef(null);
    function scrollToBottom(){
        overflowCardsRef.current?.scrollIntoView({behavior: 'smooth'}); 
    }
    /*useEffect(() => {
        scrollToBottom();
      }, [flashcard]);*/
    useEffect(() => {
        if(!user || !search){
            return;
        }
        async function getFlashcard(){
          try {
            setIsLoading(true);
            const docRef = doc(db, 'users', user.id, 'collection', search); // Use doc() to get a specific document
            const docs = await getDoc(docRef); // Fetch the document
            setFlashcards(docs.data()['flashcards']);
          } catch (error) {
            console.error;
          } finally {
            setIsLoading(false);
          }
        }
        getFlashcard();
    }, [user, router, search, setIsLoading, setFlashcards]);
    function handleInputChange(index, field, value){
        const newCards = [...flashcard];
        newCards[index][field] = value;
        setFlashcards(newCards);
      }
    function handleAddMoreCards(){
        setFlashcards([...flashcard, { front: '', back: '' }]);
      }
    function handleDeleteCard(index){
        setFlashcards((prevCards) => prevCards.filter((_, i) => i!== index));
      }
    async function handleSave(){
        const userId = user.id;
        const docRef = doc(db, 'users', userId, 'collection', title);
        await updateDoc(docRef, {
            createdAt: new Date(),
            flashcards: flashcard,
        });
        router.push(`flashcard?id=${title}`);

    }

  return (
    <Box width='100vw' height='100vh' bgcolor='white'>
      {isLoading ? <Box sx={StyledSpinner}><LoadingSpinner isLoading={isLoading}/></Box>
      : (
        <>
        <Box width='100%' display='flex' justifyContent='center' py={3}>
            <Typography variant="h4" fontFamily='serif' sx={{width: '80%'}}> {title.charAt(0).toUpperCase() + title.slice(1)} </Typography>
        </Box>
        <Box height='100%' width='100%'>
            <Stack spacing={2} width='100%' alignItems='center'>
                {flashcard?.map((card, index) => (
                    <Box width='80%' bgcolor='white' key={index} border='1px solid black' borderRadius={3}>
                    <Box width='100%' display='flex' px={5} py={2} borderBottom='0.5px solid black' justifyContent='space-between'>
                      <h2>
                        {index + 1}
                      </h2>
                      <FaRegTrashAlt size={25} onClick={() => handleDeleteCard(index)} style={{cursor: 'pointer'}}/>
                    </Box>
                    <Box display='flex' gap={2} px={5} py={2.5}>
                      <TextField
                      label='Front'
                      value={card?.front}
                      onChange={(e) => handleInputChange(index, 'front', e.target.value)}
                      fullWidth
                      multiline
                      />
                      <TextField
                      value={card?.back}
                      label='Back'
                      onChange={(e) => handleInputChange(index, 'back', e.target.value)}
                      fullWidth
                      multiline
                      />
                    </Box>
                  </Box>
                ))}
                {/* <div ref={overflowCardsRef}/> */}
                <Box width='100%' pb={2.5} display='flex' justifyContent='center'>
                    <Box width='80%' display='flex' justifyContent='space-between'>
                        <Box></Box>
                        <Box ml={25}>
                        <Button variant='contained' onClick={handleAddMoreCards}>+</Button>
                        </Box>
                        
                        <Box display='flex' gap={1}>
                        <Button onClick={() => router.back()}
                        sx={{
                            backgroundColor: 'transparent',
                            border: '1px solid #ccc',
                            color: '#000',
                            borderRadius: '50px',
                            padding: '0.5em 1.5em',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#f2f2f2',
                                borderColor: '#888',
                            },
                            }}>
                                Cancel
                                </Button>
                                <Button onClick={handleSave}
                                sx={{
                                    backgroundColor: '#000',
                                    color: '#fff',
                                    borderRadius: '50px',
                                    padding: '0.5em 1.5em',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#333',
                                    },
                                    }}>
                                        Save
                                    </Button>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Box>
        </>
      )}
      

    </Box>
  )
}
