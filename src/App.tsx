import React from 'react';
import "./App.css"
import GithubProfileSearchApp from "./components/github/GithubProfileSearchApp";

interface IProps{

}

interface IState{
}

class App extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);


    }

    render() {
        return (
            <React.Fragment>
                <GithubProfileSearchApp></GithubProfileSearchApp>
            </React.Fragment>

        );
    }

}


export default App;
