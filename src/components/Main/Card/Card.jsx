import s from './Card.module.css'

const Card = ({countryId, capitalIMG, country, capital}) => {

  let img = {
    'backgroundImage': `url(${capitalIMG})`
  };

  return (
    <div style={img} className={s.card}>
      <div className={s.text}>{country}<br/>{capital}</div>
    </div>
  )
};

export default Card