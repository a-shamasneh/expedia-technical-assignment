import { Component, OnInit } from '@angular/core';
import {GetexpediaService} from '../getexpedia.service';
import { CountryCityPipe } from '../country-city.pipe';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  AllHotels:any;   // this array will be represent all deals
  Countries:any=[];  // this array will be All Country with out duplicated value
  constructor(private expediaApi:GetexpediaService) {
  	this.expediaApi.Getdata().subscribe(Hotels=>{
  		console.log(Hotels)
      this.AllHotels=Hotels;
      for (var i = 0; i < this.AllHotels.length; i++) {
        // i will use decode url because the url already  encoded  
        this.AllHotels[i].hotelUrls.hotelInfositeUrl=decodeURIComponent(this.AllHotels[i].hotelUrls.hotelInfositeUrl)
        if(this.Countries.indexOf(this.AllHotels[i].destination.country)===-1){
          this.Countries.push(this.AllHotels[i].destination.country)
        }
      }
     
  	})
   }

  ngOnInit() {
  }

}
