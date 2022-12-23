import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'add_fave_pipe'
})
export class AddFavePipePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return value ? value + 5 : 5;
    }

}
