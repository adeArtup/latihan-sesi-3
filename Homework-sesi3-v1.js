// require('../node_modules/es6-promise').polyfill();
// const makeAllCaps = require('../node_modules/isomorphic-fetch');

const arrayOfWords = ['cucumber','tomatos','avocado'];

const complicatedArray = ['cucumber',44, true];


const makeAllCaps = function(text){
        // return new Promise((res)=>{
            let arr = []
            // for(let x =0;x<text.length;x++){
            // text.forEach((t)=> {
            //     console.log(t)
            // });
                
                if(Number(text)){
                    // arr.push(text)
                    arr = text
                }else{
                   
                   arr =  text.toUpperCase()
                }
            
            return arr ;
            // }
         
}

// console.log(arrayOfWords.map(makeAllCaps))

const sortWords = function(text){
        return new Promise((res)=>{
            res(text.sort())
        });   
}

const maps = function(text){
    return new Promise((res)=>{
        res(text.map(makeAllCaps))
    });   
}

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


maps(complicatedArray)
.then((val) => {
  return sortWords(val)
})
.then((val) =>{
    console.log(val)
})
.catch(err => {
    console.log(err)
});





