import Link from "next/link";
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import BUBBLY from "../../public/BUBBLY_USER.svg";
import { CSSProperties } from "react";
import { Inter } from "next/font/google";
import React from "react";
import { hexToCSSFilter } from "hex-to-css-filter";

interface NodeProps {
  className?: string;
  paused?: boolean
  x: number,
  y: number,
  heading: number,
  NodeId: number,
  colour: string,
}

const interF = Inter({subsets:['latin']})

export function MapNode(NodeProperties: NodeProps) {
  var [showTrans, showOnClick] = React.useState(false);

const XOFFSET = 256;
const YOFFSET = 256;

  'return `<div id="point-${id}" style="background-color: ${fform_colors.get(id)};position: absolute;border-radius: 100px; border: 3px black solid;width: 25px;height: 25px;left: ${XOFFSET+x}px;top: ${YOFFSET-y}px;text-align: center;transform: rotate(${theta}deg);"><div id="arr" style="background-color: blue;width: 9px;height: 6px;left: 8px;position: relative;"></div>${id}</div>`'
  return (
      <Image src={BUBBLY} alt={"bubbly"} style={{filter: hexToCSSFilter(NodeProperties.colour).filter, position:"absolute", left: `${XOFFSET+NodeProperties.x}px`, top: `${YOFFSET-NodeProperties.y}px`, rotate: `${NodeProperties.heading ? NodeProperties.heading : 0}deg`}}></Image>
  );
} 