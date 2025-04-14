import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../pet.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-pet-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pet-add.component.html',
  styleUrl: './pet-add.component.css'
})
export class PetAddComponent implements OnInit {
  ownerId!: number;
  pet: Pet = {
    petName: '',
    petType: '',
    petDOB: new Date(),
    owner: { id: this.ownerId },
    visits: []
  };
  ownerName!: string;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private router: Router,
    private ownerService: OwnerService
  ) {}

  ngOnInit(): void {
      this.ownerId = +this.route.snapshot.paramMap.get('id')!;

      this.ownerService.getOwnerById(this.ownerId).subscribe((ownerData) => {
        this.ownerName = `${ownerData.firstName} ${ownerData.lastName}`;
      });
  }

  onSubmit(): void {
    this.petService.addPet(this.ownerId, this.pet).subscribe(() => {
      this.router.navigate([`/owner-detail/${this.ownerId}`]);
    })
  }
}
