"use client"
import { useInView } from "react-intersection-observer";
import { useState } from "react"

export default function useInViewPermanent() {
    const [hasAppeard, setHasAppeard] = useState(false);
    const { ref, inView } = useInView({ threshold: 0 });
    if (inView && !hasAppeard) setHasAppeard(true);
  
    return { ref, inView: hasAppeard };
}