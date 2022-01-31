import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/customer.service';
import { UserDetails } from 'src/UserDetails';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public userDetail: UserDetails = new UserDetails();

  constructor(private router: Router, private customerService:CustomerService) { }

  ngOnInit(): void {
  }
  register() {
    this.customerService.createCustomer(this.userDetail).subscribe(response =>
      {
        console.log(JSON.stringify(response));
      })
    this.router.navigateByUrl("");
  }
}
