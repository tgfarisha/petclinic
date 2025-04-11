import { Owner } from './owner';

export class Pet {
  id?: number;
  petName: string = '';
  petType: string = '';
  petDOB: Date = new Date();
  owner?: Owner;

  constructor(
    id?: number,
    petName: string = '',
    petType: string = '',
    petDOB: Date = new Date(),
    owner?: Owner
  ) {
    this.id = id;
    this.petName = petName;
    this.petType = petType;
    this.petDOB = petDOB;
    this.owner = owner;
  }
}
