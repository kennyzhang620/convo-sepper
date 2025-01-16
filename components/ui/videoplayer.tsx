import Image from 'next/image'
import BarImg from "../../public/GUI/Bar.png"
import ReactPlayer from 'react-player';
import React from 'react';

interface VideoPlayerProps {
  videoActive: boolean;
  url: string;
  preplay?: boolean; 
  onClick: (e: React.MouseEvent) => void;
}

export function VideoPlayer({videoActive, url, preplay, onClick}: VideoPlayerProps) {

    return (
      videoActive ?
        <div id="player" className='vrcomp vidplayer'>
            <ReactPlayer url={url} playing={preplay ? preplay : false} suppressHydrationWarning/>
            <button id='closeBtn' style={{color: 'white', transform: 'translate(0em, -12em)'}} onClick={onClick}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
        </div> : <div></div>
    );
}