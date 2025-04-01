import Image from 'next/image'
import logo from '../../public/ConvoBuddy.png'
import convo_icon from '../../public/ConvosIcons.png'
import trans_sc from '../../public/Transcript.png'
interface TopbarProps {
  title?: string;
}

export function Bottombar({ title }: TopbarProps) {
    return (
        <div className="w-full vrcomp p-4" style={{display: "flex"}}>
          <Image 
            src={convo_icon} 
            alt="Bar at top of AR view" 
            style={{ width: '15%'}}
            priority
          />
          <Image 
            src={trans_sc} 
            alt="Bar at top of AR view" 
            style={{ width: '15%'}}
            priority
          />
        </div>
    );
}