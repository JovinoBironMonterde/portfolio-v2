"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import "../../assets/css/svg.css";

const Page = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Set a delay before showing the image (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 500); // Delay in milliseconds (2000ms = 2 seconds)

    // Cleanup the timer if the component unmounts before the delay completes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showImage ? (
        <Image src="/file/Contactsvg.svg" width={400} height={400} alt="Description of image" />
      ) : (
        <p></p> // Optional: You can replace this with any placeholder
      )}
    </div>
  );
};

export default Page;
