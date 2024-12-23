import React from 'react'

class LifeCycleMethods extends React.Component {
    constructor(props){
        super(props)

        console.log("Component constructed")

        this.state = {
            count : 0
        }

        this.setCount = this.setCount.bind(this)
    }

    setCount () {
        this.setState({
            count : this.state.count + 1
        })
    }

    render() {
        return (
            <>
            <p>Count : {this.state.count}</p>

            <button onClick={this.setCount}>count</button>

            {console.log("component rendered")}
            </>
        )
    }


    componentDidMount(){
        console.log("component mounted")
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log("component updated")
        }
    }

    shouldComponentUpdate(nextProp, nextState) {
        if(nextState.count <= 6){
            return true
        }else{
            return false
        }
    }

    componentWillUnmount(){
        console.log("component unmounted")
    }
}

export default LifeCycleMethods
