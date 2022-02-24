import React, { useState } from 'react'
import { connect } from 'react-redux'

function Bat(props) {
    // console.log(props)
    // const [bat, setBat] = useState(50)
    return (
        <div>
            <h1>Bats : {props.bats}</h1> 
            <button onClick={props.buyBat}>Buy Bat</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bats: state.bat.bats
    }   
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyBat : () => dispatch({type: "BUY_BAT"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bat)