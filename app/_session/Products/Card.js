import { Box, Typography } from "@mui/material"


export default function Card({card }) {
  return (
    <Box sx={{
        perspective: '1000px',
        '& > div': {
            transition: 'transform 0.6s',
            transformStyle: 'preserve-3d',
            bgcolor: 'white',
            position: 'relative',
            width: '100%',
            height: '210px',
            borderRadius: '25px',
            boxShadow: '0 4px 8px 0 green',
            '&:hover': {
                transform: 'rotateY(180deg)',
            },

        },
        '& > div > div': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 3,
            boxSizing: 'border-box',
        },
        '& > div > div:nth-of-type(2)': {
            transform: 'rotateY(180deg)',
        }
    }}>
        <div>
            <div>
                <Typography fontFamily='revert' fontSize={{sm: 20, md: 17, lg: 20}}>
                    {card.front}
                </Typography>
            </div>
            <div>
                <Typography>
                    {card.back}
                </Typography>
            </div>
        </div>
    </Box>
  )
}
