import { connect } from 'react-redux';
import Main from './Main';


const mapStateToProps = (state) => {
    return {
        mainPage: state.mainPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;