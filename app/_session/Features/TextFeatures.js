import { Typography } from '@mui/material'


export default function TextFeatures() {
  return (
    <>
       <Typography fontFamily='Helvetica' fontWeight='bolder' fontSize={50} lineHeight={1.2}>
          Accessible <br/>Features
        </Typography>
        <Typography width='30vw' fontFamily='optima' fontWeight='light' fontSize={22} lineHeight={1.5}>
          We offer a variety of interesting features that you can help increase your
          productivity and make memorizing more enjoyable
        </Typography>
    </>
  )
}
