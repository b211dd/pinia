<template>
  <div class="home">
    <h1>This is an home page</h1>
    <h2> state count is : {{ count }}</h2>
    <h2> gettre : {{ countPlusOne }}</h2>
    <h2> Name : {{ name }}</h2>
    
    <button @click="increase">Increase</button>
    <button @click="decrease"> Decrease</button>
    <button @click="changename"> Changen Name</button>
    <button @click="store.$reset">Reset</button>
  </div>
</template>

<script setup>
import {counterStore} from "@/stores/counterStore";
import { storeToRefs } from "pinia";

const store = counterStore();
const { count , countPlusOne ,name} = storeToRefs(store);
const increase = store.increase;
const decrease = store.decrease;
const changename = store.changename;

</script>


<!-- <script>
import { counterStore } from "@/stores/counterStore";
import { mapState , mapActions } from "pinia";
export default (await import('vue')).defineComponent({
  computed: {
    ...mapState(counterStore, ["count"]),
    storegetter(){
      return counterStore().countPlusOne;
    } ,
  },
  methods:{
    ...mapActions(counterStore,["increase","decrease"]),
  },
  
});

</script> -->


