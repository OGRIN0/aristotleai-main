export class Result {
    constructor(isOk, value) {
      this.isOk = isOk;
      this.value = value;
    }
  
    static Ok(value) {
      return new Result(true, value);
    }
  
    static Err(error) {
      return new Result(false, error);
    }
  
    isOk() {
      return this.isOk;
    }
  
    isErr() {
      return !this.isOk;
    }
  
    unwrap() {
      if (this.isOk) {
        return this.value;
      } else {
        throw new Error(`Tried to unwrap an Err value: ${this.value}`);
      }
    }
  
    unwrapErr() {
      if (this.isErr) {
        return this.value;
      } else {
        throw new Error(`Tried to unwrapErr an Ok value: ${this.value}`);
      }
    }
  
    match({ Ok, Err }) {
      if (this.isOk) {
        return Ok(this.value);
      } else {
        return Err(this.value);
      }
    }
  }


  export class MessageUserType {
    static USER = "user";
    static AI = "ai"
  }


  