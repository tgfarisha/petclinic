import { Component } from '@angular/core';
import { Owner } from '../owner';
import { OwnerService } from '../owner.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-owner-add',
  imports: [FormsModule],
  templateUrl: './owner-add.component.html',
  styleUrl: './owner-add.component.css'
})
export class OwnerAddComponent {
  owner: Owner = new Owner();

  constructor(private ownerService: OwnerService, private router: Router){}

  saveOwner(): void {
    this.ownerService.createOwner(this.owner).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
