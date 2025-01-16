'use client'

import React, { ReactNode } from 'react';

export interface LocationProps {
  ind: number,
  id: string
  latitude: number,
  longitude: number,
  link: string,
  marker?: string,
  vlink: string,
  scale: string;
}

export function ARHeader() {

  const htmlD: string =`
  <head>
  <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
  <!-- Assumes AR.js build is in the 'AR.js' directory -->
  <script type='text/javascript' src='https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-threex-location-only.js'></script>
  <script type='text/javascript' src='https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js'></script>
  </head>
  <!-- 
  This is using a simulated location. If testing on a mobile device, remove the 
  'simulateLatitude' and 'simulateLongitude' properties from 'gps-new-camera' and
  change the 'latitude' and 'longitude' properties to a location around 0.001 
  degrees from your real location.
  -->
`;

  return (
    <div id="head" dangerouslySetInnerHTML={{ __html: htmlD }}></div>
  )
}