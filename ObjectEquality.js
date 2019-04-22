function Address(street, city, zipCode) {
    this.street = street,
        this.city = city,
        this.zipCode = zipCode
}

const address1 = new Address('Srebrna 7/18', 'Pruszków', '05-803');
const address2 = new Address('Srebrna 7/18', 'Pruszków', '05-803');
const address3 = address2;

function areEqual(address1, address2) {
    let isEqual = true;
    for (let key in address1) {
        isEqual = (address1[key] === address2[key])
        if (isEqual !== true) break;
    }
    return isEqual;
}

//mosh function
// function areEqual(address1, address2) {
//     return address1.city === address2.city && address1.street === address2.street && address1.zipCode == -address2.zipCode;
// }


// my function
// function areSame(address1, address2) {
//     let areSame = true;
//     for (let key in address1) {
//         areSame = (address1 === address2)
//         if (areSame !== true) break;
//     }
//     return areSame;

//mosh function
function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address3));
console.log(areSame(address2, address3));