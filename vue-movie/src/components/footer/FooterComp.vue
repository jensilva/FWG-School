<template>
    <footer>
        <div class="logo"></div>
        <p> © FWG School - 2021</p>
        <div class="social-wraper">
            <a v-for="socialItem in social" 
            :key="socialItem.name" 
            :href="socialItem.link" 
            target="_blank"
            class="social-icon"
            :style=" {backgroundImage: `url(${socialItem.icon})`}">
            </a>
        </div>
    </footer>
</template>


<script>
import { Component, Vue } from 'vue-property-decorator';
import facebook from '@/assets/facebook.svg';
import twitter from '@/assets/twitter.svg';
import instagram from '@/assets/instagram.svg';

    @Component
    export default class FooterComp extends Vue {

        social = [
            {   name:"Facebook",
                icon: facebook,
                link:"https://www.facebook.com/LEGIAOMAJOR/",
            },
             {
                name:"Twitter",
                icon: twitter ,
                link:"https://twitter.com/legiaomajor",
            },
             {
                name:"Instagram", 
                icon: instagram ,
                link:"https://www.instagram.com/legiaomajor/",
            },
        ]

    }

</script>

<style lang="scss" scoped>

footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #0b0f16;
    color: #FFF;
}

.logo {
    background: url("~@/assets/logo.svg") no-repeat center;
    width: 150px;
    height: 40px;
    background-size: contain;
}

.social-icon {
    display: block;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 35px;
    width: 35px;
}

.social-wraper {
    display: flex;
    gap: 1rem;
}

</style>