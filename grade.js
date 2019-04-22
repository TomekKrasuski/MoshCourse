const marks = [80, 80, 50, 40, 90, 80];

console.log(calculateAverage(marks));

function calculateAverage(marks) {
    // let sumOfMarks = 0;
    // let averageScore;
    // for (let i = 0; i < marks.length; i++) {
    //     sumOfMarks = sumOfMarks + marks[i];
    // }
    // averageScore = sumOfMarks / marks.length;
    // if (averageScore <= 59) return 'F'
    // else if (averageScore <= 69) return 'D'
    // else if (averageScore <= 79) return 'C'
    // else if (averageScore <= 89) return 'B'
    // else return 'A'
    let grade = averageScore(marks);
    if (grade < 60) return 'F';
    if (grade < 70) return 'D';
    if (grade < 80) return 'C';
    if (grade < 90) return 'B';
    return 'A'
}

function averageScore(array) {
    let sum = 0;
    for (const items of array)
        sum += items;
    return sum / array.length;
}