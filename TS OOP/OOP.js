var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Seasons;
(function (Seasons) {
    Seasons["SPRING"] = "SPRING";
    Seasons["SUMMER"] = "SUMMER";
    Seasons["AUTUMN"] = "AUTUMN";
    Seasons["WINTER"] = "WINTER";
})(Seasons || (Seasons = {}));
var Sizes;
(function (Sizes) {
    Sizes["XS"] = "XS";
    Sizes["S"] = "S";
    Sizes["M"] = "M";
    Sizes["L"] = "L";
    Sizes["XL"] = "XL";
})(Sizes || (Sizes = {}));
var Cloth = /** @class */ (function () {
    function Cloth(size, season, color, prise) {
        this.size = size;
        this.season = season;
        this.color = color;
        this.prise = prise;
    }
    Cloth.prototype.toString = function () {
        return "size ".concat(this.size, ", season ").concat(this.season, ", color ").concat(this.color, ", prise ").concat(this.prise);
    };
    return Cloth;
}());
var Dress = /** @class */ (function (_super) {
    __extends(Dress, _super);
    function Dress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dress.prototype.toString = function () {
        return "".concat(_super.prototype.toString, ", tupe ").concat(this.tupe);
    };
    return Dress;
}(Cloth));
var ClothingStore = /** @class */ (function () {
    function ClothingStore(arrClothes) {
        this.arrClothes = arrClothes;
    }
    ClothingStore.prototype.priseAutumnClothes = function () {
        var initialValue = 0;
        /*const sums = this.arrClothes.reduce((accumulator, clothes)=>{// 1 куда складывается(сейчас там первое значение) 2 элемент массива
            return accumulator + clothes.prise
        }, initialValue)*/
        var totalSumAotumnClothes = this.arrClothes.filter(function (cloth) { return cloth.season === Seasons.AUTUMN; }).reduce(function (accumulator, cloth) { return accumulator + cloth.prise; }, 0);
        var sum = 0;
        for (var i = 0; i < this.arrClothes.length; i++) {
            if (this.arrClothes[i].season == Seasons.AUTUMN) {
                sum += this.arrClothes[i].prise;
            }
        }
        return totalSumAotumnClothes;
    };
    ClothingStore.prototype.countClothes = function () {
        return this.arrClothes.length;
    };
    ClothingStore.prototype.printClothesWithSize = function (size) {
        /*for (let i = 0; i < this.arrClothes.length; i++) {
            if(this.arrClothes[i].size == size) {
                console.log(this.arrClothes[i].toString());
            }
        }*/
        this.arrClothes.forEach(function (element) {
            if (element.size == size) {
                console.log(element.toString());
            }
        });
    };
    return ClothingStore;
}());
var redbomber = new Cloth(Sizes.L, Seasons.AUTUMN, "red", 100);
var greenbomber = new Cloth(Sizes.M, Seasons.AUTUMN, "green", 99);
var tSort = new Cloth(Sizes.M, Seasons.SPRING, "red", 39);
var socks = new Cloth(Sizes.XL, Seasons.SUMMER, "black", 4.99);
var arr = [redbomber, greenbomber, tSort, socks];
var zara = new ClothingStore(arr);
console.log(zara.countClothes());
console.log(zara.priseAutumnClothes());
zara.printClothesWithSize(Sizes.M);
