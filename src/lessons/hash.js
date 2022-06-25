var Hashy = /** @class */ (function () {
    function Hashy(size) {
        this.data = new Array(size);
    }
    Hashy.prototype.hashMethod = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    };
    return Hashy;
}());
var myHasy = new Hashy(20);
console.log(myHasy)
