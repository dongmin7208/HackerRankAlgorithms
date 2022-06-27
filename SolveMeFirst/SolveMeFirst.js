process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
    input_stdin += data;
});

process.stdin.on("end", function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function solveMeFirst(a, b) {
    // Hint: Type return a+b below

    return a + b;
}
function compareTriplets(a, b) {
    let points = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            points[0]++;
        } else if (a[i] != b[i]) {
            points[1]++;
        }
    }
    return points;
}

function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());

    var res = solveMeFirst(a, b);
    console.log(res);
}

function compareTriplets(a, b) {
    let points = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            points[0]++;
        } else if (a[i] != b[i]) {
            points[1]++;
        }
    }
    return points;
}
