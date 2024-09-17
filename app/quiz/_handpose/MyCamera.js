
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import { useEffect, useRef, useState } from 'react';
import { drawHand } from './utilities';

import * as fp from 'fingerpose';
import { FiveGesture, FourGesture, OneGesture, ThreeGesture, TwoGesture } from './Gestures';

export default function MyCamera() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [number, setNumber] = useState(null);
    const [loading, setLoading] = useState(true);


  async function runHandPose(){
    try {
      setLoading(true);
      const net = await handpose.load();
      setLoading(false);
      setInterval(() => {
        detect(net);
      }, 3000);
    } catch (error) {
      console.error(error);
    }

  }
  async function detect(net){
    if(typeof webcamRef.current !== 'undefined' && webcamRef.current !== null && webcamRef.current.video.readyState === 4){
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hand = await net.estimateHands(video);

      
      if(hand.length > 0){

        const knownGesture = [OneGesture, TwoGesture, ThreeGesture, FourGesture, FiveGesture];
        const GE = new fp.GestureEstimator(knownGesture);
      
        // Estimate the gesture using the first detected hand's landmarks
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if(gesture.gestures !== undefined && gesture.gestures.length > 0){
          const confidence = gesture.gestures.map(
            (prediction) => prediction.score
          );
          
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          setNumber(gesture.gestures[maxConfidence].name);
        }
      }
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }

  }
  useEffect(() => {
    runHandPose();
  }, []);
  useEffect(() => {
    if (number !== null) {
      console.log(`Detected Gesture: ${number}`);
    }
  }, [number]);

  if(loading){
    return (
      <div style={{width: '100%', height:'15rem', backgroundColor: 'inherit'}}>
         <div style={{
    width: '13rem',
    height: '100%',         
    backgroundColor: 'gray',
    borderRadius: '8px',    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',    
    color: 'white',         
    padding: '1rem',       
    textAlign: 'center',   
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
  }}>
    <p>
      Currently preparing for finger detection. Please wait a minute.
    </p>
  </div>
</div>
    );
  }
  return (
    <div style={{
      width: '100%', height:'15rem', backgroundColor: 'inherit', position: 'relative'}}>
        <div style={{width: '13rem', height: '100%', position: 'relative'}}>
          <Webcam
            ref={webcamRef}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'contain',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            objectFit:'contain',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
          />
        </div>
    </div>
  )
}
