import React, {Component} from 'react';


class background extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: "portfolio_react/img/DJI_01842.mp4"
        }
    }

    render () {
        return (
            <video className="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default background ;





