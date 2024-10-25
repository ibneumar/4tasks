let marks = [90, 20, 65, 40, 55];

let pass = marks.filter(x => {
    if(x > 50) 
        return marks.indexOf(x)
    else 
        return false
})


console.log(pass)

