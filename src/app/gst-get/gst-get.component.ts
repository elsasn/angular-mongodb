import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import Business from '../model/Business_model';


@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {
	businesses: Business[];

  constructor(private bs: BusinessService) { }

  deleteBusiness(id){
    if(confirm("Are you sure to delete "+name)){
      this.bs.deleteBusiness(id).subscribe(response => {
      console.log('Deleted', response);
      this.ngOnInit();
    });
    }
  }

  editBusiness(id){
    this.bs.editBusiness(id).subscribe((data: Business[]) => {
      this.businesses = data;
      this.ngOnInit();
    });
  }

  refresh() {
    location.reload();
  }

  ngOnInit() {
  	this.bs.getBusinesses().subscribe((data: Business[]) => {
  		this.businesses = data;
  		//console.log(this.businesses);
  	});
  }

}
