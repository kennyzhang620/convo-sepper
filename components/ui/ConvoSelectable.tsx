import Link from "next/link";
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CSSProperties } from "react";
import { Inter } from "next/font/google";
import React from "react";
import { ConvoData, colours } from "./ConvoStructs";

interface ButtonProps {
  label: string;
  className?: string;
  href?: string;
  paused?: boolean
  width?: string;
  height?: number;
  style?: CSSProperties;
  ConvoD: ConvoData,
  onClick?: () => void;
}

const interF = Inter({subsets:['latin']})

export function ConvoButton({className, href, width, paused, style, ConvoD, onClick }: ButtonProps) {
  var [showTrans, showOnClick] = React.useState(false);
  return (
      <button className={className} onClick={onClick ? onClick : () => showOnClick(!showTrans)} style={style ? style : {padding:"1em"}}>
        <div style={{backgroundColor: paused ? "#FF9000": "#EEEDED", color: "#4D4D4D", display:"flex", filter: "drop-shadow(0 0 0.20rem black)"}}>
          <h1 className={"text-base"} style={{padding:"1rem", width:width, textAlign: "left"}}>{ConvoD.label}</h1>
          <div style={{backgroundColor:colours[ConvoD.id % colours.length], width: "40px"}}></div>
        </div>
        {showTrans ?
        <div className="text_content">
        <div style={{backgroundColor: "#EEEDED", color: "#4D4D4D", filter: "drop-shadow(0 0 0.20rem black)", textAlign: "left", padding: "1em"}}>    
                  <h1>Transcript</h1>
                  <p style={{fontFamily: interF.className}}>{ConvoD.transcript.trim().split("\n")}</p>
                      <h1>Tips</h1>
                      <p style={{fontFamily: interF.className}}>{ConvoD.tips.trim().split("\n")}</p>
                  </div>
              </div>
         : <div></div> }
      </button>
  );
} 