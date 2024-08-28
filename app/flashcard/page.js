"use client"

import { db } from "@/firebase";
import { useUser } from "@clerk/nextjs"
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const {user} = useUser();
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get('id');
    const [flashcards, setFlashcards] = useState([]);
    useEffect(() => {
        if(!user || !search){
            return;
        }
        async function getFlashcard(){
            const docRef = doc(db, 'users', user.id, 'collection', search); // Use doc() to get a specific document
            const docs = await getDoc(docRef); // Fetch the document
            setFlashcards(docs.data()['flashcards']);
        }
        getFlashcard();
    },[user, search, router]);
  return (
    <div>
      
    </div>
  )
}
