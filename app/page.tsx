'use client'

import { redirect } from "next/navigation";
import {ARView} from "../components/AR_module";
import Link from "next/link";
import BeesCheck from "../public/GUI/CheckOutBees-button.png"
import LearnMore from "../public/GUI/LearnMore-button.png"
import { ConvoButton } from "../components/ui/ConvoSelectable";
import { TableView } from "@/components/ui/TableView";
import { Topbar } from "@/components/ui/topbar";
import BackImg from "../public/GUI/wolfgang-hasselmann-FpmSLjo408E-unsplash.jpg";
import { Bottombar } from "@/components/ui/bottombar";
import BottomBarImg from "../public/GUI/Bar-bottom.png"
import { MapView } from "@/components/ui/MapView";

export default function Home() {

  return (
    <body>
      <MapView label="a" backgroundColour="#FFFFFF"></MapView>
      <TableView label="a" backgroundColour="#FFFFFF"></TableView>
    </body>
  );
}
