
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import { useEffect, useRef, useState } from 'react';
import { drawHand } from './utilities';

import * as fp from 'fingerpose';
import { FiveGesture, FourGesture, OneGesture, ThreeGesture, TwoGesture } from './Gestures';
import Direction from './Direction';

export default function MyCamera({options, handleOptionClick, handleContinue, option}) {
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
    // Ensure that number is valid and options are available before proceeding
    if (number !== null && options.length > 0) {
        const currentNumber = number;
        setNumber(null); // Reset the number to prevent re-triggering the effect
        if(currentNumber === 'five'){
          const timer = setTimeout(handleContinue, 500);
          return () => clearTimeout(timer);
        }else{
        switch (currentNumber) {
                case 'one':
                    handleOptionClick(options[0]);
                    break;
                case 'two':
                    handleOptionClick(options[1]);
                    break;
                case 'three':
                    handleOptionClick(options[2]);
                    break;
                case 'four':
                    handleOptionClick(options[3]);
                    break;
        }
      }
    }
}, [number, options]);



  if(loading){
    return (
      <div style={{width: '100%', height:'20rem', backgroundColor: 'inherit', display: 'flex', justifyContent: 'space-between'}}>
         <div style={{
    width: '15rem',
    height: '18rem',         
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
  <Direction/>
</div>
    );
  }
  return (
    <div style={{
      width: '100%', height:'20rem', backgroundColor: 'inherit', position: 'relative', display: 'flex', justifyContent: 'space-between'}}>
        <div style={{width: '15rem', height: '18rem', position: 'relative'}}>
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
        <Direction/>
    </div>
  )
}
