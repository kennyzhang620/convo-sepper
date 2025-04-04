import Image from 'next/image'
import logo from '../../public/ConvoBuddy.png'
import convo_icon from '../../public/ConvosIcons.png'
import trans_sc from '../../public/Transcript.png'
import settings_i from '../../public/Settings.png'

interface BottomProps {
  onClick1?: () => void;
  onClick2?: () => void;
  onClick3?: () => void;
}

export function Bottombar(bProps: BottomProps) {
    return (
        <div className="w-full vrcomp p-4" style={{display: "flex", justifyContent: 'space-evenly'}}>
          <Image 
            src={convo_icon} 
            alt="Bar at top of AR view" 
            style={{ width: '102px', height: '56px'}}
            priority
            onClick={bProps.onClick1}
          />
          <Image 
            src={trans_sc} 
            alt="Bar at top of AR view" 
            style={{width: '56px', height: '56px'}}
            priority
            onClick={bProps.onClick2}
          />
          <Image 
          src={settings_i} 
          alt="Bar at top of AR view" 
          style={{width: '56px', height: '56px'}}
          priority
          onClick={bProps.onClick3}
        />
        </div>
    );
}