import Link from "next/link";
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import BUBBLY from "../../public/BUBBLY_USER.svg";
import { CSSProperties } from "react";
import { Inter } from "next/font/google";
import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
  href?: string;
  paused?: boolean
  width?: string;
  height?: number;
  style?: CSSProperties;
  onClick?: () => void;
}

const interF = Inter({subsets:['latin']})

export function MapNode() {
  var [showTrans, showOnClick] = React.useState(false);
  return (
      <Image src={BUBBLY} alt={"bubbly"}></Image>
  );
} 