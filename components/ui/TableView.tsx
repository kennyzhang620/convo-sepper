import Link from "next/link";
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CSSProperties } from "react";
import { ConvoButton } from "./ConvoSelectable";
import { ConvoData , colours} from "./ConvoStructs";

interface TableViewProps {
  label: string;
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
  backgroundColour: string;
  ConvoData: ConvoData[],
  onClick?: () => void;
}

export function TableView({backgroundColour, width, height, ConvoData}: TableViewProps) {
  return (
    <div style={{backgroundColor: backgroundColour, width: width ? width : "100vw", height: height ? height: "25vh", overflow: "scroll"}}>
      {
        ConvoData.map(conv => <ConvoButton label={conv.label} ConvoD={conv}></ConvoButton>)
      }
    </div>
  );
} 