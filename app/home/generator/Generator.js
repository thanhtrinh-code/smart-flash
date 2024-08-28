"use client"
import { Box, Button, } from '@mui/material'
import {useState } from 'react'
import AddField from './AddField';
import GenerateField from './GenerateField';
import LoadingSpinner from './LoadingSpinner';
import {motion} from 'framer-motion';
import MainDisplay from './MainDisplay';
import toast from 'react-hot-toast';
import FinishesButtons from './FinishesButtons';


const dummy = [
  {
      "front": "What process do plants use to convert sunlight into energy?",
      "back": "Photosynthesis"
  },
  {
      "front": "What is the main pigment in plants that absorbs light for photosynthesis?",
      "back": "Chlorophyll"
  },
  {
      "front": "True or False: All plants produce flowers.",
      "back": "False. Only flowering plants (angiosperms) produce flowers."
  },
  {
      "front": "What part of the plant is responsible for absorbing water and nutrients from the soil?",
      "back": "Roots"
  },
  {
      "front": "Which part of the plant conducts water and nutrients from the roots to the leaves?",
      "back": "Xylem"
  },
  {
      "front": "Name the process by which plants release water vapor into the air through their leaves.",
      "back": "Transpiration"
  },
  {
      "front": "What are the reproductive structures of a flowering plant called?",
      "back": "Flowers"
  },
  {
      "front": "True or False: Mosses and ferns reproduce using seeds.",
      "back": "False. Mosses and ferns reproduce using spores."
  },
  {
      "front": "What is the term for non-flowering plants that produce seeds not enclosed in an ovary?",
      "back": "Gymnosperms"
  },
  {
      "front": "Which gas do plants take in during photosynthesis?",
      "back": "Carbon dioxide (CO2)"
  }
]

export default function Generator() {
  const [text, setText] = useState('');
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [topic, setTopic] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [index, setIndex] = useState(0);
  const [addFlashcard, setAddFlashcard] = useState([]);
  const [initial, setInitial] = useState(false); // change this to false
  function handleGenerate(){
    async function handleSubmit(){
      if(!text) {
        toast.error("Please Enter a Topic");
        return;
      }
      try {
        setInitial(false);
        setIsloading(true);
        const response = await fetch('api/generate', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: text
        })
        const data = await response.json();
        setIndex(0);
        setFlipped(false);
        setTopic('');
        setFlashcards(data);
    } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
        setInitial(true);
      }
    }
    handleSubmit();
  }
  function handleAdd(flashcard){
    setAddFlashcard((prevFlashcards) => [...prevFlashcards, flashcard]);
    toast.success('Flashcard has been added')
  }
  function handleDelete(flashcard){
    setAddFlashcard((prevFlashcards) => prevFlashcards.filter(card => card!== flashcard));
    toast.success('Flashcard has been removed');
  }
  function handleNext(){
    setIndex(index => (index + 1));
    setFlipped(false);
  }
  function handlePrev(){
    setIndex(index => index - 1);
    setFlipped(false);
  }
  return (
    <Box  width ='100vw' maxHeight='100vh' bgcolor='#e8e8e8'>
      <GenerateField input={text} handleGenerate={handleGenerate} setInput={setText} />
      <Box height="90vh" bgcolor='#e8e8e8' sx={{display:'flex', flexDirection: 'column', alignItems: 'center', mt: 5}}>
        { index === flashcards.length && <AddField topic={topic} addFlashcard={addFlashcard} setTopic={setTopic} initial={initial}/>}
        
        {isLoading ?  <LoadingSpinner isLoading={isLoading}/> : 
        index === flashcards.length ? 
        <FinishesButtons handlePrev={handlePrev} handleGenerate={handleGenerate} initial={initial} setInitial={setInitial}/>
        : <MainDisplay flashcards={flashcards} index={index} flipped={flipped}
        addFlashcard={addFlashcard} handleNext={handleNext} handlePrev={handlePrev} setFlipped={setFlipped}
        handleAdd={handleAdd} handleDelete={handleDelete}
        />
        }
      </Box>
    </Box>
  )
}
/* <motion.div key={index} 
          initial={{ opacity: 0, x: direction === 'next' ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === 'next' ? -100 : 100 }}
          transition={{ duration: 0.5 }}
]> */
