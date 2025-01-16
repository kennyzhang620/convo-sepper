import Image from 'next/image'
import FoE from "../../public/GUI/FoE-logo.png"
import { CSSProperties } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface BottomBarProps {
  alt: string;
  className?: string;
  href?: string;
  imageUrl: string | StaticImport;
  width?: number;
  height?: number;
  style?: CSSProperties;
  showLogo?: boolean
}

export function Bottombar(props: BottomBarProps) {
    return (
      <div>
      <Image 
      src={props.imageUrl} 
      alt={props.alt}
      width={500}
      height={300}
      className='vrcomp'
      style={props.style ? props.style : {transform:'scale(1)', width:"100%"}}
    />
    <div id="extender" style={{width: "100%", backgroundColor:"#f4a69e", height:"25vh"}}>
     { props.showLogo ? <Image src={FoE} alt={"Faculty of Education - SFU"} style={{width:"30%"}}></Image> : <></> }

    </div>
    </div>);
}