import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  backendUrl: any;
  web_url: any;
  lang: any = 'en'
  currentUser: any;
  u_locale: any

  constructor(/* private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private paymentService: PaymentServices,
    private translate: TranslateService */) { }


  // ngOnInit() {
  //   let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   this.currentUser = currentUser;
  //   this.backendUrl = environment.url;
  //   if (this.backendUrl == 'https://backend.foodbot.ai') {
  //     this.web_url = 'https://foodbot.ai/fa.html'
  //   } else if (this.backendUrl == 'https://uat-backend.foodbot.ai') {
  //     this.web_url = 'https://uat-web.foodbot.ai/fa.html'
  //   } else {
  //     this.web_url = 'https://stage-web.foodbot.ai/fa.html'
  //   }


  //   this.userService.getRestaurantDetails(this.backendUrl, { 'restaurant_id': currentUser.restaurant_id }).subscribe((response) => {

  //     response[0].country = (!response[0].country || response[0].country == '') ? "Mexico" : response[0].country
  //     this.userService.getCountryCode(this.backendUrl, { 'country': response[0].country, 'user_id': currentUser.user_id }).subscribe((country) => {
  //       this.paymentService.checkPlanActivationStatus({ 'user_id': currentUser.user_id, 'restaurant_id': currentUser.restaurant_id }).subscribe((planStatus: any) => {
  //         let restaurant_id = currentUser.restaurant_id
  //         let firstName = currentUser.first_name;
  //         let user_id = currentUser.user_id;




  //         var data: any = {
  //           // app_id: "b09or14f",
  //           name: firstName,
  //           restaurant_id: restaurant_id,
  //           "Restaurant Name": response[0].restaurant_name,
  //           "Bot Language": response[0].bot_language,
  //           "country": country.country_prefix,
  //           "user_id": user_id,
  //           "mobile_number": (currentUser.status && currentUser.status.mobile) ? currentUser.status.mobile : ''
  //         };
  //         if (country.verified == 1)
  //           data.email = country.email_id

  //         if (planStatus.data.length > 0) {
  //           planStatus.data[0].plan_name = JSON.parse(planStatus.data[0].plan_name);
  //           data["Restaurant plan"] = planStatus.data[0].plan_name.en
  //         }

  //         (<any>window).gist.identify(data);
  //         // console.log('her is dataaaaaaa1111',country, data);

  //       })
  //     })
  //   })

  //   $(document).ready(function () {
  //     $('.minimalize-styl-2').click(function () {
  //       if ($(this).hasClass('active')) {
  //         $(this).removeClass('active')
  //         $('.navbar-static-side, .outers').hide();
  //       }
  //       else {
  //         $(this).addClass('active')
  //         $('.navbar-static-side, .outers').show();
  //       }
  //     });

  //     $('.closess, .outers').click(function () {
  //       $('.minimalize-styl-2').removeClass('active')
  //       $('.navbar-static-side, .outers').hide();
  //     })
  //   });

  //   (<any>window).gist.chat('show');


  //   let u_locale = currentUser.user_locale ? currentUser.user_locale : 'en_US';
  //   this.u_locale = u_locale;
  //   if (u_locale.indexOf("_") != -1) {
  //     let arr = u_locale.split('_');
  //     u_locale = arr[0];
  //   }
  //   else {
  //     u_locale = 'en';
  //   }
  //   this.lang = u_locale;


  //   if (this.lang == 'de')
  //     (<any>window).gist.chat('hide');


  //   var roleData: any = {};
  //   roleData.role_id = currentUser.role_id;
  //   roleData.restaurant_id = currentUser.restaurant_id;
  //   roleData.user_id = currentUser.user_id;

  //   var that = this;
  //   this.userService.getUserRoleAndAcl(roleData).subscribe((data: any) => {
  //     if (data.data.role_id != currentUser.role_id && currentUser.updated_at != data.data.updated_at) {
  //       currentUser.role_id = data.data.role_id;
  //       currentUser.updated_at = data.data.updated_at;
  //       localStorage.setItem('currentUser', JSON.stringify(currentUser))

  //       that.userService.callComponentMethod({ 'lang': u_locale, 'status': true });
  //     }
  //     else if (data.data.role_id != currentUser.role_id) {
  //       currentUser.role_id = data.data.role_id;
  //       localStorage.setItem('currentUser', JSON.stringify(currentUser))
  //       that.userService.callComponentMethod({ 'lang': u_locale, 'status': true });

  //     }
  //     else if (currentUser.updated_at != data.data.updated_at) {
  //       currentUser.updated_at = data.data.updated_at;
  //       localStorage.setItem('currentUser', JSON.stringify(currentUser))
  //       that.userService.callComponentMethod({ 'lang': u_locale, 'status': true });
  //     }
  //   })

  // }

  logout() {
  //   // (<any>window).Intercom('shutdown');
  //   // (<any>window).gist.chat('hide')
  //   localStorage.removeItem('menu_items');
  //   localStorage.removeItem('currentUser');
  //   this.authenticationService.logout();
  //   this.userService.callComponentMethod('en');
  }

  onLanguageChange(value) {

  //   var lngType = 'US'
  //   if (this.u_locale.indexOf("_") != -1) {
  //     let arr = this.u_locale.split('_');
  //     lngType = arr[1];
  //   }
  //   this.currentUser.user_locale = value + "_" + lngType;
  //   this.translate.setDefaultLang(value);
  //   localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
  //   var data = { 'user_id': this.currentUser.user_id, 'data': { 'locale': this.currentUser.user_locale } }
  //   this.userService.updateACL_manageusers_status(this.backendUrl, data).subscribe((response: any) => {

  //   });

  //   if (value == 'de') {
  //     (<any>window).gist.chat('hide');
  //   }
  //   else {
  //     (<any>window).gist.chat('show');
  //   }
  //   this.userService.callComponentMethod(value);

  }


}
