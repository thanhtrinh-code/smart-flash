import { Box, Button, Stack, TextField } from '@mui/material'
import { FaRegTrashAlt } from "react-icons/fa";

export default function CreateCollectionCard({cards, setCards, setValidToAdd}) {
    function handleInputChange(index, field, value){
        const newCards = [...cards];
        newCards[index][field] = value;
        setCards(newCards);
        if(cards[0]['front'] && cards[0]['back'] && cards[1]['front'] && cards[1]['back']){
          setValidToAdd(false);
        }
    }
    const handleAddCard = () => {
      if(cards[0]['front'] && cards[0]['back'] && cards[1]['front'] && cards[1]['back']){
        setValidToAdd(false);
      }
        setCards([...cards, { front: '', back: '' }]);
      };
    const handleDeleteCard = (index) => {
        const newCards = [...cards];
        newCards.splice(index, 1);
        setCards(newCards);
    };
  return (
    <Stack spacing={2} width='100%'>
          {cards.map((card, index) => (
          <Box width='100%' bgcolor='white' py={3} key={index} >
            <Box width='100%' display='flex' justifyContent='space-between' px={5} pb={2}>
                <h2>
                    {index + 1}
                </h2>
                <FaRegTrashAlt size={25} onClick={() => handleDeleteCard(index)} style={{cursor: 'pointer'}}/>
            </Box>
          <Box display="flex" gap={2} px={5}>
            <TextField
              label="Front"
              value={card.front}
              onChange={(e) => handleInputChange(index, 'front', e.target.value)}
              fullWidth
            />
            <TextField
              label="Back"
              value={card.back}
              onChange={(e) => handleInputChange(index, 'back', e.target.value)}
              fullWidth
            />
          </Box>
          </Box>
        ))}
        <Box width='100%' display='flex' justifyContent='center' alignContent='center' pb={3}>
            <Button variant='contained' onClick={handleAddCard}>+</Button>
        </Box>
      </Stack>
  )
}
