showStars(10);

function showStars(rows) {
    for (i = 1; i <= rows; i++) {
        let star = '';
        for (j = 1; j <= i; j++)
            star += '*'
        console.log(star)
    }
}