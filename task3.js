require('../node_modules/es6-promise').polyfill();
const fetch = require('../node_modules/isomorphic-fetch');

fetch('https://swapi.co/api/people')
.then(res => res.json() )
.then((res) => {

    let prom = []
    res['results'].forEach((rest) => {
        
        if(rest.hair_color.match(/brown/g) && Number(rest.height) >= 150){
            prom.push(rest.name)
        }
        
    });

    console.log(prom);
})

.catch(err => {
    console.error(err);
});


//Quest

//tingginya lebih sama dengan 150  dan warna rambutnya brown