import s from "./Card.module.css";
import { useSpring, animated } from "react-spring";
import { useRef, useState } from "react";


const Card = ({ countryId, capitalIMG, country, capital }) => {
  const divRef = useRef(null);

  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      xys: [0, 0, 1],
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
    };
  });


  return (
    <div className={s.card}>
    <animated.div
      ref={divRef}
      className={s.container}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        const x =
          clientX -
          (divRef.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        const y =
          clientY -
          (divRef.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));


        const dampen = 10;
        const xys = [
          -(y - divRef.current.clientHeight / 2) / dampen,
          (x - divRef.current.clientWidth / 2) / dampen, 
          1.05,
        ];

        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        zIndex: isHovered ? 2 : 1,
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
      }}
    >
      <animated.div
      className={s.items}

      style={{
        backgroundImage: `url(${capitalIMG})`,
        transform: animatedProps.xys.interpolate(
          (x, y, s) => `translateX(${-y}px) translateY(${x}px)`
        ),
      }}
    />
    <div className={s.cardInfo}>
      <h1>{country}</h1>
      <p className={s.text}>{country}</p>
    </div>
    
    </animated.div>
    </div>
  );
};

export default Card;

// let cathedral = "./img/Russia/cathedral-removebg.png";
// let img = {
//   backgroundImage: `url(${capitalIMG})`,
// };

{
  /* <div className={s.card}>
      <div class={s.background} style={img}></div>
      <img className={s.img} src={cathedral}/>
      <div className={s.text}>{country}<br/>{capital}</div>      
    </div> */
}
