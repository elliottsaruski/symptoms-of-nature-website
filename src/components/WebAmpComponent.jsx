import { useEffect, useRef } from "react";
import { useScreenSize } from "../hooks/useScreenSize";

function WebAmpComponent() {
  const webampRef = useRef(null);
  const { isDesktop } = useScreenSize();

  useEffect(() => {
    // Ensure Webamp is available on the global window object
    const Webamp = window.Webamp;

    if (!Webamp || !Webamp.browserIsSupported()) {
      alert("Oh no! Webamp does not work!");
      return;
    }

    const webamp = new Webamp({
      __initialWindowLayout: {
        absolute: true,
        main: {
          position: { x: 0, y: 100 },
        },
        playlist: {
          position: { x: 0, y: 216 },
        },
        milkdrop: {
          position: { x: 275, y: 100 },
        },
      },
      initialTracks: [
        {
          url: "https://res.cloudinary.com/elliott-dev/video/upload/v1723168595/charles_nimbus_-_ultraviolet_w0kvvv.wav",
          duration: 148.2,
          metaData: {
            title: "ultraviolet",
            artist: "charles nimbus",
          },
        },
        {
          url: "https://res.cloudinary.com/elliott-dev/video/upload/v1723168585/cybashawty_-_hydra_pzxflp.mp3",
          duration: 244.8,
          metaData: {
            title: "hydra",
            artist: "cybashawty",
          },
        },
        {
          url: "https://res.cloudinary.com/elliott-dev/video/upload/v1723168601/envi_-_get_down_exxtoi.wav",
          duration: 143.4,
          metaData: {
            title: "get down",
            artist: "envi",
          },
        },
        {
          url: "https://res.cloudinary.com/elliott-dev/video/upload/v1723168589/Justin_Scott_-_A_night_at_home_in_palmetto_i4eziw.wav",
          duration: 75.6,
          metaData: {
            title: "A night at home in palmetto",
            artist: "justin scott",
          },
        },
        {
          url: "https://res.cloudinary.com/elliott-dev/video/upload/v1723168595/sohn_jamal_-_as_decoration_tty0vq.wav",
          duration: 192.6,
          metaData: {
            title: "as decoration",
            artist: "sohn jamal",
          },
        },
        {
          url: "https://res.cloudinary.com/elliott-dev/video/upload/v1723168589/TS_-_Focal_Point_mastering_attempt_2_zuck2m.wav",
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
      },
    });

    //LAYOUT FOR WEBAMP------------------------------------------------------------------

    webamp.store.dispatch({ type: "CLOSE_WINDOW", windowId: "equalizer" });

    // -----------DESKTOP WEBAMP POSITION------------------
    {
      isDesktop &&
        webamp.store.dispatch({
          size: [0.25, 4.8],
          type: "WINDOW_SIZE_CHANGED",
          windowId: "milkdrop",
        });
      webamp.store.dispatch({
        size: [0, 0.85],
        type: "WINDOW_SIZE_CHANGED",
        windowId: "playlist",
      });
      // webamp.store.dispatch({
      //   absolute: true,
      //   positions: {
      //     main: {
      //       x: 25,
      //       y: 650,
      //     },
      //     milkdrop: {
      //       x: 300,
      //       y: 625,
      //     },
      //     playlist: {
      //       x: 25,
      //       y: 740,
      //     },
      //   },

      //   type: "UPDATE_WINDOW_POSITIONS",
      // });
    }

    console.log(webamp.store);

    // -----------DESKTOP MOBILE POSITION------------------
    // {
    //   isMobile &&
    //     webamp.store.dispatch({ type: "CLOSE_WINDOW", windowId: "milkdrop" });

    //   webamp.store.dispatch({
    //     size: [0, 0],
    //     type: "WINDOW_SIZE_CHANGED",
    //     windowId: "playlist",
    //   });
    //   webamp.store.dispatch({
    //     absolute: true,
    //     positions: {
    //       main: {
    //         x: 0,
    //         y: 845,
    //       },
    //       playlist: {
    //         x: 150,
    //         y: 845,
    //       },
    //     },

    //     type: "UPDATE_WINDOW_POSITIONS",
    //   });
    // }

    webamp.renderWhenReady(webampRef.current);
    // console.log(`${windowSize}`);
    return () => {
      // Cleanup Webamp instance on component unmount
      if (webamp) {
        webamp.dispose();
      }
    };
  }, [isDesktop]);

  return (
    <>
      <div id="webamp-container" style={{}} ref={webampRef}></div>
    </>
  );
}

export default WebAmpComponent;

// Error: Attempted to add a new teardown to a disposed disposable.
//     at fl.add (webamp.bundle.min.js:24:181223)
//     at c.renderWhenReady (
