declare module 'iyzipay' {

  interface IyzipayOptions {
    apiKey: string;
    secretKey: string;
    uri: string;
  }

  class Iyzipay {
    constructor (options: IyzipayOptions);
  }
  
  export default Iyzipay;
}
