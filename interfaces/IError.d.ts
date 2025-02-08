export interface IError {
  error?: Error;
  customError?: Error;
  retry?: () => void;
}
