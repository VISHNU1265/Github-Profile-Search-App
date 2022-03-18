import React from 'react';
import axios from 'axios';
import {IProfile} from "./models/IProflle";
import {IRepo} from "./models/IRepo";
import GithubProfile from "./profile/GithubProfile";
import GithubRepos from "./repos/GithubRepos";

interface  IProps{

}

interface IState{
    githubUserName:string;
    profile:IProfile,
    repos:IRepo[]
}

class GithubProfileSearchApp extends React.Component<IProps,IState>{

    constructor(props:IProps) {
        super(props);
        this.state={
            githubUserName:"",
            profile:{} as IProfile,
            repos:[] as IRepo[]
        }
    }

    changeInput = (event:React.ChangeEvent<HTMLInputElement>):void=>{
        this.setState({
            ...this.state,
            githubUserName:event.target.value
        })
    }

    submitSearch = (event:React.FormEvent<HTMLFormElement>):void=>{
        event.preventDefault();
        this.searchProfile(this.state.githubUserName);
        this.searchRepos(this.state.githubUserName);
    }

    //search for profile of a user
    searchProfile = (githubUser:string):void=>{
        let dataURL = `https://api.github.com/users/${githubUser}?Client_ID=${process.env.CLIENT_ID}&Client_Secret=${process.env.CLIENT_SECRET}`;
        axios.get(dataURL).then((response)=>{
            this.setState({
                ...this.state,
                profile:response.data
            })
        }).catch((err)=>{
            console.error(err);
        })
    }

    //search for repos of a user
    searchRepos = (githubUser:string):void=>{
        let dataURL = `https://api.github.com/users/${githubUser}/repos?Client_ID=${process.env.CLIENT_ID}&Client_Secret=${process.env.CLIENT_SECRET}`;
        axios.get(dataURL).then((response)=>{
            this.setState({
                ...this.state,
                repos:response.data
            })
        }).catch((err)=>{
            console.error(err);
        })
    }

    render() {
        return (
            <React.Fragment>
                <section className="mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-primary">Github Profile Search App</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <form onSubmit={this.submitSearch}>
                                    <div className="d-flex bd-highlight align-items-center">
                                        <div className="flex-grow-1 ">
                                            <div className="form-group ">
                                                <input
                                                    onChange={this.changeInput}
                                                    type={this.state.githubUserName} placeholder="Github UserName" className="bg-light text-black p-2 form-control"/>
                                            </div>
                                        </div>
                                        <div>
                                            <input type="submit" value="Search" className="btn px-5 btn-success"/>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {
                                    Object.keys(this.state.profile).length>0 &&
                                    <GithubProfile profile={this.state.profile}></GithubProfile>
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {
                                    this.state.repos.length>0 &&
                                    <GithubRepos repos={this.state.repos}></GithubRepos>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }



}

export default GithubProfileSearchApp;
