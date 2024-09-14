"use client"
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { StyledSpinner } from '../flashcard/page';
import { Box, Button, LinearProgress, Typography } from '@mui/material';
import LoadingSpinner from '../home/generator/LoadingSpinner';
import LearnNavbar from './_learnComponent/LearnNavbar';
import AnswerInput from './_learnComponent/AnswerInput';
import LearnButton from './_learnComponent/LearnButton';
import LearnHeader from './_learnComponent/LearnHeader';
import ContinueButton from './_learnComponent/ContinueButton';
import CorrectAnswer from './_learnComponent/CorrectAnswer';
import NoInput from './_learnComponent/NoInput';
import InputButIncorrect from './_learnComponent/InputButIncorrect';
import Correct from './_learnComponent/Correct';


export default function Page() {
    const searchParams = useSearchParams();
    const search = searchParams.get('id');

    
    const [flashcards, setFlashcards] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [index, setIndex] = useState(0);
    const [input, setInput] = useState('');
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(false);
    const [dontKnow, setDontKnow] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);

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
                }
            }
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        }
        fetchFlashcards();
    }, [setIsLoading, setFlashcards, flashcards]);
    useEffect(() => {
        function handleListen(e){
            handleContinue();
        }
        if(dontKnow || incorrect){
            window.addEventListener('keydown', handleListen);
            return () => window.removeEventListener('keydown', handleListen);
        }
    }, [dontKnow, incorrect]);
    function shuffle(arr){
        for(let i = arr.length - 1 ; i >= 0 ; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        if(input.trim().toLowerCase() === flashcards[index].back.trim().toLowerCase()){
            setCorrect(correct => correct + 1);
            setTimeout(() => {
                handleContinue();
            }, 1000);
            setShowAnswer(true);
        } else {
            setIncorrect(true);
        }
    }
    function handleContinue(){
        setIndex(index => index + 1);
        setDontKnow(false);
        setInput('');
        setIncorrect(false);
        setShowAnswer(false);
    }
    function handleReset(e){
        setDontKnow(false);
        setInput('');
        setIncorrect(false);
        setShowAnswer(false);
        setIndex(0);
        setCorrect(0);
        const flashcard = shuffle(flashcards);
        setDontKnow(flashcard);
    }
  return (
    <Box width='100vw' height='100vh' bgcolor='white' position='relative'>
        {isLoading && <Box sx={StyledSpinner}><LoadingSpinner isLoading={isLoading}/></Box>}
        {flashcards && index + 1 === flashcards.length && (
            <>
            <LearnNavbar search={search}/>
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
      <Button type='submit' variant="contained" color="success" onClick={handleReset}>
        Restart 🚀
      </Button>
    </Box>
        </Box>
        </Box>
        </>
        )}
        {flashcards && index + 1 < flashcards.length && (
            <>
                <LearnNavbar search={search}/>
                <Box sx={{ width: '100%', display:'flex', justifyContent: 'center', mt: 2 }}>
                    <Box sx={{width: '80%', textAlign: 'center'}}>
                    <LinearProgress variant="determinate" value={(index + 1) / flashcards?.length * 100} sx={{ height: '1.5rem', borderRadius: '0.5rem',
                                    backgroundColor: '#e0e0e0', '& .MuiLinearProgress-bar': { backgroundColor: 'black', },}} />
                    <Typography sx={{ mt: '0.5rem', fontSize: 23, fontFamily: 'serif', fontWeight: 'bolder' }}>
                        Question: {index + 1} / {flashcards?.length}
                    </Typography>
                    </Box>
                </Box>
                <Box width='100%' height='70vh' bgcolor='inherit' position='relative' display='flex' justifyContent='center' pb={10}>
                    <Box width='60%' height='32rem' bgcolor='#e0deda' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.8)' // Darker shadow for more depth
                            top='3rem' position='absolute' display='flex' flexDirection='column' p={2} // Padding for internal spacing 
                            justifyContent='space-around' pl={3} borderRadius='8px'>
                        <LearnHeader question={flashcards[index].front}/>
                        {dontKnow ? <NoInput/> : incorrect  ? <InputButIncorrect/> : !showAnswer ? <AnswerInput input={input} setInput={setInput}/> :
                        <Correct answer={flashcards[index].back}/>
                        }

                        {dontKnow || incorrect ?  <CorrectAnswer answer={flashcards[index]?.back}/> : 
                            <LearnButton setDontKnow={setDontKnow} handleSubmit={handleSubmit}/>
                        }
                </Box>
                </Box>
                {(dontKnow || incorrect) && <ContinueButton handleContinue={handleContinue} />}
                

            </>
        )}
    </Box>
  )
}

// <Box sx={StyledSpinner}><LoadingSpinner isLoading={isLoading}/></Box> 