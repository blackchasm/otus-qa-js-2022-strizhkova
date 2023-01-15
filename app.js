function getScore(scores) {
    let sum = 0;
    for (let i in scores) {
        sum += scores[i];
    }
    return sum;
} 

const scores = {
    Anna: -10,
    Olga: 25,
    Ivan: 111,
};

console.log(getScore(scores)); 