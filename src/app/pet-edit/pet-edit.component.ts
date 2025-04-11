import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Pet } from '../pet';
import { PetService } from '../pet.service';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-pet-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pet-edit.component.html',
  styleUrl: './pet-edit.component.css'
})
export class PetEditComponent implements OnInit {
  ownerId!: number;
  petId!: number;
  pet!: Pet;
  ownerName!: string;
  petTypes: string[] = ['bird', 'cat', 'dog', 'hamster', 'lizard', 'snake'];
  formattedDOB!: string; // used for date input binding

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private ownerService: OwnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ownerId = +this.route.snapshot.paramMap.get('ownerId')!;
    this.petId = +this.route.snapshot.paramMap.get('petId')!;

    this.petService.getPetById(this.ownerId, this.petId).subscribe((data) => {
      this.pet = data;
      this.formattedDOB = this.formatDateToInput(new Date(data.petDOB));
    });

    this.ownerService.getOwnerById(this.ownerId).subscribe((ownerData) => {
      this.ownerName = `${ownerData.firstName} ${ownerData.lastName}`;
    });
  }

  onSubmit(): void {
    this.pet.petDOB = new Date(this.formattedDOB); // convert back to Date
    this.petService.updatePet(this.ownerId, this.petId, this.pet).subscribe(() => {
      this.router.navigate([`/owner-detail/${this.ownerId}`]);
    });
  }

  formatDateToInput(date: Date): string {
    const iso = date.toISOString();
    return iso.split('T')[0];
  }
}
