import { useEffect, useRef } from "react";

import ultraviolet from "../assets/media/music/Zine000_GENESIS_COMP/charles nimbus - ultraviolet.wav";
import hydra from "../assets/media/music/Zine000_GENESIS_COMP/cybashawty - hydra.mp3";
import getdown from "../assets/media/music/Zine000_GENESIS_COMP/envi - get down.wav";
import nightathome from "../assets/media/music/Zine000_GENESIS_COMP/Justin Scott - A night at home in palmetto.wav";
import asdecoration from "../assets/media/music/Zine000_GENESIS_COMP/sohn jamal - as decoration.wav";
import focalpoint from "../assets/media/music/Zine000_GENESIS_COMP/TS - Focal Point (mastering attempt 2).wav";

function WebAmpComponent() {
  const webampRef = useRef(null);

  useEffect(() => {
    // Ensure Webamp is available on the global window object
    const Webamp = window.Webamp;

    if (!Webamp || !Webamp.browserIsSupported()) {
      alert("Oh no! Webamp does not work!");
      return;
    }

    const webamp = new Webamp({
      initialTracks: [
        {
          url: ultraviolet,
          // blob: ultraviolet.blob(),
          duration: 148.2,
          metaData: {
            title: "ultraviolet",
            artist: "charles nimbus",
          },
        },
        {
          url: hydra,
          duration: 244.8,
          metaData: {
            title: "hydra",
            artist: "cybashawty",
          },
        },
        {
          url: getdown,
          duration: 143.4,
          metaData: {
            title: "get down",
            artist: "envi",
          },
        },
        {
          url: nightathome,
          duration: 75.6,
          metaData: {
            title: "A night at home in palmetto",
            artist: "justin scott",
          },
        },
        {
          url: asdecoration,
          duration: 192.6,
          metaData: {
            title: "as decoration",
            artist: "sohn jamal",
          },
        },
        {
          url: focalpoint,
          duration: 182.4,
          metaData: {
            title: "Focal Point",
            artist: "TS",
          },
        },
        // ... other tracks
      ],

      //BUTTERCHURN MILKDROP------------------------------------------------------------------
      __butterchurnOptions: {
        importButterchurn: () => Promise.resolve(window.butterchurn),
        getPresets: () => {
          const presets = window.butterchurnPresets.getPresets();
          return Object.keys(presets).map((name) => {
            return {
              name,
              butterchurnPresetObject: presets[name],
            };
          });
        },
        butterchurnOpen: true,
        // willReadFrequently: true,
      },
    });

    //LAYOUT FOR WEBAMP------------------------------------------------------------------

    // webamp.store.dispatch({ type: "CLOSE_WINDOW", windowId: "playlist" });
    webamp.store.dispatch({ type: "CLOSE_WINDOW", windowId: "equalizer" });
    webamp.store.dispatch({
      size: [6.75, 4.75],
      type: "WINDOW_SIZE_CHANGED",
      windowId: "milkdrop",
    });
    webamp.store.dispatch({
      size: [0, 0.85],
      type: "WINDOW_SIZE_CHANGED",
      windowId: "playlist",
    });
    webamp.store.dispatch({
      absolute: true,
      positions: {
        main: {
          x: 25,
          y: 625,
        },
        milkdrop: {
          x: 300,
          y: 625,
        },
        playlist: {
          x: 25,
          y: 740,
        },
      },

      type: "UPDATE_WINDOW_POSITIONS",
    });

    webamp.renderWhenReady(webampRef.current);

    return () => {
      // Cleanup Webamp instance on component unmount
      if (webamp) {
        webamp.dispose();
      }
    };
  }, []);

  return (
    <>
      {/* <iframe src=""> */}
      <div id="webamp-container" style={{}} ref={webampRef}></div>
      {/* </iframe> */}
    </>
  );
}

export default WebAmpComponent;
