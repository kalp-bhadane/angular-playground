import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
    pure: true,
    name: 'DateFormat'
})
export class DateFormatPipe implements PipeTransform {
    transform(value: any, sourceFormat: string, destinationFormat: string = 'DD-MM-YYYY') {
        try {
            let newDate: any = '';
            if (!!value) {
                newDate = moment(value, sourceFormat).format(destinationFormat);
            }

            if (!value || newDate === 'Invalid Date') {
                throw new Error()
            }

            return newDate;
        } catch (error) {

        }
    }
}