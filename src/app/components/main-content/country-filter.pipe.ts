import { Pipe, PipeTransform } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Pipe({
    name: 'CountryFilter'
})
export class CountryFilterPipe implements PipeTransform {

    transform(countries: Country[], searchTerm: string): Country[]{

        if(!countries || !searchTerm) {
            return countries;
        }
        return countries.filter(country => 
            country.country.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
