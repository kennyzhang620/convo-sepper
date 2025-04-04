import Link from "next/link";
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CSSProperties, useEffect, useState } from "react";
import { MapView } from "./MapView";
import { TableView } from "./TableView";
import { Topbar } from "./topbar";
import { Bottombar } from "./bottombar";
import convo_icon from '../../public/ConvosIcons.png'
import transcr from '../../public/Transcript.png'
import { recorder_loop } from "./recorder";

interface ConvoProps {
  label: string;
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
  backgroundColour: string;
  onClick?: () => void;
}

export function ConvoView(cvp: ConvoProps) {

  var [appMode, setMode] = useState(0)
  const topbar_txt = [{title: "Conversation Map", p1: "Find conversations that you want to join!", p2: "Stuck? The transcripts are a great place to start!", logo: convo_icon, color: "#FFE100"}, {title: "Transcripts", p1: "See what the conversation is all about!", p2: " ", logo: transcr, color: "#58CC02"}]
  
  /*
  const test = [{id: 3, transcript: "", px: 55, py: 45, theta: 55, timestamp: Date.now(), paused: false, cxy: 0}, {id: 2, transcript: "", px: 95, py: 45, theta: 55, timestamp: Date.now(), paused: false, cxy: 0}];
  const tdata = [{label: 'Artifical intelligence', id: 3, transcript: 'cock', tips: 'abcd', paused: false}, {label: 'Artifical intelligence',
      id: 2, transcript: 'cock', tips: 'abcd', paused: false}]
      */

  var [test, setPoint] = useState([]);
  var [tdata, setTranscriptData] = useState([])

const convoserver = "https://conv-count-poc-997c48b4c4cc.herokuapp.com" + "/convo-ts-list"

      const [count, setCount] = useState(0);
      useEffect(() => {



        function loadConvo(e) {

          var dataArr = null;
         // console.log(e)
          try {
              dataArr = JSON.parse(e);
          }
          catch (e) {
              console.error(e);
          }
      
          if (!dataArr) return;
      
          if (prevLen != dataArr.length) {
              clearCells();
              generateCell(dataArr, 10)
      
              prevLen = dataArr.length;
      
              return;
          }
      
          reviseCell(dataArr, 10);
      }
      
      function convo_loop() {
          sendPacket(convoserver, 'GET', '', true, loadConvo,  null, 3000)
      }
      
      setInterval(convo_loop, 100);


        const timer = setTimeout(() => {
          const counter = count + 1;
          setCount(counter);
        }, 1000);
        return () => clearTimeout(timer);
      }, [count]);

  return (
    <div>
        { appMode != 2 ? <div><Topbar title={topbar_txt[appMode].title} p1={topbar_txt[appMode].p1} p2={topbar_txt[appMode].p2} logo={topbar_txt[appMode].logo} colour={topbar_txt[appMode].color} ></Topbar></div> : <div></div> }
        { appMode == 0 ? <div><MapView label="a" backgroundColour="#EFEFEF" ConvoPts={test} height={'43vh'}></MapView></div> : <div></div> }
        { appMode <= 1 ? <div><TableView label="a" backgroundColour={appMode == 0 ? "#58CC02" : "#FFFFF"}     ConvoData={tdata} height={ appMode == 1 ? "62vh" : "25vh"}></TableView></div> : <div></div> }
        <Bottombar onClick1={() => setMode(0)} onClick2={() => setMode(1)} onClick3={() => setMode(2)}></Bottombar>
   </div>
  );
} 