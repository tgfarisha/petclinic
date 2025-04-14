export interface Visit {
    id?: number;
    visitDesc: string;
    visitDate: Date;
    pet?: {
      id: number;
    };
  }
  