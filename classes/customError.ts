export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CustomError';
  }
}

export class NetworkError extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}
