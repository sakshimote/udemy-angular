import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'shorten'
})
export class shortenPipe implements PipeTransform{
    transform(value: any,limit:number) {

        if(value.length>limit){
        return value.substring(0,limit)+'...';
        }else{
            return value;
        }
    }


}