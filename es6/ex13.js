// Example Of Asynchronous Function

function divide(a,b) {

    return new Promise((resolve, reject)=>{
        if(typeof a !== 'number') {
            reject('First argument is not a number');
        }
        if(typeof b !== 'number') {
            reject('Second argument is not a number');
        }
        if(b === 0){
            reject('Cannot divide by 0');
        }
        resolve(a/b);
    });
}

console.log(`start of script`);
let a=24,b=8;

// ----------------------Normal Way------------------------------

// let result = divide(a,b);
// result.then(res=>console.log(`Result of Division :`,res));
// result.catch(err=>console.log(`There was an error :`,err));

// ----------------------ES6 Way------------------------------

// divide(a,b)
//     .then(res=>console.log(`Result of Division :`,res))
//     .catch(err=>console.log(`There was an error :`,err));

// ----------------------ES7 Way------------------------------
setTimeout(async () => {
    try{
        let result = await divide(a,b);
        console.log(`Result of Division :`,result);
    } catch(err){
        console.log(`There was an error :`,err);
    }
},0);
console.log(`end of script`);