import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCity'
})
export class CountryCityPipe implements PipeTransform {
	//start filter data 
  transform(AllHotels: any, term?: any): any {
  	  if(term=== "All") return AllHotels;
      if(term=== undefined) return AllHotels;
      return AllHotels.filter(function(hotel){
 	return hotel.destination.country.includes(term);
})
}
}