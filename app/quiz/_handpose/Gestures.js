import { GestureDescription, Finger, FingerCurl } from 'fingerpose';


const OneGesture = new GestureDescription('one');
const TwoGesture = new GestureDescription('two');
const ThreeGesture = new GestureDescription('three');
const FourGesture = new GestureDescription('four');
const FiveGesture = new GestureDescription('five');

// One
// --------------
OneGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
// Other fingers: full curl
for (let finger of [Finger.Thumb, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  OneGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

// Two
// --------------
    // index and middle finger: stretched out
TwoGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
TwoGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
    // ring: curled
TwoGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
TwoGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);
    // pinky: curled
TwoGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
TwoGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);


// Three
// ---------------
// Index, Middle, and Ring fingers: no curl (stretched)
ThreeGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ThreeGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
ThreeGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
// Pinky and Thumb: full curl
ThreeGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ThreeGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);


// Four
// ----------------
// Index, Middle, Ring, and Pinky fingers: no curl (stretched)
FourGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
FourGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
FourGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
FourGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
// Thumb: full curl
FourGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);


// Five - All finger should straight, no finger curl
// ---------------
for(let finger of Finger.all){
    FiveGesture.addCurl(finger, FingerCurl.NoCurl, 1);
}

export { OneGesture, TwoGesture, ThreeGesture, FourGesture, FiveGesture };