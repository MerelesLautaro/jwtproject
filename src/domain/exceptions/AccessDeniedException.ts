export class AccessDeniedException extends Error {
  constructor () {
    super("Access Denied");
  }
}