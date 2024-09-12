"use client"
import { AiFillOpenAI } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";
import { Box, Button, MenuItem, Select} from '@mui/material'
import { useRouter } from "next/navigation";

export default function Provider({value, setValue}) {
    const router = useRouter();
  return (
    <Box
          width="100%"
          display="flex"
          flexDirection='column'
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        displayEmpty
        sx={{
          minWidth: 220,
          borderRadius: '8px',
          backgroundColor: '#fff',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
            padding: '10px 14px',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #ddd',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#b0b0b0',
          },
          '& .MuiSvgIcon-root': {
            color: '#555',
          },
        }}
      >
        <MenuItem value="openai" sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <AiFillOpenAI />
          OpenAI
        </MenuItem>
        <MenuItem value="google" sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FcGoogle />
          Google Gemini
        </MenuItem>
        <MenuItem value="meta" sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaMeta />
          Meta Llama
        </MenuItem>
      </Select>
      <Button variant="contained" onClick={() => router.push('create-collection')}>Create Collection</Button>
        </Box>
  )
}
