import { Component, OnInit } from '@angular/core';
import { Owner } from '../owner';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from '../owner.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-owner-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './owner-detail.component.html',
  styleUrl: './owner-detail.component.css'
})
export class OwnerDetailComponent implements OnInit {
  ownerId!: number;
  owner: Owner | undefined;
  pets: Pet[] = [];

  constructor(
    private route: ActivatedRoute,
    private ownerService: OwnerService,
    private petService: PetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ownerId = +this.route.snapshot.paramMap.get('id')!;
    this.getOwnerDetails();
    this.getPetsForOwner();
  }

  getOwnerDetails(): void {
    this.ownerService.getOwnerById(this.ownerId).subscribe((data) => {
      this.owner = data;
    });
  }

  getPetsForOwner(): void {
    this.petService.getPetsOwnerId(this.ownerId).subscribe((data) => {
      this.pets = data;
    });
  }

  editOwner(): void {
    this.router.navigate(['/owner-edit', this.ownerId]);
  }

  addPet(): void {
    this.router.navigate([`/owner-detail/${this.ownerId}/pet-add`]);
  }

  editPet(petId: number): void {
    this.router.navigate([`/owner-detail/${this.ownerId}/pet-edit/${petId}`]);
  }
}
