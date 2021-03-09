import s from './Card.module.css'

const Card = ({countryId, capitalIMG, country, capital}) => {
  let cathedral = './img/Russia/cathedral-removebg.png'
  let img = {
    'backgroundImage': `url(${capitalIMG})`
  };

  return (
    <div className={s.card}>
      <div class={s.background} style={img}></div>
      <img className={s.img} src={cathedral}/>
      <div className={s.text}>{country}<br/>{capital}</div>      
    </div>
  )
};

export default Card