import Image from 'next/image'
import logo from '../../public/ConvoBuddy.png'
import convo_icon from '../../public/ConvosIcons.png'
interface TopbarProps {
  title?: string;
}

export function Topbar({ title }: TopbarProps) {
    return (
        <div className="w-full vrcomp p-4" style={{backgroundColor: "yellow"}}>
          <Image 
            src={logo} 
            alt="Bar at top of AR view" 
            style={{ width: '25%'}}
            priority
          />
          <div id="wrap" style={{display: "flex"}}>          
            {title ? 
          <h1 className="text-2xl">
            {title}
          </h1> : <div></div> }
          <Image 
            src={convo_icon} 
            alt="Bar at top of AR view" 
            style={{ width: '35%'}}
            priority
          /></div>
          <p>Find conversations that you want to join!</p>
          <p>If you need help, the transcripts are a great place to start!</p>
        </div>
    );
}