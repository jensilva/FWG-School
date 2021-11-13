<template>
<a target="_blank" :href="link">
    <span class= "image" :style="`background-image: url('${image}')`"></span>
    <p>{{name}}</p>
</a>
    
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';


 @Component
 export default class ActorVue extends Vue {
     @Prop (String) readonly link!: string;
     @Prop (String) readonly image!: string;
     @Prop (String) readonly name!: string;
 }   
</script>

<style scoped lang="scss">
    a {
        display:flex;
        background: #404040;
        padding: .5rem;
        border-radius: .25rem;
        color: #FFF;
        text-decoration: none;
        align-items: center;
    }

    .image {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin-right: .5rem;
        box-shadow: 0 2px 10px rgb(0 0 0 / 50%);
    }
</style>