import { Box, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { motion } from 'framer-motion';
import { useState } from "react";
import Card from "./Card";




export default function FlashcardsAnimation({data}) {
  return (
    <Box width='55vw' alignContent='center' pr={2}> 
        <Grid container spacing={{xs: 2, md: 1}} columns={{ xs: 4, sm: 8, md: 12 }}>
            {data.map((card, index) => (
                <Grid item xs={6} md={4} key={index}>
                    <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 2 + index * 0.3 }}
                    >
                    <CardContent>
                       <Card card={card}/> 
                    </CardContent>
                    </motion.div>
                </Grid>
            ))}
        </Grid>
    </Box>
  )
}
