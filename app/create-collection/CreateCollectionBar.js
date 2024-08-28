import { SignedIn, UserButton } from '@clerk/nextjs'
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function CreateCollectionBar() {
    const router = useRouter();
  return (
    <Box width='100vw' height='10vh' display='flex' justifyContent='space-between' pr={4}>
      <a style={{textDecoration: 'none', cursor: 'pointer'}} onClick={() => router.back()}>
        <Box sx={{ display: 'flex', pt: 0.9 }}>
            <Image width={70}  height={70} src="/logo.png"
            alt="SmartFlash Logo" style={{ borderRadius: '50%' }} />
            <Typography variant="h6"
                sx={{ ml: 0, pt: 1.5,fontSize: 24,fontWeight: 'bold', color: 'black' }} >
                    SmartFlash
            </Typography>
        </Box>
        </a>
        <SignedIn>
                <UserButton />
            </SignedIn>
      </Box>
  )
}
