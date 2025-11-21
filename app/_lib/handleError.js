export class ServerActionError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 400;
    this.isOperational = true; // THIS IS OPEARATIONAL ERROR
  }
  notFound() {
    this.statusCode = 404;
    return { succes: false, message: this.message };
  }
  genericError() {
    this.statusCode = 400;
    return { succes: false, message: this.message };
  }
}
