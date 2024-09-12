import { Box, MenuItem, Select, Typography} from '@mui/material'
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import PrevAndNext from './PrevAndNext';
export default function MainDisplay({
    flashcards, index, flipped, addFlashcard, handleNext, handlePrev, setFlipped, handleAdd, handleDelete
}) {
  
  function handleSpaceFlipped(e){
    if(e.keyCode === 32){
      setFlipped(flipped => !flipped);
    }
  }
  function handleClickFlip(){
    setFlipped(flipped => !flipped);
  }

  return (
    <> 
          <Box width='50vw' display='flex' justifyContent='flex-end' mb={1}>
          {addFlashcard.includes(flashcards[index]) ? 
            <MdDelete size={30} onClick={() => handleDelete(flashcards[index])} style={{cursor: 'pointer'}}/> 
            : <IoIosAddCircle size={30} onClick={() => handleAdd(flashcards[index])} style={{cursor: 'pointer'}}/>
          }
          </Box>
          <Box height='60%' width='50vw' onClick={handleClickFlip}
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
            borderRadius: 10
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
            backgroundColor: '#896f8c', // Add background color to the card sides
            borderRadius: 10, // Match the border radius of the parent Box
          },
          '& > div > div:nth-of-type(2)': {
            transform: 'rotateY(180deg)',
          },
        }}
        >
          <div>
            <div>
              <Typography variant='h6'>
                {flashcards[index]?.front}
              </Typography>
            </div>
            <div>
              <Typography variant='h6'>
              {flashcards[index]?.back}
              </Typography>
            </div>
          </div>
          </Box>
          <PrevAndNext index={index} handleNext={handleNext} handlePrev={handlePrev} flashcardLength={flashcards.length}/>
        </>
  )
}
