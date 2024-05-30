class ApiError extends Error {
    constructor(statusCode, message) {
      super(message);
      this.statusCode = statusCode;
      this.logError();
    }
  
    logError() {
      console.error(`[${new Date().toISOString()}] ${this.statusCode} - ${this.message}\n${this.stack}`);
    }
  }
  
  export { ApiError };
  