import Link from "next/link";
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CSSProperties } from "react";

interface ButtonProps {
  label: string;
  className?: string;
  href?: string;
  imageUrl?: string | StaticImport;
  width?: number;
  height?: number;
  style?: CSSProperties;
  onClick?: () => void;
}

export function Button({ label, className, href, imageUrl, width, height, style, onClick }: ButtonProps) {
  return (
    <Link href={href ? href : ""}>
      <button className={className} onClick={onClick} style={style}>
        {imageUrl != null ? <Image src={imageUrl} alt="Button" width={width} height={height} ></Image> : label }
      </button>
    </Link>
  );
} 