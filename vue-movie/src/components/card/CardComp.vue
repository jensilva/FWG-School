<template>
    <router-link :to="link" :style="`background-image: url(${image})`">
        <h3 class="title">{{ title }}</h3>
        <span class="rating"> 
            <p>
                {{ rating }} / {{ maxRating }}   
            </p>
        </span>
    </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CardComp extends Vue {  
   @Prop(String) readonly link!: string;  
   @Prop(String) readonly title!: string;  
   @Prop(String) readonly image!: string; 
   @Prop(Number) readonly rating: number | undefined;
   @Prop({
       type: Number,
       default: 10
   }) readonly maxRating: number | undefined;
}
</script>

<style lang="scss" scoped>

@mixin photo-background {
  color: #FFF;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 5px;
  margin: 0;
}

.title {
    text-align: center;
    @include photo-background;
}

.rating {
        display: flex;
        justify-content: flex-end;

        p {
            @include photo-background;
            margin: 5px;
        }
}

a {
    $height: 300px;
    $width: 200px;

    display: flex;
    flex-direction: column;
    height: $height;
    min-width: $width;
    width: $width;
    justify-content: space-between;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    text-decoration: none;
    box-shadow: 0 5px 20px #000;

    &:hover{
        cursor: pointer;
        outline: 4px solid #40b883;
        height: $height + 15px;
    }
}
</style>