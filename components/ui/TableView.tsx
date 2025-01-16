import Link from "next/link";
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CSSProperties } from "react";
import { ConvoButton } from "./ConvoSelectable";

interface TableViewProps {
  label: string;
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
  backgroundColour: string;
  onClick?: () => void;
}

export function TableView({backgroundColour, width, height}: TableViewProps) {
  return (
    <div style={{backgroundColor: backgroundColour, width: width ? width : "100vw", height: height ? height: "30vh", overflow: "scroll"}}>
      <ConvoButton paused={true} label={"what"} width="80vw"></ConvoButton>
      <ConvoButton paused={!true} label={"what"} width="80vw"></ConvoButton>
      <ConvoButton paused={!true} label={"what"} width="80vw"></ConvoButton>
      <ConvoButton paused={!true} label={"what"} width="80vw"></ConvoButton>
    </div>
  );
} 