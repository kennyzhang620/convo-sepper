import Image from 'next/image'
import logo_m from '../../public/ConvoBuddy.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { colours } from './ConvoStructs';

interface TopbarProps {
  title?: string;
  p1?: string;
  p2?: string;
  logo: string | StaticImport;
  colour: string;
}

export function Topbar({ title, p1, p2, logo, colour }: TopbarProps) {
    return (
        <div className="w-full vrcomp p-4" style={{backgroundColor: colour}}>
          <Image 
            src={logo_m} 
            alt="Bar at top of AR view" 
            style={{ width: '84px'}}
            priority
          />
          <div id="wrap" style={{display: "flex", justifyContent: 'space-between'}}>          
            {title ? 
          <h1 className="text-xl">
            {title}
          </h1> : <div></div> }
          {
          logo ? 
          <Image 
            src={logo} 
            alt="Bar at top of AR view" 
            style={{ width: '146px', padding: '0.5rem'}}
            priority
          /> : <div></div>
          }
          </div>
          <p>{p1}</p>
          <p>{p2}</p>
        </div>
    );
}