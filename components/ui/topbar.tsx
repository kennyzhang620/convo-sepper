import Image from 'next/image'
import BarImg from "../../public/GUI/Bar.png"

interface TopbarProps {
  title?: string;
}

export function Topbar({ title }: TopbarProps) {
    return (
        <div className="w-full vrcomp">
          <Image 
            src={BarImg} 
            alt="Bar at top of AR view" 
            style={{ width: '100%', height: '128px'}}
            priority
          />

          {title ? 
          <h1 className="text-2xl font-bold" style={{ transform: 'translate(34px, -100px)', color: 'white' }}>
            {title}
          </h1> : <div></div> }
        </div>
    );
}