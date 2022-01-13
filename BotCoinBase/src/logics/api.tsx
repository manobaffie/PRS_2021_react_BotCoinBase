import { Component } from 'react';
import crypto from 'crypto';

export interface PropsApi {
  api_key: string;
  secret_key: string;
}

interface State {
}

class Api extends Component<PropsApi, State> {
  constructor(props: PropsApi) {
    super(props);
  }

  Headers(method: string, path: string, body: string) {
    let timesTamp = String(Number(Date.now())).slice(0, -3);

    console.log(this.props.api_key, this.props.secret_key);

    let sign = crypto.createHmac(
      'sha256',
      this.props.secret_key
    ).update(
      timesTamp + method + path + (method == 'GET' ? '' : body)
    ).digest(
      'hex'
    );

    let headers = {
      Accept: 'application/json',
      'CB-ACCESS-SIGN': sign,
      'CB-ACCESS-TIMESTAMP': timesTamp,
      'CB-ACCESS-KEY': this.props.api_key,    
    }
    return (headers);
  }

  Request(url: string, path: string, method: string, body: string) {

    let headers = this.Headers(method, path, body);

    let requestGet = {
      method: method,
      headers: headers,
    }

    let requestPost = {
      method: method,
      headers: headers,
      body: body,
    }

    return(fetch(url + path, (method == 'GET' ? requestGet : requestPost)
    ).then((resp) => resp.json()).then((json) => {
      return (json);
    }).catch((err) => {
      console.log(err);
    }));
  }

  User() {
    return(this.Request('https://api.coinbase.com', '/v2/user', 'GET', ''));
  }
}

export default Api;
