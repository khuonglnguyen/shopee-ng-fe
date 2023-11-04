import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
 login() {
    // const credentials = { username: 'user', password: 'pass' };
    // this.apiService.login(credentials).subscribe(
    //   data => {
    //     console.log('Login success:', data);
    //   },
    //   error => {
    //     console.error('Login failed:', error);
    //   }
    // );
  }
}
