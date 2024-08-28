"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import getStripe from "../utils/get-stripe";
import { useSearchParams } from "next/navigation";

import React from 'react'
import { Box, Container, Typography } from "@mui/material";

export default function Page() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const session_id = searchParams.get('session_id');
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchCheckoutSession(){
            if(!session_id) return;
            try {
                const res = await fetch(`/api/checkout_session?session_id=${session_id}`);
                const sessionData = await res.json();
                if(res.ok){
                    setSession(sessionData);
                }else{
                    setError(sessionData.error);
                }
            } catch (error) {
                setError('An error occurred');
            } finally{
                setLoading(false);
            }
        }
        fetchCheckoutSession();
    }, [session_id]);
    if(loading){
        return <p>Loading...</p>;
    }
    if(error){
        return <p>Error: {error.message}</p>;
    }
  return (
    <Container maxWidth="100vw" sx={{textAlign:'center', mt: 4}}>
      {
        session.payment_status === 'paid' ? (
            <>
                <Typography variant="h4">
                    Thank you for purchasing
                </Typography>
                <Box sx={{mt: 22}}>
                    <Typography variant="h6">
                        Session ID: {session_id}
                    </Typography>
                    <Typography variant="body1">
                        We have received your payment. You can now access your flashcards from the link below.
                    </Typography>
                </Box>
            </>
        ) : (
            <>
                <Typography variant="h4">
                    We have not received your payment yet. Please try again later.
                </Typography>
                <Box sx={{mt: 22}}>
                    <Typography variant="h6">
                        Session ID: {session_id}
                    </Typography>
                    <Typography variant="body1">
                        We have not received your payment.
                    </Typography>
                </Box>
            </>
        )
      }
    </Container>
  )
}
