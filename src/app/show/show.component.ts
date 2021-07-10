import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RealEstatesService } from '../shared/api/real-estates.service';
import { RealEstate } from '../shared/models/real-estate';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  realEstateID: string;
  myRealEstate: RealEstate;

  constructor(
    private activateRoute: ActivatedRoute,
    private realEstatesServive: RealEstatesService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: { id: string }) => {
      this.realEstateID = params.id ;
      this.getRealEstateDetail();

    });
  }
  getRealEstateDetail() {
    this.realEstatesServive.findByid(this.realEstateID).subscribe( myRealEstate => {
      this.myRealEstate = myRealEstate;
      console.log('myRealEstate', myRealEstate);
    })
    // myRealEstate
  }

}
