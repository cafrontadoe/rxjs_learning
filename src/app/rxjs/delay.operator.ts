// Object that represent a flow of data, an stream of data
// emit value when it changes
// emit type of events, like, next, error and complete

import { Observable, of, map, tap, delay } from "rxjs";


const delayOperatorExample =  () => {

    console.log('-----------delayOperatorExample---------')
    of(1,2,3).pipe(
        delay(2000),
        map((x) => x * x),
    ).subscribe((result)=> {
        console.log(result);
    });

}

export default delayOperatorExample;
