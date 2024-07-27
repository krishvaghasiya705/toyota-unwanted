import React, { useRef } from 'react';
import './preloader.scss';
import Caraudio from "../../assets/audio/car-engine-start-outside-72279.mp3";

const Preloader = () => {
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Audio playback failed:', error);
      });
    }
  };

  return (
    <>
      <div className="loader-rl">
        <div className="preloader-div-main">
          {/* <div className="Loader-notification">
            <h1>IF YOU ARE CLICK ANY WHERE FROM THE LOADER BODY YOU CAN FEEL THE SOUND</h1>
          </div> */}
          <div className="preloader-container">
            <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251.354 181.587">
              <path d="M36.029 138.397H0v7.965h13.298v33.964h9.434v-33.964H36.03v-7.965m35.23 27.695a11.555 11.555 0 0 1-8.71 7.123 12.674 12.674 0 0 1-2.189.194c-.743 0-1.475-.07-2.182-.194a11.538 11.538 0 0 1-8.706-7.123 18.407 18.407 0 0 1-1.27-6.73c0-2.375.452-4.65 1.27-6.734a11.547 11.547 0 0 1 8.706-7.122 12.054 12.054 0 0 1 4.37 0 11.55 11.55 0 0 1 8.71 7.12 18.526 18.526 0 0 1 0 13.466m-10.9-28.955c-12.268 0-22.224 9.95-22.224 22.225 0 12.267 9.956 22.219 22.225 22.219 12.277 0 22.225-9.952 22.225-22.218 0-12.276-9.948-22.226-22.225-22.226zm22.375 1.26h11.112l10.377 18.027 10.377-18.027h11.108l-16.769 26.417v15.512h-9.432v-15.512l-16.773-26.417m65.375 35.016c.741 0 1.477-.075 2.182-.198a11.531 11.531 0 0 0 8.707-7.12 18.39 18.39 0 0 0 0-13.463 11.538 11.538 0 0 0-8.707-7.124 12.427 12.427 0 0 0-4.376 0 11.531 11.531 0 0 0-8.702 7.122 18.381 18.381 0 0 0-1.274 6.73c0 2.377.452 4.646 1.274 6.734a11.522 11.522 0 0 0 8.702 7.12 12.512 12.512 0 0 0 2.194.199M125.88 159.36c0-12.274 9.946-22.228 22.228-22.228 12.268 0 22.224 9.95 22.224 22.228-.001 12.266-9.956 22.226-22.224 22.226-12.282 0-22.228-9.96-22.228-22.226zm108.797 4.37-6.174-16.566-6.182 16.566h12.356m2.737 7.336h-17.847l-3.433 9.233h-10.496l16.986-41.933h11.738l16.992 41.933h-10.483zm-29.004-32.67h-36.028v7.966h13.304l-.004 33.963h9.438l-.004-33.963h13.294v-7.966M166.976 5.883C155.451 2.16 141.164 0 125.677 0 110.19 0 95.903 2.161 84.378 5.883c-30.614 9.844-51.624 30.254-51.624 53.784 0 33.136 41.54 60.148 92.923 60.148 51.264 0 92.923-26.892 92.923-60.148 0-23.53-21.01-43.94-51.624-53.784zm-41.299 88.12c-7.683 0-13.926-15.007-14.286-33.975 4.562.48 9.364.6 14.286.6 4.922 0 9.725-.24 14.287-.6-.36 18.968-6.603 33.975-14.287 33.975Zm-13.326-48.742c2.04-13.326 7.203-22.69 13.326-22.69 6.003 0 11.165 9.364 13.326 22.69-4.202.36-8.764.6-13.326.6-4.562 0-9.004-.24-13.326-.6zm34.816-1.08c-3.121-20.77-11.525-35.777-21.49-35.777-9.964 0-18.368 14.887-21.49 35.776-18.848-3.001-32.055-9.604-32.055-17.408 0-10.565 24.012-19.088 53.545-19.088 29.534 0 53.545 8.523 53.545 19.088 0 7.804-13.206 14.527-32.055 17.408zM46.321 57.505c0-10.204 3.961-19.689 10.805-27.972-.12.6-.12 1.2-.12 1.68 0 12.846 19.208 23.651 45.98 27.733v2.881c0 23.771 6.604 43.94 15.728 50.904C78.135 110.33 46.32 86.56 46.32 57.506zm86.32 55.346c9.123-6.963 15.727-27.133 15.727-50.904v-2.88c26.772-3.963 45.98-14.888 45.98-27.734 0-.6 0-1.2-.12-1.68 6.844 8.163 10.806 17.768 10.806 27.973 0 28.933-31.815 52.704-72.394 55.225z" />
            </svg>
            <span className="text1">Welcome in</span>
            <span className="text2">TOYOTA | Land cruiser</span>
          </div>
          <audio ref={audioRef} src={Caraudio}></audio>
        </div>
        <button onClick={handlePlayAudio} className="play-button"></button>
      </div>
    </>
  );
};

export default Preloader;
