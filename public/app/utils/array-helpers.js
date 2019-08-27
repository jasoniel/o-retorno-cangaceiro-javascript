

if(!Array.prototype.$flatMap){

    Array.prototype.$flatMap = function(cb) {

        return this.map(cb).reduce((acc, atual) =>  acc.concat(atual),[])
    }
}