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
import { sendPacket } from "./_helpers";
import { colours, ConvoData, ConvoPoints } from "./ConvoStructs";
import ProfileImg from '../../public/ProfilePicture.png'
import { Button } from "./button";
import ReactSlider from 'react-slider'

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
  const topbar_txt = [{title: "Conversation Map", p1: "Find conversations that you want to join!", p2: "Stuck? The transcripts are a great place to start!", logo: convo_icon, color: "#FFE100"}, 
    {title: "Transcripts", p1: "See what the conversation is all about!", p2: " ", logo: transcr, color: "#58CC02"}, 
    {title: "", p1: "", p2: " ", logo: '', color: "#FFFFFF"}]
  
  /*
  const test = [{id: 3, transcript: "", px: 55, py: 45, theta: 55, timestamp: Date.now(), paused: false, cxy: 0}, {id: 2, transcript: "", px: 95, py: 45, theta: 55, timestamp: Date.now(), paused: false, cxy: 0}];
  const tdata = [{label: 'Artifical intelligence', id: 3, transcript: 'cock', tips: 'abcd', paused: false}, {label: 'Artifical intelligence',
      id: 2, transcript: 'cock', tips: 'abcd', paused: false}]
      */

  var [test, setPoint] = useState<ConvoPoints[]>([]);
  var [tdata, setTranscriptData] = useState<ConvoData[]>([])

const convoserver = "https://conv-count-poc-997c48b4c4cc.herokuapp.com" + "/convo-ts-list"
const server = "https://conv-count-poc-997c48b4c4cc.herokuapp.com" + "/convo-ts-ids";
const clusterServer = "https://conv-count-poc-997c48b4c4cc.herokuapp.com" + "/convo-ts-clusters";
var [fform_colors, setColours] = useState(new Map())

var prevLen = 0;

      const [count, setCount] = useState(0);
      useEffect(() => {



        function loadConvo(e:string) {

          let dataArr: ConvoData[] | null = null;
          try {
              dataArr = JSON.parse(e);
          }
          catch (e) {
              console.error(e);
          }
      
          if (!dataArr) return;
      
          if (prevLen != dataArr.length) {
              setTranscriptData(dataArr);
      
              prevLen = dataArr.length;
      
              return;

          }
     }



     function loadPoints(e:string) {

      let dataArr: ConvoPoints[] | null = null;
      try {
          dataArr = JSON.parse(e);
      }
      catch (e) {
          console.error(e);
      }
  
      if (!dataArr) return;
  
      if (prevLen != dataArr.length) {
          setPoint(dataArr);
  
          prevLen = dataArr.length;
  
          return;

      }
 }
      function loadFFormations(e:string) {
        var dataArr: number[][] | null = null;
        try {
            dataArr = JSON.parse(e);
        }
        catch (e) {
            console.error(e);
        }

        if (!dataArr) return;

        // Draw F-formations
        for (var i = 0;i < dataArr.length;i++) {
            const fformation = dataArr[i];
            for (var f = 0;f<fformation.length ;f++) {
            //    document.getElementById(`point-${fformation[f]}`).style.backgroundColor = f_formation_colors[i];
                fform_colors.set(fformation[f],  colours[i]);
            }
        }

      //  console.log(fform_colors)
        sendPacket(server, 'GET', '', true, loadPoints,  undefined, 3000);
      }
      
      function convo_loop() {
          sendPacket(convoserver, 'GET', '', true, loadConvo, undefined, 3000)
          sendPacket(clusterServer, 'GET', '', true, loadFFormations, undefined, 3000)
      }
      
      convo_loop();
      
        const timer = setTimeout(() => {
          const counter = count + 1;
          setCount(counter);
        }, 1000);

        return () => clearTimeout(timer);
      }, [count]);

  return (
    <div>
        <Topbar title={topbar_txt[appMode].title} p1={topbar_txt[appMode].p1} p2={topbar_txt[appMode].p2} logo={topbar_txt[appMode].logo} colour={topbar_txt[appMode].color} ></Topbar>
        { appMode == 2 ? <div><Image alt="profile" src={ProfileImg}></Image>
        <div className="p-4" style={{height: "51vh"}}><h1 className="text-xl">Profile and Settings</h1><h2 className="text-lg">Calibration</h2><Button className="text-base" label="Recentre Device"></Button><h2 className="text-lg">Compass Realignment</h2><Button className="text-base" label="Set Current Direction as North"></Button></div></div> : <div></div> }
        { appMode == 0 ? <div><MapView label="a" backgroundColour="#EFEFEF" ConvoPts={test} height={'43vh'} scale={50} externColour={fform_colors}></MapView></div> : <div></div> }
        { appMode <= 1 ? <div><TableView label="a" backgroundColour={appMode == 0 ? "#58CC02" : "#FFFFFF"} ConvoData={tdata} height={ appMode == 1 ? "62vh" : "25vh"}></TableView></div> : <div></div> }
        <Bottombar onClick1={() => setMode(0)} onClick2={() => setMode(1)} onClick3={() => setMode(2)}></Bottombar>
   </div>
  );
} 