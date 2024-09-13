"use client"

import { db } from "@/firebase";
import { useUser } from "@clerk/nextjs"
import { Box, Divider, TextField, Typography } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingSpinner from "../home/generator/LoadingSpinner";
import FlashcardTitle from "./_flashcardComponent/FlashcardTitle";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
export const StyledSpinner = {
  display: 'flex', 
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}
const dummy = [
  {
      "front": "earth",
      "back": "water"
  },
  {
      "front": "sea",
      "back": "ocean"
  },
  {
      "front": "da",
      "back": "dws"
  },
  {
    "front": "earth",
    "back": "water"
},
{
    "front": "sea",
    "back": "ocean"
},
{
    "front": "da",
    "back": "dws"
}
]
export default function Page() {

    const {user} = useUser();
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get('id');

    const [flashcards, setFlashcards] = useState(dummy);
    const [isLoading, setIsLoading] = useState(true);
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    function handleClickFlip(){
      setFlipped(flipped => !flipped);
    }
    useEffect(() => {
        if(!user || !search){
            return;
        }

        async function getFlashcard(){
          try {
            const docRef = doc(db, 'users', user.id, 'collection', search); // Use doc() to get a specific document
            const docs = await getDoc(docRef); // Fetch the document
            const flashcard = docs.data()['flashcards'];
            
            localStorage.setItem(`flashcards_${search}`, JSON.stringify(flashcard));
            setFlashcards(flashcard);
          } catch (error) {
            console.error;
          } finally {
            setIsLoading(false);
          }
        }
        if(localStorage.getItem(`flashcards_${search}`)){
          const flashcard = JSON.parse(localStorage.getItem(`flashcards_${search}`));
          setFlashcards(flashcard);
          setIsLoading(false);
        }else{
          getFlashcard();
        }
    },[user, search, router, setIsLoading, setFlashcards,]);

    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === ' ') {
          event.preventDefault(); // Prevent default space key behavior
          setFlipped(flipped => !flipped);
        }
        if(event.key === 'ArrowLeft'){ 
            setIndex(index => (index - 1) % flashcards?.length);
        }
        if(event.key === 'ArrowRight'){
          setIndex(index => (index + 1) % flashcards?.length);
        }

      };
  
      // Add event listener for keydown
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [setFlipped, setIndex]);
    if(index < 0){
      setIndex(0);
    }
    if(index >= flashcards?.length){
      setIndex(flashcards?.length - 1);
    }
    function handleEdit(){
      router.push(`edit-flashcard?id=${search}`)
    }
  return (
    <Box width='100vw' height='100vh' bgcolor='white'>
      {isLoading ?  <Box sx={StyledSpinner}><LoadingSpinner isLoading={isLoading}/></Box>  
      : (
        <>
        <FlashcardTitle search={search} handleEdit={handleEdit}/>
        <Box width='100vw' height='40%' display='flex' justifyContent='center'>
          <Box height='100%' width='50%' onClick={handleClickFlip} 
        sx={{
          perspective: '1000px',
          '& > div': {
            transition: 'transform 0.6s',
            transformStyle: 'preserve-3d',
            position: 'relative',
            width: '100%',
            height: '100%',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            borderRadius: 10,
            boxShadow: '5px 10px 18px #888888'

          },
          '& > div > div': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
            boxSizing: 'border-box', border: '2px solid black',
            backgroundColor: 'white', // Add background color to the card sides
            borderRadius: 10, // Match the border radius of the parent Box
            overflow: 'hidden',
            textAlign: 'center'
          },
          '& > div > div:nth-of-type(2)': {
            transform: 'rotateY(180deg)',
          },
          '&:focus': {
            outline: 'none', // Remove focus outline
          },
        }}
        >
          <div>
            <div>
              <Typography variant='h6' fontFamily='sans-serif' fontSize={25}
              sx={{
                wordBreak: 'break-word', // Break long words
                overflowWrap: 'break-word', // Break long words for wrapping
                textOverflow: 'ellipsis', // Add ellipsis for overflowed text if needed
              }}
              >
                {flashcards[index]?.front}
              </Typography>
            </div>
            <div>
              <Typography variant='h6' fontFamily='sans-serif' fontSize={25}>
              {flashcards[index]?.back}
              </Typography>
            </div>
          </div>
          </Box>
        </Box>
        <Box width='100%' display='flex' justifyContent='center' py={3} gap={10}>
            <FaArrowAltCircleLeft size={35} onClick={() => setIndex((cur) => (cur - 1) % flashcards?.length)}/>
            <Typography alignContent='center' fontFamily='serif' fontSize={21}>
              {index + 1} / {flashcards.length}
            </Typography>
            <FaArrowAltCircleRight size={35} onClick={() => setIndex((cur) => (cur + 1) % flashcards?.length)}/>
        </Box>
        <Box width='100%' align='center'>
          <Divider variant='middle' width='70%'/>
        </Box>
        {flashcards.map((card, index) => (
      
      <Box 
      key={index}
      width='100%' 
      py={2} 
      display='flex' 
      justifyContent='center'
    >
      <Box 
        display='flex' 
        width='70%' 
        border='1px solid black' 
        p={1.5} 
        borderRadius={1}
        sx={{
          overflow: 'hidden', // Ensures no overflow in case of excessive text
        }}
      >
        <TextField 
  value={card.front} 
  multiline 
  disabled={true}
  variant='outlined' // Use the standard variant
  sx={{
    '& .MuiInputBase-input': {
      color: 'black', // Set text color to black
    },
    '& .MuiInputBase-root.Mui-disabled': {
      backgroundColor: 'inherit', // Set the background color to inherit
    },
    '& .MuiInputBase-input.Mui-disabled': {
      color: 'black', // Ensure text color is black for disabled state
      WebkitTextFillColor: 'black', // Fix text fill color in WebKit browsers
    },
  }}
/>
        <Divider 
          orientation="vertical"  
          flexItem // Ensures the divider stretches to match the content height
          sx={{ 
            borderRightWidth: 2, 
            bgcolor: 'black', 
            mx: 1, // Margin left and right for spacing around the divider
            mr: 2
          }} 
        />
        <TextField  fullWidth
  value={card.back} 
  multiline 
  disabled={true}
  variant='outlined' // Use the standard variant
  sx={{
    '& .MuiInputBase-input': {
      color: 'black', // Set text color to black
    },
    '& .MuiInputBase-root.Mui-disabled': {
      backgroundColor: 'inherit', // Set the background color to inherit
    },
    '& .MuiInputBase-input.Mui-disabled': {
      color: 'black', // Ensure text color is black for disabled state
      WebkitTextFillColor: 'black', // Fix text fill color in WebKit browsers
    },
  }}
/>
      </Box>
    </Box>
          ))}
        </>
      )
      }
    </Box>
  )
}
