import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import Business from '../model/Business_model';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {
businesses: Business[];
  constructor(private bs: BusinessService) { }

  editBusiness(id){
    this.bs.editBusiness(id).subscribe((data: Business[]) => {
  		this.businesses = data;
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.bs.getBusinesses().subscribe((data: Business[]) => {
      this.businesses = data;
      //console.log(this.businesses);
    });
  }

}
