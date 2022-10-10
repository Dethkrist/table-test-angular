import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "searchFilter"
})

export class SearchFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {

    if (args === '') {
      return value
    }

    args = args.toLowerCase();
    return value.filter((item: any) => {
      return item.title.toLowerCase().includes(args) || item.description.toLowerCase().includes(args)
    })
  }
}