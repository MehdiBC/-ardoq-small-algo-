/**
 * calculate the maximum product of 3 elements in an array.
 *
 * @param {number[]} array - array of numbers
 * @return number
 * */
function maxProduct(array){
    if(array == null) throw new Error('Null pointer exception.');
    if(array.length < 3) throw new Error('Array\'s length is smaller than 3.');

    // finding max1, max2 and max3 having max1 > max2 > max3
    let max1=Math.max(...array)
    let index = array.indexOf(max1);
    array.splice(index, 1);

    let max2 = Math.max(...array)
    index = array.indexOf(max2);
    array.splice(index, 1);

    let max3 = Math.max(...array)

    // we should consider negative numbers, so we will be looking for the two least numbers in the array
    let min1 = Math.min(...array)
    index = array.indexOf(min1);
    array.splice(index, 1);

    let min2 = Math.min(...array)

    return Math.max(max1 * max2 * max3 , max1 * min1 * min2);
}

module.exports = maxProduct;