"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles/AppPreview.module.css";

// image
import appImage from "@/public/assets/img/App Image.svg";

const AppPreview = () => {
  const [bgGlow, setBgGlow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  // Set up scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const imageRect = imageRef.current.getBoundingClientRect();
        const imageTopVisible = imageRect.top < window.innerHeight * 0.1; // Adjust this threshold
        const imageBottomVisible = imageRect.bottom > 0; // Ensures the bottom of the image is still visible

        // Scrolling down
        if (window.scrollY > lastScrollY) {
          if (imageTopVisible && imageBottomVisible) {
            setBgGlow(true);
          }
        }
        // Scrolling up
        else {
          // Check if scrolling back above the viewport
          if (imageRect.top > window.innerHeight * 0.25) {
            setBgGlow(false);
          }
        }
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={styles.imageVisible} ref={imageRef}>
      <Image
        alt="app preview"
        src={appImage}
        id={styles.appImage}
        style={bgGlow ? { boxShadow: "0 0 80px rgba(255, 255, 255, 0.3)" } : {}}
      />
    </div>
  );
};

export default AppPreview;
