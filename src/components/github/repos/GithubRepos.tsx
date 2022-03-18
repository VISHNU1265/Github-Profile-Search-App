import React from 'react';
import {IRepo} from "../models/IRepo";

interface  IProps{
    repos:IRepo[]
}

interface IState{

}

class GithubRepos extends React.Component<IProps,IState>{

    render() {
        let {repos} = this.props;
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        <p className="h4">Your Repositories</p>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {
                                repos.map(repo => {
                                    return(
                                        <li className="list-group-item" key={repo.git_url}>
                                            <div className="d-flex justify-content-between">
                                                    <span className="h5 w-75">
                                                        <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                                                    </span>
                                                <span className="badge badge-success">{repo.stargazers_count} Stars </span>
                                                <span className="badge badge-warning">{repo.watchers_count} Watchers </span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    constructor(props:IProps) {
        super(props);
    }

}

export default GithubRepos;
