'use client'
import { Box, Button, LinearProgress, Typography } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { StyledSpinner } from '../flashcard/page';
import LoadingSpinner from '../home/generator/LoadingSpinner';
import MatchNavBar from './_quizComponent/MatchNavBar';
import LearnHeader from '../learn/_learnComponent/LearnHeader';
import ContinueButton from '../learn/_learnComponent/ContinueButton';
import Congrats from './_quizComponent/Congrats';
import DontKnowButton from './_quizComponent/DontKnowButton';

export default function Page() {
    const searchParams = useSearchParams();
    const search = searchParams.get('id');

    const [flashcards, setFlashcards] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [options, setOptions] = useState(null);
    const [curIndex, setCurIndex] = useState(4);
    const [correct, setCorrect] = useState(0);
    const [answer, setAnswer] = useState(false);
    const [option, setOption] = useState(null);

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
                    
                    const incorrectOptions = jsonFlashcard.filter((_, i) => i !== curIndex);
                    shuffle(incorrectOptions);
                    const other = incorrectOptions.slice(0, 3);
                    setOptions([...other, jsonFlashcard[curIndex]]);

                }
            }
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        }
        fetchFlashcards();
    }, [setIsLoading, setFlashcards, flashcards, setOptions]);
    useEffect(() => {

        function handleKeyDown(e){
            handleContinue();
        }
        if(answer){
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [answer]);

    


    function shuffle(arr){
        for(let i = arr.length - 1 ; i >= 0 ; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    function handleOptionClick(newOption){
        if(option){
            return;
        }
        setOption(newOption);
        if(newOption.back === flashcards[curIndex].back){
            setCorrect(correct + 1);
            setTimeout(handleContinue, 2000);
        }else{
            setAnswer(true);
        }
    }
    function handleContinue(){
        setCurIndex(index => index + 1);
        setAnswer(false);
        setOption(null);

        if(curIndex < flashcards?.length){
            const incorrectOptions = flashcards.filter((_, i) => i !== curIndex + 1);
            shuffle(incorrectOptions);
            const other = incorrectOptions.slice(0, 3);
            setOptions([...other, flashcards[curIndex + 1]]);
        }
    }
  return (
    <Box width='100vw' height='100vh' bgcolor='white' position='relative'>
        {isLoading && <Box sx={StyledSpinner}><LoadingSpinner isLoading={isLoading}/></Box>}
        {flashcards && curIndex + 1 > flashcards.length && 
            <>
                <MatchNavBar search={search}/>
            <Box width='100%' height='70vh' bgcolor='inherit' position='relative' display='flex' justifyContent='center' pb={10}>
            <Box width='60%' height='32rem' bgcolor='#e0deda' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.8)' // Darker shadow for more depth
                    top='3rem' position='absolute' p={2} // Padding for internal spacing 
                    justifyContent='space-around' pl={3} borderRadius='8px'>
                 <Box sx={{ width: '100%', display:'flex', justifyContent: 'center', mt: 2 }}>
                    <Box sx={{width: '80%', textAlign: 'center'}}>
                    <LinearProgress variant="determinate" value={(correct) / flashcards?.length * 100} sx={{ height: '1.5rem', borderRadius: '0.5rem',
                                    backgroundColor: 'black', '& .MuiLinearProgress-bar': { backgroundColor: 'white', },}} />
                    <Typography sx={{ mt: '0.5rem', fontSize: 23, fontFamily: 'serif', fontWeight: 'bolder' }}>
                        You answer correct: {correct} / {flashcards?.length}
                    </Typography>
                    </Box>
                </Box>
                <Box
      width="80%"
      maxWidth="600px"
      bgcolor="#e0ffe0" // Light green background for a congratulatory feel
      borderRadius="8px"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
      p={4}
      textAlign="center"
      mx="auto" // Centers the box horizontally
      my={4}   // Adds margin top and bottom
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#4caf50' }}>
      🎉 Congratulations! 🎉
      </Typography>
      <Typography variant="h6" paragraph >
        Well Done
      </Typography>
      <Button type='submit' variant="contained" color="success">
        Restart 🚀
      </Button>
    </Box>
        </Box>
        </Box>
            </>
        
        }
        {flashcards && curIndex + 1 <= flashcards.length && (
            <>
                <MatchNavBar search={search}/>
                <Box sx={{ width: '100%', display:'flex', justifyContent: 'center', mt: 2 }}>
                    <Box sx={{width: '80%', textAlign: 'center'}}>
                    <Box width="100%" display="flex" alignItems="center" gap="1rem">
  <span style={{
    border: '1px solid black', padding: 10, borderRadius: 10, 
    backgroundColor: '#f9f9f9',  // Soft gray to complement white
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',  // Soft shadow
  }}>Correct: {correct}</span>
  <LinearProgress
    variant="determinate"
    value={(curIndex + 1) / flashcards?.length * 100}
    sx={{
      flex: 1, // Allow LinearProgress to take up remaining space
      height: '1.5rem',
      borderRadius: '0.5rem',
      backgroundColor: '#e0e0e0',
      '& .MuiLinearProgress-bar': { backgroundColor: 'black' },
    }}
  />
</Box>

                    <Typography sx={{ mt: '0.5rem', fontSize: 23, fontFamily: 'serif', fontWeight: 'bolder' }}>
                        Question: {curIndex + 1} / {flashcards?.length}
                    </Typography>
                    </Box>
                </Box>
                <Box width='100%' height='70vh' bgcolor='inherit' position='relative' display='flex' justifyContent='center' pb={10}>
                    <Box width='60%' bgcolor='#e0deda' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.8)' // Darker shadow for more depth
                            top='3rem' position='absolute' display='flex' flexDirection='column' p={2} // Padding for internal spacing 
                            justifyContent='space-around' pl={3} borderRadius='8px' sx={{
                                height: {
                                  xs: '45rem',
                                  md: '32rem', 
                                }
                              }}>
                        <LearnHeader question={flashcards[curIndex].front}/>
                        {option?.back === flashcards?.[curIndex].back && <Congrats/>}
                        <Box display='flex' flexWrap='wrap' gap='1rem' justifyContent='center' width='100%'>
  {options?.map((answer, index) => (
    <Box
      key={index} 
      onClick={() => handleOptionClick(answer)}
      sx={{
        flex: {
          xs: '1 1 100%',  // 1 column for extra-small screens (mobile)
          sm: '1 1 calc(50% - 1rem)',  // 2 columns for small screens and above
        },
        padding: '1rem',
        border: '2px solid #ccc',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        fontSize: {
          xs: '0.875rem',  // Smaller text for mobile
          sm: '1rem',  // Default size for small screens and up
        },
        borderColor: option ? option.back === answer.back ? option.back === flashcards[curIndex].back ? 'green' : 'red' : answer.back === flashcards[curIndex].back ? 'green' : 'none' : 'none',

        '&:hover': {
          backgroundColor: '#e0e0e0',
        },
        '&:active': {
          backgroundColor: '#d0d0d0',
        },
      }}
    >

      {answer.back}
    </Box>
  ))}
  <DontKnowButton/>
</Box>

  

                        
                    </Box>
                </Box>
                {answer && <ContinueButton handleContinue={handleContinue}/>}
            </>
        )}
    </Box>
  )
}
