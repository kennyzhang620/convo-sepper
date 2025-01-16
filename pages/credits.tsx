'use client'

import { redirect } from "next/navigation";
import {ARView} from "../components/AR_module";
import Link from "next/link";
import BeesCheck from "../public/GUI/CheckOutBees-button.png"
import LearnMore from "../public/GUI/LearnMore-button.png"
import BackMenu  from '../public/GUI/GoBackHive-button.png'
import { Button } from "../components/ui/button";
import { Topbar } from "@/components/ui/topbar";
import BackImg from "../public/GUI/wolfgang-hasselmann-FpmSLjo408E-unsplash.jpg";
import { Bottombar } from "@/components/ui/bottombar";
import Beecomb from "../public/GUI/honeycomb.png"

export default function Credits() {

  return (
    <div style={{overflow:"hidden"}}>
      <div 
        id="background" 
        style={{ 
          backgroundColor: "#f4a69e",
          width: "100vw", 
          height: "100vh", 
          position: "absolute",
          backgroundSize: "cover",
          zIndex: -1
        }} 
      ></div>
      <Topbar title="About this project"></Topbar>
      <div id="bracket_1" style={{paddingTop:"6vh"}}>
          <div className="main_text"><h1 className="text-xl text-center">This is a collaborative research effort presented by the SFU Faculty of Education.</h1></div>
      </div>
      <div id="grid" style={{margin:"1rem", top:"14em", position:"relative", zIndex:"1000"}}>
      <Button label="Back" href="/" imageUrl={BackMenu} className='bee_button' width={84} height={84}></Button>
      </div>
    <Bottombar alt="beecomb" imageUrl={Beecomb} style={{ transform:"scale(5)", position: 'relative',
    top: '13rem'}}></Bottombar>
 </div>
  );
}
