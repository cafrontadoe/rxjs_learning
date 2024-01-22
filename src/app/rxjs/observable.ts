// Object that represent a flow of data, an stream of data
// emit value when it changes
// emit type of events, like, next, error and complete

import { Observable } from "rxjs";


const observableExample =  () => {

    const observable = new Observable((suscriber) => {
        suscriber.next(1);
        suscriber.next(2);
        suscriber.next(3);
    });
    
    observable.subscribe({
        next(x){
            console.log(x);
        },
        error(err){
            console.log(err);
        },
        complete(){
            console.log('Done')
        }
    });

}

export default observableExample;
