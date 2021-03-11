import s from "./Card.module.css";
import { useSpring, animated } from "react-spring";
import { useRef, useState } from "react";

const calc = (x, y) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
  2,
];

const ContentCard = ({ capitalIMG }) => {
  const ref = useRef();

  const [prop, setProp] = useSpring(() => ({
    xys: [45, 70, 1],
    config: { mass: 100, tension: 400, friction: 250, precision: 0.00001 },
  }));

  const trans = (x, y) => `translate3d(-${x / 40}px,-${y / 1}px, 0.1)`;

  return (

    <animated.div
      ref={ref}
      class={s.items}
      onMouseLeave={() => {
        setProp({ xys: [0, 0, 1] });
      }}
      onMouseMove={({ clientX, clientY }) => {
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 40; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1, // Scale
        ];

        // Update values to animate to
        setProp({ xys: xys });
      }}
      // onMouseMove={({ clientX: x, clientY: y }) => setProp({ xys: calc(x, y) })}
      // onMouseLeave={() => {
      //   setProp({ xys: [0, 0, 1] });
      // }}
      style={{
        backgroundImage: `url(${capitalIMG})`,
        // backgroundPosition: prop.xys.interpolate((x, y, s) => `${x}% ${y}%`),
        transform: prop.xys.interpolate(
          (x, y, s) => `translateX(${x}px) translateY(${y}px)`
        ),
      }}
    ></animated.div>
  );
};

export default ContentCard;
