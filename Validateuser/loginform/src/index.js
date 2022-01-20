import React from 'react'
import ReactDOM from 'react-dom'
import Login from './details'

class App extends React.Component{

    render(){
        return(
            <Login/>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'))