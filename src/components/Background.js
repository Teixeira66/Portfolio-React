import React, {Component} from 'react';


class background extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: "https://source.unsplash.com/1223x840/?nature"
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





