const address = {
    street: 'Sienna 59/13a',
    city: 'Warsaw',
    zipCode: '00-820'
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key])
    }
}

showAddress(address);