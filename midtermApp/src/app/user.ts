export interface User {
    id: number;   // required (you always use it)
    name?: string;
    position?: string;
    department?: string;
    details?: {
      role: [number, string];
    };
  }