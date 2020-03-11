// Async

const arrayOfWords = ['cucumber','tomatos','avocado'];

const complicatedArray = ['cucumber',44, true];

async function makeAllCaps(text){
    let arr = []
        
        if(Number(text)){
            arr = await Promise.resolve(text)
        }else{
           
           arr =  await Promise.resolve(text.toUpperCase())
        }
    
    return  arr ;
 
}

async function sortWords(text){
return new Promise((res)=>{
    res(text.sort())
});   
}

async function maps(text){
return new Promise((res,rej)=>{
    res(text.map(makeAllCaps))
});   
}

// async function result(){
    maps(arrayOfWords)
        .then((val) => {
        return sortWords(val)
        })
        .then((val) =>{
            console.log(val)
        })
        .catch(err => {
            console.log(err)
        });


//     }

// result()

