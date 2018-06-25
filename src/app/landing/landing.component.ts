import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  // ceremoniaUrl: string = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13137.740394258772!2d-58.3798877!3d-34.5931577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x668ec107422f89fa!2sNUESTRA+SE%C3%91ORA+DEL+SOCORRO!5e0!3m2!1ses!2sar!4v1485214199006";
  // fiestaUrl: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.4245230299102!2d-58.48034778521005!3d-34.51747098048195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb14f1f61f18d%3A0xcdca218adcfbd58d!2sPres.+Hip%C3%B3lito+Yrigoyen+803%2C+B1638BPE+Vicente+L%C3%B3pez%2C+Buenos+Aires!5e0!3m2!1ses!2sar!4v1485214729975"
  from: any;

  @ViewChild('preloader') preloader: any;

  constructor(public sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      // this.route.queryParams.subscribe(
      //   params => {
      //     if(params.from === 'login'){
      //         this.router.navigate(['landing']);
      //         window.location.reload();
      //     }              
      //   }
      // );

    }    
  }
