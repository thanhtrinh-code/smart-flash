import { Box, Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation';
import FlashcardsAnimation from './Products/FlashcardsAnimation';
import TextProducts from './Products/TextProducts';
import { useEffect, useState } from 'react';

const plants = [
  {
      front: 'Photosynthesis',
      back: 'The process by which green plants use sunlight to synthesize foods from carbon dioxide and water.',
  },
  {
      front: 'Chlorophyll',
      back: 'The green pigment found in the chloroplasts of plants, essential for photosynthesis.',
  },
  {
      front: 'Stomata',
      back: 'Tiny openings on the surface of leaves that allow for gas exchange (CO2 in, O2 out).',
  },
  {
      front: 'Xylem',
      back: 'The tissue in plants that transports water and nutrients from the roots to the leaves.',
  },
  {
      front: 'Phloem',
      back: 'The tissue in plants that transports the products of photosynthesis (sugars) from the leaves to other parts of the plant.',
  },
  {
      front: 'Germination',
      back: 'The process by which a seed develops into a new plant.',
  }
];
const planets = [
  {
      front: 'Mercury',
      back: 'The closest planet to the Sun. It has the shortest orbit of all the planets and a very thin atmosphere.',
  },
  {
      front: 'Venus',
      back: 'The second planet from the Sun, often called Earth\'s twin due to its similar size, but with a thick, toxic atmosphere and extreme temperatures.',
  },
  {
      front: 'Earth',
      back: 'The third planet from the Sun, known for its liquid water, diverse life forms, and the only planet in our solar system where life is known to exist.',
  },
  {
      front: 'Mars',
      back: 'The fourth planet from the Sun, known as the Red Planet due to its reddish appearance from iron oxide. It has the largest volcano and canyon in the solar system.',
  },
  {
      front: 'Jupiter',
      back: 'The largest planet in our solar system. It is known for its Great Red Spot, a massive storm, and its many moons, including Ganymede, the largest moon.',
  },
  {
      front: 'Saturn',
      back: 'Famous for its extensive ring system, Saturn is the sixth planet from the Sun and has a large number of moons.',
  },
];
const animals = [
  {
      front: 'What is the largest land animal?',
      back: 'The African elephant is the largest land animal, known for its large ears and trunk.',
  },
  {
      front: 'Which animal is known for its ability to change color?',
      back: 'The chameleon is known for its ability to change color to blend in with its surroundings.',
  },
  {
      front: 'What is the fastest land animal?',
      back: 'The cheetah is the fastest land animal, capable of reaching speeds up to 75 mph (120 km/h).',
  },
  {
      front: 'Which animal has the longest lifespan?',
      back: 'The Galápagos tortoise can live over 100 years, making it one of the longest-lived animals.',
  },
  {
      front: 'Which mammal is known for its ability to fly?',
      back: 'The bat is the only mammal capable of true flight, using its wings to navigate and hunt.',
  },
  {
      front: 'What is the largest marine animal?',
      back: 'The blue whale is the largest marine animal, and also the largest animal ever known to have existed.',
  },
];


export default function Products() {
  const second = 2 * 1000;
  return (
    <Box id="products" height='100vh' width='100vw' bgcolor='#e8e8e8' overflow='auto' display='flex'>
        <Box width='45vw' sx={{alignContent:'center', pl: 7}}>
          <TextProducts/>
        </Box>
        <FlashcardsAnimation data={plants}/>
    </Box>
  );
}