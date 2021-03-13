import React from 'react';
import { connect } from 'react-redux';
import { setCurBYN, setCurUSD, setCurEUR } from '../../../../redux/currency-reducer';
import s from './Currency.module.css';

class CurrencyContainer extends React.Component {

    componentDidMount() {
        const courses = ['BYN', 'USD', 'EUR'];
        const currencySetters = [this.props.setCurBYN, this.props.setCurUSD, this.props.setCurEUR];
        for (let i = 0; i < courses.length; i++) {
            fetch(`https://free.currconv.com/api/v7/convert?q=${this.props.countryCurrency.currency}_${courses[i]}&compact=ultra&apiKey=a138a28584b98a438044`)
            .then(data => data.json())
            .then(res => currencySetters[i](res[`${this.props.countryCurrency.currency}_${courses[i]}`].toFixed(2)))
        }
    }

    render() {
        return (
            <div>
                <div>Currency: {this.props.countryCurrency.currency}</div>
                <div>
                    <div>1 {this.props.countryCurrency.currency} = {this.props.currency.byn} BYN</div>
                    <div>1 {this.props.countryCurrency.currency} = {this.props.currency.usd} USD</div>
                    <div>1 {this.props.countryCurrency.currency} = {this.props.currency.eur} EUR</div>
                </div>
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        countryCurrency: state.mainPage.currentCountry,
        currency: state.currency,
    }
}

export default connect(mapStateToProps, {setCurBYN, setCurUSD, setCurEUR})(CurrencyContainer);
