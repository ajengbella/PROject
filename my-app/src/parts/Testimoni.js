import React from "react";
import TestimonyAccent from "../assets/image/testimonial-landingpages.jpg";
import Button from "../elemens/Button";
import landingPages from "../json/JSON/landingPage.json";

import Star from "../star";

export default function Testimoni({ data }) {
  return (
    <section className='container'>
      <div className='row align-items-center'>
        <div className='col-auto' style={{ marginRight: 70 }}>
          <div
            className='testimonial-hero'
            style={{ margin: `-30px 0 0 -30px` }}
          >
            <img
              src={data.imageUrl}
              alt='Testimonial'
              className='position-absolute'
              style={{ zIndex: 1 }}
            />
            <img
              src={TestimonyAccent}
              alt='Testimonial frame'
              className='position-absolute'
              style={{ margin: `30px 0 0 30px`, zIndex: 1 }}
            />
          </div>
        </div>
        <div className='col'>
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={4} />
          <h5 className='h2 font-weight-light line-height-2 my-3'>
            <br />
            {data.content}
          </h5>
          <span className='text-grays-500'>
            {data.familyName}, {data.familyOccupation}
          </span>
          <div>
            <Button
              className='btn px-5'
              style={{ marginTop: 40 }}
              hasShadow
              isPrimary
              type='link'
              href={`/testimoni/${data._id}`}
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
