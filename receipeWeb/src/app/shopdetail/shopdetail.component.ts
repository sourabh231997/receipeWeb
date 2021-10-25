import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopdetail',
  templateUrl: './shopdetail.component.html',
  styleUrls: ['./shopdetail.component.css']
})
export class ShopdetailComponent implements OnInit {
indexOfId:any
idArr:any = ["1","2","3","4"/* ,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 */]
imgArr = ['../../assets/img/shop-img-detail-1.jpg','../../assets/img/powder-2.jpg','../../assets/img/powder-3.jpg','../../assets/img/powder-4.jpg']
contentArr = ['Pepper Rasam Powder (250 gms)','Bisibele bath Powder (250 gms)','Flax Seeds (Chutney) Powder','Sambhar Powder (250 gms)']
priceArr = ['₹190.00','₹165.00','₹160.00','₹140.00']
constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let idVal = this.route.snapshot.paramMap.get('id');
    this.indexOfId = this.idArr.indexOf(idVal)
  }

}
