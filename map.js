const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

Array.prototype.polyMap = function (fun) {

    try {

        const newArr = []

        for (const val of this) {
            newArr.push(
                fun(val)
            )
        }

        return newArr
        
    } catch (error) {
        console.log(error);
        return null 
    }

}

console.log(arr.polyMap((val) => {
    return val + 1 
}));