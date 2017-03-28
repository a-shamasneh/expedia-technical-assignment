import { Component, OnInit } from '@angular/core';
import {GetexpediaService} from '../getexpedia.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private expediaApi:GetexpediaService) {
  	this.expediaApi.Getdata().subscribe(ok=>{
  		console.log(ok.offers.Hotel)
  	})
   }

  ngOnInit() {
  }

}
