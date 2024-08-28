import { Button } from '@mui/material';
import React from 'react'

const sections = {
  Products: 'products',
  Features: 'features',
  Pricing: 'pricing',
};
export default function SectionsDispplay({page}) {
    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        } else {
        console.error(`Element with id "${sectionId}" not found.`);
        }
    };
    return (
        <Button onClick={() => handleScrollToSection(sections[page])}
                sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bolder', fontFamily: 'serif', ml: 5, fontSize: 20 }}>
                {page}
        </Button>
    )
}
