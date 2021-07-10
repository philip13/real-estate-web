import { Component, OnInit } from '@angular/core';
import { RealEstatesService } from '../shared/api/real-estates.service';
import { RealEstate } from '../shared/models/real-estate';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  realEstates: Array<RealEstate>;

  constructor(
    private realEstateService: RealEstatesService
  ) { }

  ngOnInit(): void {
    this.realEstateService.getAll().subscribe( realEstates => {
      this.realEstates = realEstates;
      console.log('realEstates', realEstates);

    })
  }

}
