import React, { Component } from 'react';
import postApiClient from '../../services/post-api-client';
import DataTable from '../common/DataTable';
import LoaderAnimation from '../common/LoaderAnimation';

class AjaxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], message: "Loading Data, please wait...", flag: false };
    }

    render() {
        return (
            <>
                <div className="row mt-5">
                    <h4 className="text-warning text-center text-uppercase font-weight-bold">{this.state.message}</h4>
                </div>

                {
                    !this.state.flag
                    && <LoaderAnimation />
                    || <DataTable items={this.state.posts}>
                        <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
                    </DataTable>
                }
            </>
        );
    }

    componentDidMount() {
        postApiClient.getAllPosts().then(data => {
            this.setState({ posts: [...data], message: "", flag: true });
        }).catch(eMsg => {
            this.setState({ posts: [], message: eMsg, flag: true });
        });
    }
}

export default AjaxComponent;