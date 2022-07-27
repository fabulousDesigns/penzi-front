import React from "react";
import ImageBanner from "../assets/couple.png";
import ImageBannerAnimate from "../assets/anim-5.png";

function BannerIntro() {
  return (
    <div className="banner__intro">
      <div className="column__right">
        <img src={ImageBanner} alt="banner" className="img-love" />
        <img
          src={ImageBannerAnimate}
          alt="banner"
          className="img-anim"
          width={"50px"}
        />
      </div>
      <div className="column__left">
        <h2>Penzi Dating Platform</h2>
        <p className="lead">
          Welcome to our dating service with 6000 potential dating partners!
          Click on register to opt-in or login to your account and get hooked to
          your soulmate today.
        </p>
      </div>
    </div>
  );
}

export default BannerIntro;
