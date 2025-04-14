import { Owner } from './owner';
import { Visit } from './visit'; 

export class Pet {
  id?: number;
  petName: string = '';
  petType: string = '';
  petDOB: Date = new Date();
  owner?: Partial<Owner>;
  visits: Visit[] = [];
  
  constructor(
    id?: number,
    petName: string = '',
    petType: string = '',
    petDOB: Date = new Date(),
    owner?: Owner,
    visits: Visit[] = []
  ) {
    this.id = id;
    this.petName = petName;
    this.petType = petType;
    this.petDOB = petDOB;
    this.owner = owner;
    this.visits = visits;
  }
}


