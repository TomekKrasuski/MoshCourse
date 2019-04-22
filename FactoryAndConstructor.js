function address(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
};

function AnotheAddress(street, city, zipCode) {
    this.street = street,
        this.city = city,
        this.zipCode = zipCode
}

console.log(address('Sienna 59/13a', 'Warsaw', '00-820'));
console.log(new AnotheAddress('Srebrna 7/18', 'Pruszków', '05-803'));