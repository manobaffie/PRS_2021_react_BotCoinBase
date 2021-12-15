import React, { Component } from 'react';

export interface Props {
  Key: string;
}

interface State {

}

class Api extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  requestAuht() {
    fetch('https://api.coinbase.com/v2/')
  }

}

export default Api;


// const requestHeaders: HeadersInit = new Headers();
// requestHeaders.set('Content-Type', 'application/json');

// const responseLogin = await fetch('URL', {
//   method: 'POST',
//   headers: requestHeaders,
//   body: requestBody
// });