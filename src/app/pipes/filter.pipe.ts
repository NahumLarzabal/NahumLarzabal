import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    //if(arg == '' || arg.length < 2) return value;
    let resultPost=[];
    for(let pos of value){
      //hacer condicion de busqueda de marca o precio o tipo
      if (pos.name.toLowerCase().indexOf(arg)>-1||pos.mark.toLowerCase().indexOf(arg)>-1||pos.type.toLowerCase().indexOf(arg)>-1){
        resultPost.push(pos);
      }
    }
    return resultPost;
  }

}

