// ============================================================
// ✏️  EDIT THIS FILE TO CUSTOMISE YOUR PORTFOLIO
// ============================================================

import img29 from '../assets/29.jpg'
import img30 from '../assets/30.jpeg'
import img31 from '../assets/31.jpg'
import img32 from '../assets/32.jpg'
import img33 from '../assets/33.jpg'
import img34 from '../assets/34.jpg'
import img35 from '../assets/35.jpeg'
import img36 from '../assets/36.jpg'
import img37 from '../assets/37.jpg'
import img38 from '../assets/38.jpeg'
import img39 from '../assets/39.png'
import img40 from '../assets/40.jpeg'
import img41 from '../assets/41.jpeg'
import img42 from '../assets/42.jpeg'
import about from '../assets/about.jpeg'
import slide1 from '../assets/slide1.jpeg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpeg'




export const CONFIG = {
  photographer: "CAR X CAMERA",
  tagline: "MOMENTS DON'T WAIT.",
  instagram: "_capital_letter_", // 
  bio: `Obsessed with the unrepeatable. Shooting since 2016 across 30 countries — conflict zones, fashion weeks, disappearing cultures. The camera is a weapon. Every frame is a consequence.`,
  stats: [
    { value: "9+",   label: "YRS"    },
    { value: "400+", label: "SHOOTS" },
    { value: "30",   label: "CNTRS"  },
    { value: "12M+", label: "REACH"  },
  ],
};

// Replace src with your own image URLs or local paths like: "/images/photo1.jpg"
export const PHOTOS = [
  { id: 1,  src: img29, category: "STREET",    title: "SIGNAL 01", year: "2024" },
  { id: 2,  src: img30, category: "PORTRAIT",  title: "FACE 12",   year: "2024" },
  { id: 3,  src: img31, category: "LANDSCAPE", title: "ALTITUDE",  year: "2023" },
  { id: 4,  src: img32, category: "NIGHT",     title: "COSMOS II", year: "2023" },
  { id: 5,  src: img33, category: "LANDSCAPE", title: "MIRROR",    year: "2023" },
  { id: 6,  src: img35, category: "PORTRAIT",  title: "SUBJECT X", year: "2022" },
  { id: 7,  src: img34, category: "AERIAL",    title: "TERRAIN",   year: "2022" },
  { id: 8,  src: img36, category: "STREET",    title: "VAPOR",     year: "2022" },
  { id: 9,  src: img37, category: "LANDSCAPE", title: "FOG CUT",   year: "2021" },
  { id: 10, src: img38, category: "NATURE",    title: "BLOOM",     year: "2021" },
];
// /  Replace src with your video file paths, poster with thumbnail image paths
export const VIDEOS = [
  {
    id: 1,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85",
    title: "INTO THE WILD",
    year: "2024",
    duration: "2:34",
    desc: "A 4-day trek through Northern Himalayas — shot on 16mm and digital.",
  },
  {
    id: 2,
    src: "https://www.w3schools.com/html/movie.mp4",
    poster: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=900&q=85",
    title: "CITY AFTER MIDNIGHT",
    year: "2023",
    duration: "1:47",
    desc: "Street documentary. Mumbai's underbelly when the city stops performing.",
  },
];

export const CATEGORIES = ["ALL", "STREET", "PORTRAIT", "LANDSCAPE", "NIGHT", "AERIAL", "NATURE"];
export const GEAR = ["SONY A7IV", "LEICA Q3", "16MM FILM", "DJI AIR 3", "50MM F/1.2", "ZEISS 35MM"];
