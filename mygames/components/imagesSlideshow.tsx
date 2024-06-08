'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

import sudoku1 from '@/assets/sudoku1.jpg';
import sudoku2 from '@/assets/sudoku2.jpg';
import sudoku3 from '@/assets/sudoku3.webp';
import sudoku4 from '@/assets/sudoku4.jpg';
import sudoku5 from '@/assets/sudoku5.png';
import classes from './imageSlideshow.module.css';

const images = [
  { image: sudoku1, alt: 'sudoku 1' },
  { image: sudoku2, alt: 'sudoku 2' },
  { image: sudoku3, alt: 'sudoku 3' },
  { image: sudoku4, alt: 'sudoku 4' },
  { image: sudoku5, alt: 'sudoku 5' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000); // Change the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={classes.slideshow}
      // className="relative w-full h-full rounded-lg overflow-hidden shadow-md"
      >
        {images.map((image, index) => (
          <div
            key={index}
          // className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${index === currentImageIndex ? 'opacity-100 scale-100 translate-x-0 rotate-0' : 'opacity-0 scale-110 -translate-x-4'}`}
          // style={{ transform: index === currentImageIndex ? 'rotate(0deg)' : 'rotate(5deg)' }}
          >
            <Image
              src={image.image}
              alt={image.alt}
              // layout="fill"
              // objectFit="cover"
              className={index === currentImageIndex ? classes.active : ''}
            />
          </div>
        ))}
      </div>
    </>
  );
}
