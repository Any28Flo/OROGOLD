import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '500px'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 19.414852,
                    lng: -99.1435026
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey:  `${process.env.REACT_APP_API_GOOGLEMAPS}`
})(MapContainer);