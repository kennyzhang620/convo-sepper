import Link from "next/link";
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CSSProperties } from "react";
import { Inter } from "next/font/google";
import React from "react";

export interface ConvoData {
  label: string,
  id: number,
  transcript: string,
  tips: string
  paused: boolean
}

export interface ConvoPoints {
  id: number,
  transcript: string,
  px: number,
  py: number,
  theta: number, 
  cxy: number,
  timestamp: number,
  paused: boolean
}

export const colours = ["#58CC02", "#FF00D9", "#8772FF", "#FFE100", "#00EAFF"]
