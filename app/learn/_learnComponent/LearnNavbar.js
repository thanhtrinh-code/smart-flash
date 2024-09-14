"use client"
import { MdKeyboardArrowDown, MdClose } from 'react-icons/md';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LearnNavbar({search}) {
    const router = useRouter();


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <Box
            width="100%"
            height="4rem"
            bgcolor="teal"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            position='relative'
            p={2}
          >
            <Box>
              <Button
                variant="contained"
                onClick={handleClick}
                endIcon={<MdKeyboardArrowDown />}
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  padding: "0.5rem 1rem",
                  fontSize: "1rem",
                }}
              >
                Learn
              </Button>
              <Menu elevation={0} anchorEl={anchorEl} open={open} onClose={handleClose}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}>
                <MenuItem onClick={() => router.push(`match?id=${search}`)}>
                    Match
                </MenuItem>
                <MenuItem onClick={() => router.push(`quiz?id=${search}`)}>
                    Quiz
                </MenuItem>
              </Menu>
            </Box>
          
            <Typography
              variant="h5"
              style={{ color: "#fff", fontWeight: "bold", marginRight: 90}}
            >
              {search.charAt(0).toUpperCase() + search.slice(1)}
            </Typography>
          
            <Box
              p={1}
              border="1px solid black"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="50%"
              style={{
                cursor: "pointer",
                backgroundColor: "#fff",
              }}
            >
              <MdClose size={20} onClick={() => router.push(`flashcard?id=${search}`)}/>
            </Box>
          </Box>
  )
}
