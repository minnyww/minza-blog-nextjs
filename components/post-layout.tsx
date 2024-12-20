"use client";

import { useTheme } from "next-themes";
import Particles from "./ui/particles";
import { useEffect, useState } from "react";

const PostLayout = ({ children }: any) => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div>
      <Particles
        className="absolute inset-0 w-full"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      {children}
    </div>
  );
};

export default PostLayout;
