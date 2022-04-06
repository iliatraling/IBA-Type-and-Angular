import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})
export class AppComponent { 
    candiesMassage = "Очень жаль, что у вас";
    name= '';
    doSomething() {
        console.log("Hello world; it works!");
    }
    changeNumber = 0;
    addsOne() {
        this.changeNumber++;
        this.candies();
    }
    
    takesAway() {
        this.changeNumber--;
        this.candies();
    }
    candies() {
        if(this.changeNumber <= 0) {
            this.candiesMassage = "Очень жаль, что у вас";
        } else {
            this.candiesMassage = "Мы рады, что у вас";
        }

    }
    

}