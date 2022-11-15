import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
function GMap() {
  return (
    <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
  )
}

export default GMap
