function simpleArraySum(ar) {
    let count = 0;
    for (let i = 0; i < ar.length; i++) {
        count += ar[i];
    }
    return count;
}

function simpleArraySum(ar) {
    return ar.reduce((a, b) => a + b);
}
