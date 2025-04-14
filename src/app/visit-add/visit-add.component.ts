import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Visit } from '../visit';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitService } from '../visit.service';
import { Pet } from '../pet';
import { PetService } from '../pet.service';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-visit-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './visit-add.component.html',
  styleUrl: './visit-add.component.css'
})
export class VisitAddComponent implements OnInit {
  ownerId!: number;
  petId!: number;
  visit: Visit = {
    visitDate: new Date(),
    visitDesc: ''
  };

  pet!: Pet;
  ownerName!: string;

  constructor(
    private route: ActivatedRoute,
    private visitService: VisitService,
    private petService: PetService,
    private ownerService: OwnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ownerId = +this.route.snapshot.paramMap.get('ownerId')!;
    this.petId = +this.route.snapshot.paramMap.get('petId')!;

    //Get pet details (include visits)
    this.petService.getPetById(this.ownerId, this.petId).subscribe((data) => {
      this.pet = data;
      this.pet.visits = this.getSortedVisits(this.pet.visits || []);
    });

    // Get Owner Name
    this.ownerService.getOwnerById(this.ownerId).subscribe((data) => {
      this.ownerName = `${data.firstName} ${data.lastName}`;
    });
  }

  getSortedVisits(visits: Visit[]): Visit[] {
    return visits.slice().sort((a, b) => new Date(b.visitDate).getTime() - new Date(a.visitDate).getTime());
  }

  onSubmit(): void {
    this.visitService.addVisit(this.ownerId, this.petId, this.visit).subscribe(() => {
      this.router.navigate([`/owner-detail/${this.ownerId}`]);
    });
  }
}