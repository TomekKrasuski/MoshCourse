showNumbers(20);

function showNumbers(limit) {
    if (typeof limit !== 'number') {
        return;
    }
    for (i = 0; i <= limit; i++) {
        const even = i % 2 === 0 ? 'EVEN' : 'ODD';
        console.log(i, even)
    }
}