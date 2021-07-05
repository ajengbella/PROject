import React from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function Star({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1;

  const star = [];
  let leftPos = 0;
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className='star'
        key={`star-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }
  if (decimals > 0 && value <= 5)
    star.push(
      <div
        className='star'
        key={"starWithDecimal"}
        style={{
          left: leftPos,
          height: height,
          width: decimals * width - spacing,
        }}
      ></div>
    );
  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className='star placeholder'
        key={`star placeholder-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRidht: spacing,
        }}
      ></div>
    );
  }
  return (
    <>
      <div class='rate'>
        <input type='radio' id='star5' name='rate' value='5' />
        <label for='star5' title='text'>
          5 stars
        </label>
        <input type='radio' id='star4' name='rate' value='4' />
        <label for='star4' title='text'>
          4 stars
        </label>
        <input type='radio' id='star3' name='rate' value='3' />
        <label for='star3' title='text'>
          3 stars
        </label>
        <input type='radio' id='star2' name='rate' value='2' />
        <label for='star2' title='text'>
          2 stars
        </label>
        <input type='radio' id='star1' name='rate' value='1' />
        <label for='star1' title='text'>
          1 star
        </label>
      </div>
      ;
    </>
  );
}
Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};
// {
//   <div className={["stars ", className].join("")} style={{ height: height }}>
//     {starPlaceholder}
//     {star}
//   </div>;
// }
