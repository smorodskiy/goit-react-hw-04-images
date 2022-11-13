import React from 'react';
import { Component } from 'react';

// Loader comp
import { TailSpin } from 'react-loader-spinner';

// Check types of props
import { OverlayTailSpin } from './Loader.styled';

class Loader extends Component {
  render() {
    return (
      <OverlayTailSpin>
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </OverlayTailSpin>
    );
  }
}

export { Loader };
