import React from "react";

export function SplitText(text: string) {
    return text.split("").map((char, index) => (
      <span key={index} className="char">{char}</span>
));}