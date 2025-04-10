import { Component } from '@angular/core';
import { Owner } from '../owner';
import { FormsModule } from '@angular/forms';
import { OwnerService } from '../owner.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [
    FormsModule, 
    RouterModule, 
  ],
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent {
  lastName: string = '';
  owner: Owner | undefined;

  constructor(private ownerService: OwnerService, private router: Router) {}

  searchOwner(): void {
    if (this.lastName.trim() !== '') {
      this.ownerService.searchOwnerByLastname(this.lastName).subscribe((data) => {
        if (data) {
          this.owner = data;
          this.viewOwnerDetails(this.owner.id as number);
        } else {
          alert('No owner found');
        }
      });
    }
  }

  viewOwnerDetails(id: number): void {
    this.router.navigate(['/owner-detail', id]);
  }
}
