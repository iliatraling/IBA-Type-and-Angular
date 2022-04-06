enum Seasons {
    SPRING = "SPRING",
    SUMMER = "SUMMER",
    AUTUMN = "AUTUMN",
    WINTER = "WINTER"

}
enum Sizes {
    XS = "XS",
    S = "S",
    M = "M",
    L = "L",
    XL = "XL"
}


class Cloth {
    size: Sizes;
    season: Seasons;
    color: string;
    prise: number;
    constructor(size: Sizes,season: Seasons,color: string,prise: number) {
        this.size = size;
        this.season = season;
        this.color = color;
        this.prise = prise;
    }
    
    toString(): string{
        return `size ${this.size}, season ${this.season}, color ${this.color}, prise ${this.prise}`
    }

}

class Dress extends Cloth {
    tupe: string;
    toString(): string{
        return `${super.toString}, tupe ${this.tupe}` 
    }

}

class ClothingStore {
    arrClothes: Cloth[];
    constructor(arrClothes: Cloth[]) {
        this.arrClothes = arrClothes;
    }
    priseAutumnClothes(): number{

    
        const initialValue = 0;

        /*const sums = this.arrClothes.reduce((accumulator, clothes)=>{// 1 куда складывается(сейчас там первое значение) 2 элемент массива
            return accumulator + clothes.prise
        }, initialValue)*/

        let totalSumAotumnClothes = this.arrClothes.filter(cloth => cloth.season === Seasons.AUTUMN).reduce((accumulator, cloth) => accumulator + cloth.prise, 0);

        let sum: number = 0;
        for (let i = 0; i < this.arrClothes.length; i++) {
            if(this.arrClothes[i].season == Seasons.AUTUMN) {
                sum += this.arrClothes[i].prise;
            }  
        }
        return totalSumAotumnClothes;
    }

    countClothes(): number {
        return this.arrClothes.length;
    }

    printClothesWithSize(size: Sizes): void{
        /*for (let i = 0; i < this.arrClothes.length; i++) {
            if(this.arrClothes[i].size == size) {
                console.log(this.arrClothes[i].toString());
            }  
        }*/
        this.arrClothes.forEach(element => {
            if(element.size == size) {
                console.log(element.toString());
            } 
        });
    }


}
let redbomber = new Cloth(Sizes.L, Seasons.AUTUMN, "red", 100);

let greenbomber = new Cloth(Sizes.M, Seasons.AUTUMN, "green", 99);

let tSort = new Cloth(Sizes.M, Seasons.SPRING, "red", 39);

let socks = new Cloth(Sizes.XL, Seasons.SUMMER, "black", 4.99);






const arr: Cloth[] = [redbomber,greenbomber, tSort, socks];
let zara = new ClothingStore(arr);
console.log(zara.countClothes());
console.log(zara.priseAutumnClothes());
zara.printClothesWithSize(Sizes.M);