import React from 'react'
import { connect } from 'react-redux';
import { setYearAC, setMonthNameAC, setDataAC, 
         setWeekdayNameAC, setHourAC, setMinAC, setSecAC } from '../../../../redux/date-reducer';
import s from './Date.module.css';

class  DateContainer extends React.Component {

    componentDidMount() {
        
        window.showDate = setInterval(() =>{
            this.showDate()
        }, 1000)
    }

    showDate() {
        let today = new Date(),
        year = today.getFullYear(),
        month = today.getMonth(),
        data = this.addZero(today.getDate()),
        day = today.getDay(),
        hour = this.addZero(today.getHours()),
        min = this.addZero(today.getMinutes()),
        sec = this.addZero(today.getSeconds());

        let weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let weekdayName = weekdayNames[day];

        let monthNames = ['January', 'February', 'March', 'April',
                          'May', 'June', 'July', 'August', 'September',
                          'October', 'November', 'December'];
        let monthName = monthNames[month]; 

        this.props.setYear(year);
        this.props.setMonthName(monthName);
        this.props.setData(data);
        this.props.setWeekdayName(weekdayName);
        this.props.setHour(hour);
        this.props.setMin(min);
        this.props.setSec(sec);
    }

    addZero(n) {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }

    componentWillUnmount() {
        clearInterval(window.showDate);
    }

    render() {
        return (
            <div className={s.dateContainer}>
                <div>{this.props.countryData.capital}</div>
                <div>
                    <span>{this.props.date.hour}:</span>
                    <span>{this.props.date.min}:</span>
                    <span>{this.props.date.sec}</span>
                </div>
                <div>
                    <span>{this.props.date.weekdayName}, </span>
                    <span>{this.props.date.data}.</span>
                    <span>{this.props.date.monthName} </span>
                    <span>{this.props.date.year}</span>
                </div>
                
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        countryData: state.countryData.countryData,
        date: state.date
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setYear: (year) => {
            dispatch(setYearAC(year));
        },
        setMonthName: (monthName) => {
            dispatch(setMonthNameAC(monthName));
        },
        setData: (data) => {
            dispatch(setDataAC(data));
        },
        setWeekdayName: (weekdayName) => {
            dispatch(setWeekdayNameAC(weekdayName));
        },
        setHour: (hour) => {
            dispatch(setHourAC(hour));
        },
        setMin: (min) => {
            dispatch(setMinAC(min));
        },
        setSec: (sec) => {
            dispatch(setSecAC(sec));
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateContainer);