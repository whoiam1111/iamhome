"use client";
import { useEffect, useRef, useState } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  isMove?: boolean;
}

export default function FadeInSection({
  children,
  isMove = true,
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // 한 번만 실행
          }
        });
      },
      { threshold: 0.2 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`w-full transition-all duration-1000 ease-out transform
        ${
          isVisible
            ? `opacity-100 ${isMove ? "translate-y-0" : ""}`
            : `opacity-0 ${isMove ? "translate-y-10" : ""}`
        }
      `}
    >
      {children}
    </div>
  );
}
