"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

const Lenis = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
};

export default Lenis;
