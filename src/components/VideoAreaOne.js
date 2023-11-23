import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
const VideoAreaOne = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/*video-area start*/}
      <div
        className='video-area pd-top-120 pd-bottom-120'
        style={{ background: "#080C24" }}
      >
        <div className='video-thumb-wrap '>
          <img src='assets/img/video/1.jpg' alt='Transpro' />
          {/* <span
            className='video-play-btn cursor-pointer'
            data-effect='mfp-zoom-in'
            onClick={() => setOpen(true)}
          >
            <FaPlay />
          </span> */}
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-7'>
              <div
                className='cta-inner-wrap'
                style={{ background: "url(assets/img/video/bg.png)" }}
              >
                <div className='section-title style-white mb-0'>
                  <h4 className='subtitle style-2'>LET’S TALK</h4>
                  <h2 className='title'>
                  REQUIRE ANY ASSISTANCE? </h2>
                
                 
                </div>
                <div className='single-cta-wrap'>
                  <div className='icon'>
                    <FaPhoneAlt />
                  </div>
                  <div className='details'>
                    
                    <h3>+91 98400 54814</h3>
                  </div>
                </div>
                <Link className='btn btn-white' to='/contact'>
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*video-area end*/}
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XM6kTQPzzpQ'
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default VideoAreaOne;
