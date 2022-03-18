import React from 'react';
import {IProfile} from "../models/IProflle";

interface  IProps{
    profile:IProfile
}

interface IState{

}

class GithubProfileCard extends React.Component<IProps,IState>{

    render() {
        let {profile} = this.props;
        return (
            <React.Fragment>
                <div className="card">
                    <img src={profile.avatar_url} alt="" className="card-img"/>
                    <div className="card-body">
                        <p className="h4">{profile.name}</p>
                        <small>{profile.bio}</small><br/>
                        <a href={profile.html_url} target="_blank" className="btn btn-amber " rel="noreferrer" >Profile</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    constructor(props:IProps) {
        super(props);
    }

}

export default GithubProfileCard;
