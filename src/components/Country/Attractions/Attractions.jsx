import React, { Component } from "react";
import Slider from "react-slick";
import './Attractions.css';
import attractionDescription from './attractionsDescription';

export default class Attractions extends Component {

  itemsArray = [1, 2, 3, 4, 5, 6]
    render() {
      const country = this.props.country.replace(/\s/g, '')
      console.log(country)
      const baseUrl=`/img/${country}`
      const settings = {
        customPaging: function(i) {
          return (
            <a href="/">
              <div style={{backgroundImage: `url(${baseUrl}/${i + 1}.jpeg)`}} className= "attractionSlider__preview"></div>
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="attractionSlider">
          <h2 className="attractionSlide__title">Tourist Attractions</h2>
          <Slider {...settings}>
            {this.itemsArray.map((item, index) => {
              return (
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'778px'}}>
                  <div>
                    <h3>{attractionDescription[country][index].name}</h3>
                    <p className='attractionDescription'>{attractionDescription[country][index].description}</p>
                  </div>
                  <div style={{backgroundImage: `url(${baseUrl}/${index+1}.jpeg)`}} className="attractionSlider__img"></div>
                </div>
              )
            })}
          </Slider>
        </div>
      );
    }
  }
