
const v = []
var i = 0
var aux = 0

do{ var aleat = Math.round(Math.random()*100)
    v.push(aleat)
    i++
} while(i < 10)
    
    console.log(v)

v.pop()
   
    for(x = 1; x <= v.length; x++){
    for(i = 0; i < v.length; i++){
        if(v[i] > v[x]){
            aux = v[i]
            v[i] = v[x]
            v[x] = aux
        }
    }
   }
console.log(v)
console.log(v[0])