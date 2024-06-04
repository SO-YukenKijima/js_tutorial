let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// URLに適した文字列を返す
// 変換例: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join('-');
}

// URL生成: 命令型バージョン
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

// URL生成: 関数型バージョン
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// 6.1.1 演習問題
// map()を使い、states変数を引数に取ってhttps://example.com/<URLに適した形式>を要素に持つ配列を返す関数を書いてください。
function generateUrls(elements) {
    return elements.map(element => `https://example.com/${urlify(element)}`);
}
console.log(generateUrls(states));

// 1単語の文字列抽出: 命令型バージョン
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}
console.log(imperativeSingles(states));

// 1単語の文字列抽出: 関数型バージョン
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// 6.2.1 演習問題
// filter()関数を使い、Dakota州を返す関数を2つ書いてください。
// 1つ目は、String#includes（2.5）で「Dakota」の文字が含まれているかどうかをテストし、
// 2つ目は、分割した配列の長さ（つまり要素数）が2であるかどうかを正規表現でテストしましょう。
function includesDakota1(elements) {
    return elements.filter(element => element.includes("Dakota"));
}
console.log(includesDakota1(states));

function includesDakota2(elements) {
    return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(includesDakota2(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: 命令型バージョン
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(n) {
        total += n;
    });
    return total;
}
console.log(imperativeSum(numbers));

// sum: 関数型バージョン
function functionalSum(elements) {
    return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// lengths: 命令型バージョン
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function(element) {
        lengths[element] = element.length;
    });
    return lengths;
}
console.log(imperativeLengths(states));

// lengths: 関数型バージョン
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths;
    }, {});
}
console.log(functionalLengths(states));

// 6.3.4 演習問題
// 1. reduce()関数を用いて、配列内の全要素の積を返す関数を書いてください。（ヒント: +=による加算を*=による乗算に置き換えます。）
function functionalProduct(elements) {
    return elements.reduce((total, n) => { return total *= n; });
}
console.log(functionalProduct(numbers));

// 2. リスト 6.9のreduce()関数の行数を減らして長い1行に書き換え、正しく動くことを確認してください。
// 書き換えるとどのぐらい長い1行になるでしょうか？
function functionalLengths2(elements) {
    return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths; }, {});
}
console.log(functionalLengths2(states));
