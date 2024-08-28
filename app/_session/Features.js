import { Box} from "@mui/material";
import { useState } from "react";
import TabsButton from "./Features/TabsButton";
import TextFeatures from "./Features/TextFeatures";
import { motion } from 'framer-motion';
import Images from "./Features/Images";
const StyledSignUp = {
  width: 130,
  height: 43,
  borderRadius: 30,
  fontSize: 18,
  fontWeight: 'light',
  color: 'black',
  cursor: 'pointer',
  boxShadow: '5px 8px 0 0 black',
  backgroundColor: 'white',
  textTransform: 'none',
  border: '1px solid black',
  '&:hover': {
      backgroundColor: '#007070',
      boxShadow: '5px 8px 0 0 black'
  },
}
export default function Features() {
  const [feature, setFeature] = useState('generator');
  function handleChange(feature){
    setFeature(feature);
  }
  return (
    <Box id='features' height='100vh' width='100vw' bgcolor='#181e32' overflow='auto'>
      <Box color='white' display='flex' justifyContent='space-around' pt={3}>
        <TextFeatures/>
      </Box>
      <Box display='flex' justifyContent='center' gap={0.2} pt={1.5}>
        <TabsButton feature={feature} handleChange={handleChange}/>
      </Box>
      <Box align='center'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity:  1 }}
          transition={{ duration: 1.5 }}
        >
          <Images feature={feature}/>
        </motion.div>
      </Box>
    </Box>
  )
}
