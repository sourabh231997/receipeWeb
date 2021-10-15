import { Component,OnInit, OnDestroy } from '@angular/core';
// import { AlertService, AuthenticationService, UserService } from '../_services/index'
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  //styleUrls: ['./app.component.css']
})
/*export class FooterComponent {

}*/

export class FooterComponent {
year : any;


constructor(/* private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService */) 
          { }
ngOnInit(){
	var d = new Date();
    this.year = d.getFullYear();
}

// test
	
}


