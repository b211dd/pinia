import {defineStore} from "pinia";

export const counterStore = defineStore("counter",{
    state:() =>({
        count:10,
        name : 'OSAMA',
    }),
    getters:{
        countPlusOne(){
            return this.count + 10;
        },
    },
    actions: {
        increase(){
            this.count ++;
        },
        decrease(){
            this.count --;
        },
        changename(){
            this.name = "osama";
        },
        $reset(){
           this.count = 0;
        }
    }
});