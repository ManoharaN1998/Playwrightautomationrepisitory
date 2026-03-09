/*
    #  #  #  #  #
    #  #  #  #  #
    #  #  #  #  #

    rows = 3
    cols = 5
*/

let pattern = ""
let i = 1;
while (i <= 3) {
    let j = 1
    while (j <= 5) {
        pattern = pattern + " # "
        j++
    }

    pattern = pattern + "\n"
    i++
}
console.log(pattern)
console.log("--------------------------------------")

/*
    #  #  #  #  #
    #  #  #  #  #
    #  #  #  #  #

    rows = 3
    cols = 5
*/

let pattern2 = ""
let k = 1;
do {
    let j = 1
    do {
        pattern2 = pattern2 + " # "
        j++;
    } while (j <= 5)
    pattern2 = pattern2 + "\n"
    k++
} while (k <= 3)

console.log(pattern2)

