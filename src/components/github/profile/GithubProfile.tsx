import React from 'react';
import {IProfile} from "../models/IProflle";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";

interface  IProps{
    profile:IProfile
}

interface IState{

}

class GithubProfile extends React.Component<IProps,IState>{

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-3">
                        <GithubProfileCard profile={this.props.profile}></GithubProfileCard>
                    </div>
                    <div className="col-md-9">
                        <GithubProfileDetails profile={this.props.profile}></GithubProfileDetails>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    constructor(props:IProps) {
        super(props);
    }

}

export default GithubProfile;
