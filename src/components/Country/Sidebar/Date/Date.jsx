import React from 'react'
import { connect } from 'react-redux';
import s from './Date.module.css';

class  DateContainer extends React.Component {



    render() {
        console.log(this.props)
        return (
            <div>
                <div>date now</div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateContainer);