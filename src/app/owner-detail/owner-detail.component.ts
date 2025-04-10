import { Component, OnInit } from '@angular/core';
import { Owner } from '../owner';
import { ActivatedRoute } from '@angular/router';
import { OwnerService } from '../owner.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owner-detail',
  imports: [CommonModule],
  templateUrl: './owner-detail.component.html',
  styleUrl: './owner-detail.component.css'
})
export class OwnerDetailComponent implements OnInit{
  owner: Owner | undefined;

  constructor(
    private route: ActivatedRoute,
    private ownerService: OwnerService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.ownerService.getOwnerById(id).subscribe((data) => {
      this.owner = data;
    });
  }
}
