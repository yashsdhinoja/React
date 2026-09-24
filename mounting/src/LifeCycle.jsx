import React from 'react';
class Lifecycle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={count :0};
        console.log('1. Constructor');
    }

    static getDrivedStateFromProps(props, state)
    {
        console.log('2. getDrivedStateFromProps');
        return null;
    }

    render()
    {
        console.log('3. render');
        return(
            <h1>Count : {this.state.count}</h1>
        );
    }

    componentDidMount()
    {
        console.log('4. ComponentDidMount');
        setTimeout(()=> {
            this.setState({count :1});
        },2000);
        return null;
    }

    shouldComponentUpdate()
    {
        console.log('5. shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('6. getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate()
    {
        console.log('7. coponentDidUpdate');
        return null;
    }

    componentnWillUnmount() {
        console.log('8. componentnWillUnmount');
        return null;
    }

}
export default Lifecycle