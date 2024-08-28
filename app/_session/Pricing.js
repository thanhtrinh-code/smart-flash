import { Box } from "@mui/material";
import PricingText from "./Pricing/PricingText";
import FreeList from "./Pricing/FreeList";
import FreeDisplay from "./Pricing/FreeDisplay";
import ProDisplay from "./Pricing/ProDisplay";
import ProList from "./Pricing/ProList";
import { motion } from 'framer-motion';


export default function Pricing() {
  return (
    <Box id='pricing' height='100vh' width='100vw' bgcolor='#b184e7' overflow='auto'>
      <Box align='center' pt={10}>
        <PricingText/>
      </Box>
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity:  1 }}
          transition={{ duration: 1.5 }}
        >
      <Box display='flex' justifyContent='space-evenly'>
        <Box width='22vw' height='65vh' bgcolor='white' borderRadius={8}>
          <FreeDisplay/>
          <FreeList/>
        </Box>
        <Box width='22vw' height='65vh' bgcolor='white' borderRadius={8}>
          <ProDisplay/>
          <ProList/>
        </Box>
      </Box>
      </motion.div>
    </Box>
  )
}
