

import { filter, map, merge, of, concat } from "rxjs";


const operatorExamples =  () => {
    console.log('-------------------operatorExamples---------------');
    const numbers = of(1,2,3,4,5);
    const squareNumbers = numbers.pipe(
        map((x)=> x * x)
    );

    const filterNumbers = numbers.pipe(
        filter(x => x % 2 !== 0 )
    );

    squareNumbers.subscribe(x => console.log(x));
    filterNumbers.subscribe(x => console.log(x));

    
    const mergedNumbers = merge(squareNumbers, filterNumbers);
    const concatNumbers = concat(squareNumbers, filterNumbers);
    console.log('mergedNumbers');
    mergedNumbers.subscribe(x => console.log(x));
    console.log('concatNumbers');
    concatNumbers.subscribe(x => console.log(x));
}

export default operatorExamples;
