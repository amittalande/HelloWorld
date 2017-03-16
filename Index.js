function Hello() {

    console.dir('obj');
    return '';
}

function Test() {
    var _this = this;
    return function() {
        _this.amit = 'Amit';
    };
}

var a = Test();

console.log(a.amit);

console.log('Oh! God, I just did it.');

console.log('Amit Talande');
