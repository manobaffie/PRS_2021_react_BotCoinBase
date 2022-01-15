import crypto from 'crypto';

class Api {

  private static _instance: Api;

  private api_key: string;
  private secret_key: string;
  private connected: boolean;

  private constructor() {
    if (Api._instance) {
      throw new Error("Error: Instantiation failed: Use \'Class\'.Instance() instead of new.");
    }

    this.api_key = '';
    this.secret_key = '';
    this.connected = false;
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

  public get isConnected() : boolean {
    return this.connected;
  }
  

  private Headers(method: string, path: string, body: string) {
    const timesTamp = String(Number(Date.now())).slice(0, -3);

    const sign = crypto.createHmac(
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
      'CB-VERSION': '2021-12-18'
    }
    return (headers);
  }

  private Request(url: string, path: string, method: string, body: string) {

    const headers = this.Headers(method, path, body);

    const requestGet = {
      method: method,
      headers: headers,
    }

    const requestPost = {
      method: method,
      headers: headers,
      body: body,
    }

    return(fetch(url + path,
      (method == 'GET' ? requestGet : requestPost)
    ).then((resp) => resp.json()).then((json) => {
      return (json);
    }).catch((err) => {
      console.log(err);
    }));
  }

  User() {
    return(
      this.Request('https://api.coinbase.com', '/v2/user', 'GET', '')
    );
  }
}

export default Api;
