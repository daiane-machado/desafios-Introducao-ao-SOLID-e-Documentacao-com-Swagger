import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  admin = false;
  email: string;
  created_at = new Date();
  updated_at = new Date();

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}

export { User };
