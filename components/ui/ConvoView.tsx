import Link from "next/link";
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CSSProperties } from "react";
import { MapView } from "./MapView";
import { TableView } from "./TableView";
import { Topbar } from "./topbar";
import { Bottombar } from "./bottombar";

interface ConvoProps {
  label: string;
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
  backgroundColour: string;
  onClick?: () => void;
}

export function ConvoView(cvp: ConvoProps) {
  
  const test = [{id: 3, transcript: "", px: 55, py: 45, theta: 55, timestamp: Date.now(), paused: false, cxy: 0}, {id: 2, transcript: "", px: 95, py: 45, theta: 55, timestamp: Date.now(), paused: false, cxy: 0}];
  return (
    <div>
      <Topbar title="Conversation Map"></Topbar>
    <MapView label="a" backgroundColour="#EFEFEF" ConvoPts={test}></MapView>
    <TableView label="a" backgroundColour="#58CC02" ConvoData={[]}></TableView>
    <Bottombar></Bottombar>
    </div>
  );
} 