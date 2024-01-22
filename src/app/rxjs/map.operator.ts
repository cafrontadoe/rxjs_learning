// Object that represent a flow of data, an stream of data
// emit value when it changes
// emit type of events, like, next, error and complete

import { Observable, of, map, tap, timestamp } from "rxjs";


const mapOperatorExample =  () => {

    console.log('-----------mapOperatorExample---------')
    of(1,2,3).pipe(
        map((result: any) => ({
            par: result % 2 === 0 ? true : false,
            number: result    
        }),

        )
    ).subscribe((result)=> {
        console.log(result);
    });

}

export default mapOperatorExample;
