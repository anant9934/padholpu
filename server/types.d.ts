import { User as DefaultUser } from "@shared/schema";
declare global {
  namespace Express {
    interface User extends DefaultUser {}
  }
}
