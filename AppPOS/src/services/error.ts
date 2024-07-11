
export class CustomError extends Error {
  status_code: number;
  constructor(message: string, status_code: number) {
    super(message);
    this.name = "CustomError";
    this.status_code = status_code;
  }
}