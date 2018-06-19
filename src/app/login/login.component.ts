import { Component } from '@angular/core';
import { analyzeFileForInjectables } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'cualca';
  private password : any;
  private passwordIncorrecta : any = false;
  private passwordVacia : any = false;

  constructor(private router:Router){}

  login(){
    if(this.password === undefined || this.password === ''){
      this.passwordVacia = true
      this.passwordIncorrecta = false;
    }else{
      this.passwordVacia = false
      if(this.password !== 'Cualca')
        this.passwordIncorrecta = true;
      else
        this.router.navigate(['landing'], { queryParams: { from: 'login' } });
    }
  }
}
