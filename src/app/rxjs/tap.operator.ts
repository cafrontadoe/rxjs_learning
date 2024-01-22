// Object that represent a flow of data, an stream of data
// emit value when it changes
// emit type of events, like, next, error and complete

import { Observable, of, map, tap } from "rxjs";


const tapOperatorExample =  () => {

    console.log('-----------tapOperatorExample---------')
    of(1,2,3).pipe(
        map((x) => x * x),
        tap((result) => console.log(result))
    ).subscribe((result)=> {
        // console.log(result);
    });

}

export default tapOperatorExample;
