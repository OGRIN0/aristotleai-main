export class MessageGen {
    constructor(type, from, message) {
      this.type = type;
      this.from = from;
      this.message = message;
    }
  }
  
  export class MessageFrom {
    static USER = "user";
    static AI = "ai";
  }