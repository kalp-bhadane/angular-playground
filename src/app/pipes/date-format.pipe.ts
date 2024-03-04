import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
    pure: true,
    name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
    transform(value: any, sourceFormat: string, destinationFormat: string = 'DD-MM-YYYY') {
        try {
            let newDate: any = '';
            if (!!value) {
                if(sourceFormat) {
                    newDate = moment(value, sourceFormat).format(destinationFormat);
                } else {
                    newDate = moment(value).format(destinationFormat);
                }
            }

            if (!value || newDate === 'Invalid Date') {
                throw new Error()
            }

            return newDate;
        } catch (error) {

        }
    }
}