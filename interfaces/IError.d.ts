export interface Ierror {
  message: string;
  retry: () => void;
}
