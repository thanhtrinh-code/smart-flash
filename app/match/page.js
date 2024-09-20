'use client'
import { Box, LinearProgress, Typography} from '@mui/material';


import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { StyledSpinner } from '../flashcard/page';
import LoadingSpinner from '../home/generator/LoadingSpinner';
import MatchNavBar from './_matchComponent/MatchNavBar';
import Container from './_matchComponent/Container';
import StartDisplay from './_matchComponent/StartDisplay';
import EndDisplay from './_matchComponent/EndDisplay';




export default function Page() {
  const searchParams = useSearchParams();
    const search = searchParams.get('id');

    
    const [flashcards, setFlashcards] = useState(null);
    const [lengthOf6Flashcards, setLengthOf6Flashcards] = useState(null);
    const [indexes, setIndexes] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [timer, setTimer] = useState(30);
    const [gameover, setGameover] = useState(false);
    const [correct, setCorrect] = useState(0);
    const [start, setStart] = useState(true);
    
    
    useEffect(() => {
      async function fetchFlashcards(){
        try {
          setIsLoading(true);
          if(!flashcards){
              const flashcard = await localStorage.getItem(`flashcards_${search}`);
              if(flashcard){
                  const jsonFlashcard = JSON.parse(flashcard);
                  shuffle(jsonFlashcard);
                  setFlashcards(jsonFlashcard);

                  const dummy = jsonFlashcard.slice(indexes, indexes + 6).flatMap((item, index) => [
                    { position: index, name: item.front },
                    { position: index, name: item.back }
                  ]);
                  setIndexes(indexes + 6);
                  setLengthOf6Flashcards(dummy);
              }
          }
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
      fetchFlashcards();
  }, [setIsLoading, setFlashcards, flashcards, search, setLengthOf6Flashcards]);
  useEffect(() => {
    if(timer > 0 && !start){
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 0.1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [timer, start])
  function shuffle(arr){
    for(let i = arr.length - 1 ; i >= 0 ; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  function handleReset(){
    const shuffledFlashcards = [...flashcards];
    shuffle(shuffledFlashcards);
    setFlashcards(shuffledFlashcards);
    const dummy = shuffledFlashcards.slice(0, 6).flatMap((item, index) => [
                    { position: index, name: item.front },
                    { position: index, name: item.back }
                  ]);
    setLengthOf6Flashcards(dummy);
    setIndexes(6);
    setTimer(30);
    setGameover(false);
    setCorrect(0);
  }

  function nextSetOf6() {
    const newIndex = indexes + 6;
    
    if (newIndex <= flashcards.length) {
        // Create a dummy array with the next 6 flashcards
        const nextFlashcards = flashcards.slice(indexes, newIndex).flatMap((item, index) => [
            { position: index, name: item.front },
            { position: index, name: item.back }
        ]);
        setLengthOf6Flashcards(nextFlashcards);
        setTimer(30); // Reset timer
        setIndexes(newIndex);
    } else {
        // Handle fewer than 6 remaining flashcards or end of game
        const remainingFlashcards = flashcards.slice(indexes).flatMap((item, index) => [
            { position: index, name: item.front },
            { position: index, name: item.back }
        ]);
        setLengthOf6Flashcards(remainingFlashcards);
        
        if (indexes >= flashcards.length) {

            setGameover(true);
        } else {
            setTimer(30); // Reset timer for the remaining flashcards
            setIndexes(newIndex);
        }
    }
}

  return (
    <Box width='100vw' height='100vh' bgcolor='white'>
        {isLoading && <Box sx={StyledSpinner}><LoadingSpinner isLoading={isLoading}/></Box>}
        {gameover && (
          <>
            <MatchNavBar search={search}/>
            <Box width='100%' textAlign='center'>
      <LinearProgress 
        variant='determinate' 
        value={0} 
        sx={{ height: '1rem', backgroundColor: 'black', 
        '& .MuiLinearProgress-bar': { backgroundColor: 'green', }
      }} 
      />
      <Typography pt={1} fontFamily='serif' fontSize='1.5rem' fontWeight='bold'> 
        Welcome Back
      </Typography>
    </Box>
            <EndDisplay correct={correct} flashcards={flashcards} handleReset={handleReset}/>
          </>
        )} 
        {flashcards && !gameover && (
          <>
            <MatchNavBar search={search}/>
            <Box width='100%' textAlign='center'>
      <LinearProgress 
        variant='determinate' 
        value={start ? 100 : (timer / 30) * 100} 
        sx={{ height: '1rem', backgroundColor: 'black', 
        '& .MuiLinearProgress-bar': { backgroundColor: 'green', }
      }} 
      />
      <Typography pt={1} fontFamily='serif' fontSize='1.5rem' fontWeight='bold'> 
        {start ? 'Hello' : timer <= 0 ? '0' : timer.toFixed(1)} {!start && 's'}
      </Typography>
    </Box>
            {start ? <StartDisplay setStart={setStart}/> : (
            <Box width='100%' height='90vh' bgcolor='inherit' position='relative' display='flex' justifyContent='center' pb={10} mt={1}>
              <Container flashcards={lengthOf6Flashcards} timer={timer} nextSetOf6={nextSetOf6} gameover={gameover} setCorrect={setCorrect}/>
            </Box>)}
          </>
        )}
      </Box>
  )
}
