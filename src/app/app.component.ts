import { Component } from '@angular/core';
import { analyzeFileForInjectables } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cualca';
  private password : any;
  private passwordIncorrecta : any = false;
  private passwordVacia : any = false;

  login(){
    if(this.password === undefined || this.password === ''){
      this.passwordVacia = true
      this.passwordIncorrecta = false;
    }else{
      this.passwordVacia = false
      if(this.password !== 'Cualca')
        this.passwordIncorrecta = true;
      else
        this.passwordIncorrecta = false;
    }
  }
}
