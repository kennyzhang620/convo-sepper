import Link from "next/link";
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CSSProperties } from "react";
import { MapNode } from "./MapNode";
import { ConvoPoints, colours } from "./ConvoStructs";

interface TableViewProps {
  label: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  style?: CSSProperties;
  backgroundColour: string;
  onClick?: () => void;
  ConvoPts: ConvoPoints[];
  scale?: number;
  externColour?: Map<number, string>;
}

export function MapView({backgroundColour, width, height, ConvoPts, scale, externColour}: TableViewProps) {
  
  return (
    <div style={{backgroundColor: backgroundColour, width: width ? width : "100vw", height: height ? height: "50vh", position:"relative"}}>
      {ConvoPts.map(pts => 
        <MapNode 
          NodeId={pts.id} 
          heading={pts.theta} 
          x={pts.px} 
          y={pts.py} 
          colour={externColour ? externColour.get(pts.id % colours.length) || colours[pts.id % colours.length] : colours[pts.id % colours.length]}
          scale={scale}>
        </MapNode>
      )}
    </div>
  );
} 