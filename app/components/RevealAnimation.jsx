"use client";
import React, { useEffect } from 'react';

function RevealAnimation() {
  useEffect(() => {
    const parent = document.getElementsByClassName('parent')[0]; // Get the first parent element

    function reveal() {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        } else {
          reveal.classList.remove('active');
        }
      });
    }

    if (parent) {
      parent.addEventListener('scroll', reveal);
    }

    // Call reveal on initial render to handle any elements already in view
    reveal();

    // Clean up the event listener when the component unmounts
    return () => {
      if (parent) {
        parent.removeEventListener('scroll', reveal);
      }
    };
  }, []);

  return null;
}

export default RevealAnimation;
