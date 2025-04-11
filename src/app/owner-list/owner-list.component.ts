import { Component, OnInit } from '@angular/core';
import { Owner } from '../owner';
import { OwnerService } from '../owner.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owner-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './owner-list.component.html',
  styleUrl: './owner-list.component.css'
})
export class OwnerListComponent implements OnInit {
  owners: Owner[] = [];

  constructor(private ownerService: OwnerService, private router: Router) {
  }

  ngOnInit(): void {
      this.ownerService.getAllOwners().subscribe((data) => {
        this.owners = data;
      });
  }

  viewOwnerDetails(id: number): void {
    this.router.navigate(['/owner-detail', id]);
  }
}
