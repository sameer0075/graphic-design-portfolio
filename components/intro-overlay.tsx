"use client";

import { useSearchParams } from "next/navigation";
import { useBallAnimation } from "../utils/hooks/use-ball-animation";
import { Suspense, useState } from "react";

import styles from "../styles/intro-overlay.module.scss";

function IntroOverlayComponent() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const searchParams = useSearchParams();
  const back = searchParams?.get("back");

  useBallAnimation({
    enabled: back !== "true",
    onComplete: () => {
      setAnimationComplete(true);
    },
  });

  if (animationComplete) {
    return null;
  }

  return (
    <div className={styles.introOverlay}>
      <div id="ball" className={styles.ball}></div>
    </div>
  );
}

export default function IntroOverlay() {
  return (
    <Suspense>
      <IntroOverlayComponent />
    </Suspense>
  )
} 
