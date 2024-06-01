class ApiResponse {
  constructor(statusCode, message, data = null) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.logResponse();
  }

  logResponse() {
    console.log(`[${new Date().toISOString()}] ${this.statusCode} - ${this.message}`);
  }

  send(res) {
    res.status(this.statusCode).json({
      statusCode: this.statusCode,
      message: this.message,
      data: this.data
    });
  }
}

export default ApiResponse;
