//todo: do zrobienia
import React, { Component } from 'react';

class PhotoContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [{}]
        };
    }

    componentDidMount() {
        this.setState({
            photos: this.props.photos
        })

        console.log(this.state);
    }
    render() {
        return (
            <div>
                Ok.
            </div>
        );
    }
}

export default PhotoContainer;