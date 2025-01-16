'use client'

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

export function ARView({ ARlocations, minDistance, simulatedLat, simulatedLong, debug, index }: { ARlocations?: LocationProps[], minDistance?: number, simulatedLat?: number, simulatedLong?: number, debug?: boolean, index?: number }) {

  function generateAssetTags(asset: LocationProps[] | undefined) {
    
      var res = "";

      if (!asset) return res;
      
      res += "<a-assets>"

      for (var i=0;i<asset.length;i++) {
          res +=  `<a-asset-item
                    id="${asset[i].id}"
                    src="${asset[i].link}"
                ></a-asset-item>`
      }

      res += "</a-assets>"

      return res;
  }

  function generateEntitiesfromAsset(asset: LocationProps[] | undefined, debug: boolean | undefined) {
    var res = "";

    if (!asset) return res;

      for (var i=0;i<asset.length;i++) {
          res +=  `<a-entity
                    look-at="[gps-camera]"
                    animation-mixer="loop: repeat"
                    gltf-model="${asset[i].link}"
                    scale="${asset[i].scale}"
                    gps-new-entity-place="latitude: ${asset[i].latitude}; longitude: ${asset[i].longitude}"
                    class="clickable"
                    gesture-handler
                ></a-entity>
                ` 

          if (debug) res += `	<a-entity material='color: red' geometry='primitive: box' gps-new-entity-place="latitude: ${asset[i].latitude}; longitude: ${asset[i].longitude}" scale="5 5 5"></a-entity>`

      }
      return res;
  }

  function generateEntityfromAsset(asset: LocationProps[] | undefined, debug: boolean | undefined) {
    var res = "";

    if (!asset) return res;

    res +=  `<a-entity
              look-at="[gps-camera]"
              animation-mixer="loop: repeat"
              gltf-model="${asset[index ? index : 0].link}"
              scale="${asset[index ? index : 0].scale}"
              gps-new-entity-place="latitude: ${asset[index ? index : 0].latitude}; longitude: ${asset[index ? index : 0].longitude}"
              class="clickable"
              gesture-handler
          ></a-entity>
          ` 

    if (debug) res += `	<a-entity material='color: red' geometry='primitive: box' gps-new-entity-place="latitude: ${asset[index ? index : 0].latitude}; longitude: ${asset[index ? index : 0].longitude}" scale="5 5 5"></a-entity>`

      return res;
  }
  
  function generateMarkers() {
    /* if (asset[i].marker) { 
              const marker = ` <a-marker
              id="animated-marker-${asset[i].id}"
              type="pattern"
              preset="custom"
              url="${asset[i].marker}"
              raycaster="objects: .clickable"
              emitevents="true"
              cursor="fuse: false; rayOrigin: mouse;"
              id="markerA-${asset[i].id}"
          >
              <a-entity
                  id="bowser-model-${asset[i].id}"
                  scale="${asset[i].scale}"
                  animation-mixer="loop: repeat"
                  gltf-model="#${asset[i].id}"
                  class="clickable"
                  gesture-handler
              ></a-entity>
              ${debug ? `<a-entity material='color: red' geometry='primitive: box' gps-new-entity-place="latitude: ${asset[i].latitude}; longitude: ${asset[i].longitude}" scale="10 10 10"></a-entity>` : ``}
          </a-marker>`

            res += marker;
          }

          */
  }

  function simulateCoords(latitude: number | undefined, longitude: number | undefined) {
    if (!latitude || !longitude) return ""

    return `simulateLatitude: ${latitude}; simulateLongitude: ${longitude}` 
  }

  const htmlD: string =`
  <a-scene vr-mode-ui='enabled: false' loading-screen="enabled: false;" arjs='trackingMethod: best; sourceType: webcam; videoTexture: true; debugUIEnabled: false' renderer='antialias: true; alpha: true; logarithmicDepthBuffer: true' gesture-detector>
      <a-camera gps-new-camera='gpsMinDistance: ${minDistance ? minDistance : 5}; ${simulateCoords(simulatedLat, simulatedLong)};'></a-camera>
    ${index ? generateEntityfromAsset(ARlocations, debug) : generateEntitiesfromAsset(ARlocations, debug)}
  </a-scene>
`;

  return (
    <div id={index ? "ar-id" + index : "ar-id-all" } dangerouslySetInnerHTML={{ __html: htmlD }}></div>
  )
}