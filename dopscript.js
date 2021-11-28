let numbs=[1234,879,11]
function sumKeysElemrent (element) {
    for (i in numbs) {
      if(i<=0) return i+1
    }
}
console.log(sumKeysElemrent(numbs))




// 1234->10->1
// 879->24->6
// 11->2