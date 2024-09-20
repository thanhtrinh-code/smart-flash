import { Box, CardActionArea, CardContent, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'

export default function Container({flashcards, timer, nextSetOf6, gameover, setCorrect}) {
    const [selectedCard, setSelectedCard] = useState([]);
    const [randomizedCards, setRandomizedCard] = useState(null);
    const [correctSets, setCorrectSets] = useState([]); 
    const handleSelectCard = (card) => {
        if(selectedCard.includes(card)){
            return;
        }
        setSelectedCard((prev) => [...prev, card]);
    }

    useEffect(() => {
        if(flashcards && !gameover){
            const shuffledFlashcards = [...flashcards]; // Make a copy to avoid mutation
            shuffle(shuffledFlashcards);
            setRandomizedCard(shuffledFlashcards);
        }
    }, [flashcards]);
    useEffect(() => {
        if(timer <= 0){
            const timer = setTimeout(() => {
              setSelectedCard([]);
              setCorrectSets([]);
              nextSetOf6();
            }, 1000);
            return () => clearTimeout(timer);
        }else{
            if(correctSets.length === randomizedCards?.length){
              setSelectedCard([]);
              setCorrectSets([]);
              setRandomizedCard(null);
              nextSetOf6();
            
            }
        }
    }, [timer, correctSets, randomizedCards, setSelectedCard, setCorrectSets])
    useEffect(() => {
        if(selectedCard.length === 2){
            if(selectedCard[0].position === selectedCard[1].position){
              setCorrect(prev => prev + 1);
              setCorrectSets((prev) => [...prev, selectedCard[0], selectedCard[1]]);
            }
            setTimeout(() => {
                setSelectedCard([]);
            }, 300);
        }
    }, [selectedCard, setCorrectSets, setSelectedCard]);
    function shuffle(arr){
        for(let i = arr.length - 1 ; i >= 0 ; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
  
  return (
    <Grid 
  container 
  spacing={3} 
  sx={{ 
    width: '100%', 
    height: '100%',
    px: { xs: 2, sm: 3, md: 4 }, 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap', 
  }}
>
  {randomizedCards?.map((card, index) => (
    <Grid 
      item 
      xs={6} 
      sm={4} 
      md={3}
      key={index} 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        p: 1 
      }}
    >
      <CardActionArea sx={{ width: '30rem', height: '13rem' }} onClick={() => handleSelectCard(card)} disabled={correctSets.includes(card)}>
        <CardContent
          sx={{
            bgcolor: correctSets.includes(card) ? 'white' : selectedCard.includes(card) ? 'rgba(0,0,0,0.5)' : '#e0deda',
            boxShadow: correctSets.includes(card) ? '' : '0px 4px 8px rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px',
            height: '100%',
            width: '100%',
            border: selectedCard.length === 2 ? selectedCard.includes(card) ? selectedCard[0].position === selectedCard[1].position ? '' : '2px solid red' : '' : ''
          }}
        >
          <Box sx={{ fontFamily: 'serif', fontSize: 20, color: correctSets.includes(card) ? 'white' : 'black' }}>
            {card.name}
          </Box>
        </CardContent>
      </CardActionArea>
    </Grid>
  ))}
</Grid>

  )
}
