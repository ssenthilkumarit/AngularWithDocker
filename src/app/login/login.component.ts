import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/customer.service';
import { UserDetails } from 'src/UserDetails';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: UserDetails = new UserDetails();
  public isValid: boolean = true;
  public registeredUser: boolean = false;
  public isNew: boolean = false;

  constructor(private router:Router, private userService : CustomerService) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.validateUser();
    if(this.isValid && this.registeredUser)
    this.router.navigateByUrl('/home');
  }

  register() {
    this.router.navigateByUrl('/register');
  }

  reloadPage() {
    this.isValid=true;
    this.router.navigateByUrl('');
  }
  validateUser() {
    if(this.user.username == null || this.user.username == '' || this.user.username == undefined) {
      this.isValid = false;
    }
    else if(this.user.password == null || this.user.password == '' || this.user.password == undefined) {
      this.isValid = false;
    } else {
      this.isNew = true;
      this.userService.getCustomer().subscribe(response => {
        console.log("Registered Users>",response);
        for(let users of response) {
          if(users.username == this.user.username && users.password == this.user.password) {
            this.registeredUser = true;
            this.isNew = false;
            console.log("Registered User");
          }
        }
      });
    }

  }
}
