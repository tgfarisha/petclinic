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
  totalPages: number = 0;
  currentPage: number = 0;
  pageSize: number = 5;

  constructor(private ownerService: OwnerService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadOwners(this.currentPage);
  }

  loadOwners(page: number): void {
    this.ownerService.getPaginatedOwners(page, this.pageSize).subscribe((response) => {
      this.owners = response.content;
      this.totalPages = response.totalPages;
      this.currentPage = response.number;
    });
  }

  viewOwnerDetails(id: number): void {
    this.router.navigate(['/owner-detail', id]);
  }
}
