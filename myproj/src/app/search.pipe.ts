import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class GrdFilterPipe implements PipeTransform {
  
    transform(value: any, searchByTitle): any {
  

      // if(!value) return [];
             
     if(!searchByTitle){
      return value;
    }
     
        return value.filter(it => {

          const title = it.title.toLowerCase().startsWith(searchByTitle.toLowerCase());
          const auth = it.author.toLowerCase().startsWith(searchByTitle.toLowerCase());
          return title+auth;
        
        });
      }
}