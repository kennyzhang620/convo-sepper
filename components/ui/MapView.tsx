import Link from "next/link";
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CSSProperties } from "react";
import { MapNode } from "./MapNode";

interface TableViewProps {
  label: string;
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
  backgroundColour: string;
  onClick?: () => void;
}

export function MapView({backgroundColour, width, height}: TableViewProps) {
  return (
    <div style={{backgroundColor: backgroundColour, width: width ? width : "100vw", height: height ? height: "30vh", overflow: "scroll"}}>
      <MapNode></MapNode>
    </div>
  );
} 