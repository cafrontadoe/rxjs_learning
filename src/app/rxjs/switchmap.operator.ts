// Object that represent a flow of data, an stream of data
// emit value when it changes
// emit type of events, like, next, error and complete

import { Observable, of, map, tap, timestamp, switchMap } from "rxjs";


const switchMapOperator =  () => {

    const observable = new Observable((suscriber) =>{
        setInterval(()=>{
            suscriber.next('b');
        },
        1000)
    })


    console.log('-----------switchMapOperator---------')
    observable.pipe(
        switchMap((result: any) => of(1,2,3))  
        

        ).subscribe(r => console.log(r));

}

export default switchMapOperator;
