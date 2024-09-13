"use client"
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { StyledSpinner } from '../flashcard/page';


export default function Page() {
    const searchParams = useSearchParams();
    const search = searchParams.get('id');
    const [flashcards, setFlashcards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchFlashcards(){
          try {
            setIsLoading(false);
            const flashcard = localStorage.getItem(`flashcards_${search}`);
            if(flashcard){
                setFlashcards(JSON.parse(flashcard));
            }
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        }
        fetchFlashcards();
    }, [setIsLoading, setFlashcards]);
    console.log(flashcards);
  return (
    <div>
      Hello World
    </div>
  )
}

// <Box sx={StyledSpinner}><LoadingSpinner isLoading={isLoading}/></Box> 