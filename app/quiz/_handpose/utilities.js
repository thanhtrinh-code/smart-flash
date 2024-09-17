

export function drawHand(predictions, ctx) {
    if (predictions.length > 0) {
      //console.log(predictions);
      predictions.forEach((prediction) => {
        const landmarks = prediction.landmarks;
        for (let i = 0; i < landmarks.length; i++) {
          const x = landmarks[i][0];
          const y = landmarks[i][1];
  
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, 2 * Math.PI); // Full circle (not 3*Pi)
          ctx.fillStyle = 'indigo';
          ctx.fill();
          ctx.closePath(); // Close the path after filling
        }
      });
    }
  }
  