import crypto from 'crypto';

// export interface PropsApi {
//   api_key: string;
//   secret_key: string;
// }

// interface State {
// }

class Api {

  private static _instance: Api;

  private api_key: string;
  private secret_key: string;

  private constructor() {
    // if (Api._instance) {
    //   throw new Error("Error: Instantiation failed: Use Api.Instance() instead of new.");
    // }

    this.api_key = '';
    this.secret_key = '';
  }

  public static get Instance() {
    return (this._instance || (this._instance = new this()));
  }

  public set ApiKey(key: string) {
    this.api_key = key;
  }

  public set SecretKey(key: string) {
    this.secret_key = key;
  }

  private Headers(method: string, path: string, body: string) {
    let timesTamp = String(Number(Date.now())).slice(0, -3);

    console.log(this.api_key, this.secret_key);

    let sign = crypto.createHmac(
      'sha256',
      this.secret_key
    ).update(
      timesTamp + method + path + (method == 'GET' ? '' : body)
    ).digest(
      'hex'
    );

    let headers = {
      Accept: 'application/json',
      'CB-ACCESS-SIGN': sign,
      'CB-ACCESS-TIMESTAMP': timesTamp,
      'CB-ACCESS-KEY': this.api_key,    
    }
    return (headers);
  }

  private Request(url: string, path: string, method: string, body: string) {

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
