import {connect} from 'react-redux'
import Card from './Card'

const CardContainer = (props) => {
  return (
    <Card {...props}/>
  )
}

const mapStateToProps = (state) => {
  return {
      mainPage: state.mainPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)