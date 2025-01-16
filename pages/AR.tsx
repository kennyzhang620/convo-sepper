import {ARView, LocationProps} from "../components/AR_module";
import {ARHeader} from "../components/AR_mod_header"
import DYK from "../public/GUI/DidYKnow-button.png"
import { Topbar } from '@/components/ui/topbar';
import { Button } from '@/components/ui/button';
import BackMenu  from '../public/GUI/GoBackMenu-button.png'
import React, { useEffect, useState } from 'react';
import { Bottombar } from '@/components/ui/bottombar-ar';
import { VideoPlayer } from "@/components/ui/videoplayer";

let db: IDBDatabase;
let dba: boolean = false;

function openDatabase() {
    const request = indexedDB.open("yourDatabaseName", 5); // Replace with your database name

    request.onsuccess = (event) => {
        const target = event.target as IDBOpenDBRequest;
        if (target) {
            db = target.result; // Assign the database instance to db
        }
    };

    request.onerror = (event) => {
        console.error("Database error: ", event);
    };

    request.onupgradeneeded = (event) => {
        const target = event.target as IDBOpenDBRequest;
        if (target) {
            db = target.result;

            // Create an objectStore in our database to store notes and an auto-incrementing key
            // An objectStore is similar to a 'table' in a relational database
            const objectStore = db.createObjectStore("Assets_os", {
              keyPath: "Assets_os",
              autoIncrement: true,
            });
          
            // Define what data items the objectStore will contain
            objectStore.createIndex("name", "name", { unique: false });
            objectStore.createIndex("ind", "ind", { unique: true });
            objectStore.createIndex("binBlob", "binBlob", { unique: false });
            objectStore.createIndex("binBlob2", "binBlob2", { unique: false });
          
            console.log("Database setup complete");
        };
      }
  }

export default function AR() {
  
    var [AREntityList, setEntityProps] = React.useState([{ 
      ind: 0, 
      id: "test1",
      latitude: 49.22415355277056, 
      longitude: -123.02114078159461, 
      link: 'https://scienceworld-ar-test-92c85625c6ee.herokuapp.com/DroneBee/assets/asset.glb',
      scale: '6 6 6',
      vlink: "/../ar-debug/assets/bc1.mp4",
      marker: "/../DroneBee/assets/marker.patt"
    },
    { ind: 1, 
      id: "test2",
      latitude: 49.228613165032755,  
      longitude: -123.0215556073008,
      link: 'https://scienceworld-ar-test-92c85625c6ee.herokuapp.com/QueenBee/assets/asset.glb',
      scale: '6 6 6',
      vlink: "/../ar-debug/assets/bc2.mp4",
      marker: "/../QueenBee/assets/marker.patt"
    },
    { ind: 2,
      id: "test3",
      latitude: 49.22953004476963,
      longitude:  -123.01606714411135, 
      link: 'https://scienceworld-ar-test-92c85625c6ee.herokuapp.com/WorkerBee/assets/asset.glb',
      scale: '6 6 6',
      vlink: "/../ar-debug/assets/bc3.mp4",
      marker: "/../WorkerBee/assets/marker.patt"
    },
    { 
      ind: 3, 
      id: "test_local",
      latitude: 49.22567254037197,  
      longitude: -122.99699285722649,
      link: 'https://scienceworld-ar-test-92c85625c6ee.herokuapp.com/WorkerBee/assets/asset.glb',
      scale: '6 6 6',
      vlink: "/../ar-debug/assets/bc2.mp4",
      marker: "/../WorkerBee/assets/marker.patt"
    }])

    var [VideoActive, setAsset] = React.useState(false);
    var [vidLink, setLink] = React.useState('');
    var [vidId, setID] = React.useState(0);
    var [sceneID, setSID] = React.useState(0);
    
    const onActive = React.useCallback(() => {
      setAsset(true);
  }, [VideoActive] /* Dependency Array - recreate on setLoggedIn change */ );
  
    const onActiveD = React.useCallback(() => {
      setAsset(false);
    }, [VideoActive] /* Dependency Array - recreate on setLoggedIn change */ );


    function storeAsset(binBlob: Blob, binBlob2: Blob, name: string, ind: number) {
      // Open transaction, get object store; make it a readwrite so we can write to the IDB
      const objectStore = db
        .transaction(["Assets_os"], "readwrite")
        .objectStore("Assets_os");
    
      // Add the record to the IDB using add()
      const request = objectStore.add({ name, ind, binBlob, binBlob2});
    
      request.addEventListener("success", () =>
        console.log("Record addition attempt finished"),
      );
      request.addEventListener("error", () => console.error(request.error));
    }

    function displayAsset(id: number) {
      const url = AREntityList[id].vlink;

      if (id == vidId) return;

      setLink(url); setID(id);
    }

    function display3DAsset(AssetBlob: Blob, AssetBlob2: Blob, ind: number) {
      const url = URL.createObjectURL(AssetBlob);
      const url2 = URL.createObjectURL(AssetBlob2);

      console.log(ind, "load");

      if (url == AREntityList[ind].link) return;
      if (url2 == AREntityList[ind].vlink) return;
     // AREntityList[ind].link = url;
      AREntityList[ind].vlink = url2;
      setEntityProps(AREntityList);
    }

    function fetchAssetFromNetwork(Asset: LocationProps) {
            // Fetch the MP4 and WebM versions of the Asset using the fetch() function,
      // then expose their response bodies as blobs

      console.log("Network fetch of asset", Asset.link);
      const binBlob = fetch(Asset.vlink).then((response) =>
        response.blob(),
      );

      const binBlob2 = fetch(Asset.link).then((response) =>
        response.blob(),
      );

      // Only run the next code when both promises have fulfilled
      Promise.all([binBlob, binBlob2]).then((values) => {
        // display the Asset fetched from the network with displayAsset()
        display3DAsset(values[1], values[0], Asset.ind);
        // store it in the IDB using storeAsset()
        storeAsset(values[0], values[1], Asset.id, Asset.ind);
        displayAsset(Asset.ind);
      });
    }

    function loadAllVids(Assets: LocationProps[]) {
      var ind = 1;
      for (const Asset of Assets) {

          // Open transaction, get object store, and get() each Asset by name
              const objectStore = db.transaction("Assets_os").objectStore("Assets_os");
              const request = objectStore.get(ind);
              request.addEventListener("success", () => {
                // If the result exists in the database (is not undefined)
                if (!request.result)  {
                  // Fetch the Assets from the network
                  fetchAssetFromNetwork(Asset);
                }
                else {
                  display3DAsset(
                    request.result.binBlob2,
                    request.result.binBlob,
                    request.result.ind,
                  );

                  displayAsset(
                    request.result.ind,
                  );
                }
              });
        console.log("bug")
        ind++;
      }

      if (ind >= Assets.length) dba = true;
    }

    function selectAsset(Assets: LocationProps[], id: number) {
      // Loop through the Asset names one by one
      displayAsset(id);
    }

    function getNorm(latitude: number, longitude: number) {
      return Math.sqrt(latitude**2 + longitude**2);
    }

    async function getClosestPoint(points: LocationProps[], minDist: number) {
      const { latitude: lat, longitude: long } = await new Promise<{ latitude: number; longitude: number }>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }),
            err => reject(err)
        );
    });
      
      var minid = -1;
      var minv = 0;
      for (var i=0;i<points.length;i++) {
        if (minid == -1) {
          minid = 0
          minv = Math.abs(getNorm(points[i].latitude, points[i].longitude) - getNorm(lat, long));
        }
        else {
          if (Math.abs(getNorm(points[i].latitude, points[i].longitude) - getNorm(lat, long)) <= minv) {
            minid = i;
            minv = Math.abs(getNorm(points[i].latitude, points[i].longitude) - getNorm(lat, long));
          }
        }
      }
      
      console.log('id', minid);

      selectAsset(AREntityList, minid);
      setSID(minid);
    }
  
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!db) openDatabase();

      if (db && !dba) loadAllVids(AREntityList);

      const timer = setTimeout(() => {
        const counter = count + 1;
        setCount(counter);
        if (db && dba) getClosestPoint(AREntityList, 1);

      }, 1000);
      return () => clearTimeout(timer);
    }, [count]);

  return (
    <>
      <VideoPlayer videoActive={VideoActive} url={vidLink} onClick={onActiveD} preplay={true}></VideoPlayer>
      <Topbar title='Bee Explorer'></Topbar>
      <ARHeader></ARHeader>
      <ARView minDistance={2} ARlocations={AREntityList} debug={true}></ARView>
      <Bottombar></Bottombar>
      <Button label="Back" href="/" imageUrl={BackMenu} className='vrcomp buttonbtm' width={84} height={84} style={{transform:'translate(30px, 78px)'}}></Button>
      <Button label="DYK" onClick={onActive} imageUrl={DYK} className='vrcomp buttonbtm' width={84} height={84} style={{transform:'translate(-30px, 78px)', float: 'right'}}></Button>
    </>
  );
}
