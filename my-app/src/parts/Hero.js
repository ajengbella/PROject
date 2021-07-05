import React from "react";
import Frameimg from "../assets/image/Frameimg.jpg";
import heroimg from "../assets/image/heroimg.jpg";
import icCities from "../assets/image/icon-hero/icCities.svg";
import icTraveler from "../assets/image/icon-hero/icTraveler.svg";
import icTreasures from "../assets/image/icon-hero/icTreasures.svg";

import Button from "../elemens/Button";
import formatNumber from "../utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className='container pt-4'>
      <div className='row align-item-center'>
        <div className='col-auto pr-5' style={{ width: 530 }}>
          <h1 className='font-weight-bold line-height-1 mb-3'>
            Forget Busy Work,
            <br />
            Start Next Vacation
          </h1>
          <p
            className='mb-4 font-weight-light text-gray-500 w-75 font-size-s'
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family.Time to
            make another memorabel moments.
          </p>
          <Button
            className='btn px-4'
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className='row' style={{ marginTop: 80 }}>
            <div className='col-auto'>
              <img
                src={icTraveler}
                alt={`${props?.data?.travelers || ""} Travelers`}
              />
              <h6 className='mt-3'>
                {formatNumber(props.data.travelers)}
                {""}
                <span className='text-grays-500 font-weight-light'>
                  Travelers
                </span>
              </h6>
            </div>
            <div className='col-auto'>
              <img
                src={icTreasures}
                alt={`${props?.data?.treasures || ""} Treasures`}
              />
              <h6 className='mt-3'>
                {formatNumber(props.data.treasures)} {""}
                <span className='text-grays-500 font-weight-light'>
                  Treasures
                </span>
              </h6>
            </div>
            <div className='col-auto'>
              <img src={icCities} alt={`${props?.data?.cities || ""} Cities`} />
              <h6 className='mt-3'>
                {formatNumber(props.data.cities)} {""}
                <span className='text-grays-500 font-weight-light'>Cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className='col-6 pl-5 pt-4 ml-3'>
          <div style={{ width: 565, height: 370 }}>
            <img
              src={Frameimg}
              alt='Room With Couches'
              className='img-fluid frame position-absolute'
              stayl={{ margin: "0 -15px -15px 0" }}
            />
            <img
              src={heroimg}
              alt='Room With Couches'
              className='img-fluid position-absolute'
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
//props?.data?.travelers
//props !== null ? (props.data !== null ? props.data.travelers : "") : "";
