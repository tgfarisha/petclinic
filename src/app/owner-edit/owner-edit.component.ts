import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from '../owner.service';
import { Owner } from '../owner';

@Component({
  selector: 'app-owner-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './owner-edit.component.html',
  styleUrl: './owner-edit.component.css'
})
export class OwnerEditComponent implements OnInit {
  owner: Owner = {
    id: 0,
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    telephone: ''
  };

  constructor(
    private route: ActivatedRoute,
    private ownerService: OwnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
      const id = +this.route.snapshot.paramMap.get('id')!;
      this.ownerService.getOwnerById(id).subscribe((data) => {
        this.owner = data;
      });
  }

  onSubmit(): void {
    if (this.owner.id) {
      this.ownerService.updateOwner(this.owner.id, this.owner).subscribe(() => {
        alert('Owner updated successfully!');
        this.router.navigate(['/owner-detail', this.owner.id]); // Redirect to detail page
      });
    }
  }
}
