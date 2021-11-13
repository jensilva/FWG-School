<template>
  <header>
    <router-link to="/" class="logo"></router-link>
    <nav>
      <ul>
        <li v-for="item in menu" :key="item.link"> 
            <router-link :to="item.link"> {{ item.text }} </router-link>
        </li>
      </ul>
    </nav>
    <div>
      <nav>
        <ul>
          <li v-for="item in authMenu" :key="item.link">
              <router-link :to="item.link"> {{ item.text }} </router-link>
          </li>  
        </ul>
      </nav>
      <input name="search" type="text" placeholder="Search" />
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MenuLink } from "@/interfaces/menu";

@Component
export default class HeaderComp extends Vue {
    menu: Array<MenuLink> = [
        {
            text: "TV Show",
            link: "/tv-show",
        },
        {
            text: "Movies",
            link: "/movies"
        },
        {
            text: "Upcoming",
            link: "/upcoming"
        }
    ];

    authMenu: Array<MenuLink> = [
        {
            text: "Login",
            link: "/login"
        },
        {
            text: "Register",
            link: "/register"
        }
    ]
}
</script>

<style scoped lang="scss">

header {
  display: flex;
  flex: 1;
  background-color: #0b0f16;
  color: #fff;
  justify-content: space-around;
  padding: 5px;

  > * {
      display: flex;
      align-items: center;
  }
}

nav ul {
  display: flex;
  list-style-type: none;

  a {
    padding: 15px;
    color: #fff;
    text-decoration: none;

    &:hover{
        background-color: #40b883;
        cursor: pointer;
    }
  
  } 
}

.logo {
    background: url("~@/assets/logo.svg") no-repeat center;
    width: 200px;
    background-size: contain;
}

input {
    height: 32px;
    padding: 5px;
    margin-left: 5px;
}
</style>
