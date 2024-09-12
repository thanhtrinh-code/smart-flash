"use client"
import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import AddField from './AddField';

export default function FinishesButtons({
    handlePrev,
    handleGenerate,
    addFlashcard,
    setFeature
}) {
  const [addCards, setAddCards] = useState(addFlashcard);
  const overflowCardsRef = useRef(null);
  function scrollToBottom(){
    overflowCardsRef.current?.scrollIntoView({behavior: 'smooth'}); 
  }
  function handleInputChange(index, field, value){
    const newCards = [...addCards];
    newCards[index][field] = value;
    setAddCards(newCards);
  }
  function handleAddMoreCards(){
    setAddCards([...addCards, { front: '', back: '' }]);
  }
  function handleDeleteCard(index){
    setAddCards((prevCards) => prevCards.filter((_, i) => i!== index));
  }
  useEffect(() => {
    scrollToBottom();
  }, [addCards]);
  
  return (
    <>
    {addCards.length !== 0 ? (
    <>
    <AddField addFlashcard={addCards} setFeature={setFeature}/>
    <Box height='100%' width='100%' pt={3}>
          <Stack spacing={2} width='100%' alignItems='center'>
            {addCards.map((card, index) => (
              <Box width='80%' bgcolor='white' key={index} border='1px solid white' borderRadius={3}>
                <Box width='100%' display='flex' px={5} py={2} borderBottom='0.5px solid black' justifyContent='space-between'>
                  <h2>
                    {index + 1}
                  </h2>
                  <FaRegTrashAlt size={25} onClick={() => handleDeleteCard(index)} style={{cursor: 'pointer'}}/>
                </Box>
                <Box display='flex' gap={2} px={5} py={2.5}>
                  <TextField
                  label='Front'
                  value={card.front}
                  onChange={(e) => handleInputChange(index, 'front', e.target.value)}
                  fullWidth
                  multiline
                  />
                  <TextField
                  value={card.back}
                  label='Back'
                  onChange={(e) => handleInputChange(index, 'back', e.target.value)}
                  fullWidth
                  multiline
                  />
                </Box>
              </Box>
            ))}
            <div ref={overflowCardsRef}/>
              <Box width='100%' display='flex' justifyContent='center' alignContent='center' pb={3} gap={3}>
                <Button
              variant='outlined'
              onClick={handlePrev}
              sx={{
              color: '#424242', // Dark grey text color
              borderColor: '#424242', // Dark grey border
              '&:hover': {
              backgroundColor: '#bdbdbd', // Medium grey on hover
              borderColor: '#424242', },
              borderRadius: 8,
              px: 2,
              py: 1,
              }}>
              Back
                </Button>
                <Button variant='contained' onClick={handleAddMoreCards}>+</Button>
              </Box>
          </Stack>
  
    </Box>
    </>
    ) : (
      <Box
  sx={{
    fontSize: '2rem', // Adjust font size as needed
    fontWeight: '500', // Semi-bold text
    color: '#424242', // Dark grey color
    py: 10, // Space around the text
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 4

  }}>
    <p>You didn't add any cards</p>
    <Button
              variant='outlined'
              onClick={handlePrev}
              sx={{
              color: '#424242', // Dark grey text color
              borderColor: '#424242', // Dark grey border
              '&:hover': {
              backgroundColor: '#bdbdbd', // Medium grey on hover
              borderColor: '#424242', },
              borderRadius: 8,
              px: 2,
              py: 1,
              }}>
              Back
              </Button>
    </Box>
    )}
    </>
  )
}

