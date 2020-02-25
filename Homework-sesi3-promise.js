// Promise

const arrayOfWords = ['cucumber','tomatos','avocado'];

const complicatedArray = ['cucumber',44, true];


const makeAllCaps = function(text){
            let arr = []
                
                if(Number(text)){
                    arr = text
                }else{
                   
                   arr =  text.toUpperCase()
                }
            
            return arr ;
         
}

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





