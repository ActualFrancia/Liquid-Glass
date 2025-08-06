import React from "react";
import { Filter } from "./Filter";
import "./glassdiv.css";

interface TintedGlassDivProps extends React.HTMLAttributes<HTMLDivElement> {
  tint?: string;
}

export const TintedGlassDiv: React.FC<TintedGlassDivProps> = ({
  children,
  style,
  className = "",
  tint,
  ...props
}) => {
  const combinedStyle = {
    ...style,
    ...(tint && { background: tint })
  };

  return (
    <>
      <Filter />
      <div
        className={`liquid-glass-tinted ${className}`}
        style={combinedStyle}
        {...props}
      >
        {children}
      </div>
    </>
  );
};