<template>
    <div
        class="navEl"
        :class="{'navEl--open' : navOpen}"
    >
        <p class="navLogo">M</p>
        <div
            @click="navOpen = !navOpen"
            class="navBurger"
            :class="{'navBurger--open' : navOpen}"
        ></div>
    </div>
    <nav
        class="nav"
        :class="{'nav--open' : navOpen}"
    >
        <ul class="nav__list">
            <li
                @click="goSection('home')"
                class="nav__item"
            >Home</li>
            <li
                @click="goSection('skills')"
                class="nav__item"
            >Skills</li>
            <li
                @click="goSection('work')"
                class="nav__item"
            >Work</li>
            <li
                @click="goSection('contact')"
                class="nav__item"
            >Contact</li>
        </ul>
    </nav>
</template>
<script>
export default {
    data: () => ({
        navOpen: false,
    }),
    methods: {
        goSection(el) {
            this.navOpen = false;
            document.getElementById(el).scrollIntoView({
                behavior: "smooth"
            });
        }
    }
}
</script>
<style lang="scss">
.navEl {
    background: rgba(0, 0, 0, 0);
    backdrop-filter: blur(4px);
    position: fixed;
    width: 100%;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--open {
        background-color: transparent;
    }
}
.navLogo {
    padding: 5% 10%;
    margin: 0;
    font-size: 32px;
    font-weight: bold;
}
.navBurger {
    margin: 5% 10%;
    width: 35px;
    height: 4px; 
    background-color: $font-color;
    border-radius: 4px;

    &:before {
        content: "";
        position: absolute;
        width: 40px;
        height: 4px; 
        background-color: $font-color;
        transform: translate(-5px ,-8px);
        border-radius: 50%;
        border-radius: 4px;
    }

    &:after {
        content: "";
        transform: translate(5px ,8px);
        position: absolute;
        width: 30px;
        height: 4px; 
        background-color: $font-color;
        border-radius: 50%;
        border-radius: 4px;
    }
}
.nav {
    position: fixed;
    margin: 0;
    background-color: $main_color;
    top: 0;
    right: 0;
    height: 100vh;
    width: 0;
    transition: .5s;
    z-index: 1;
    overflow: hidden;

    &--open {
        width: 100vw;
        border-radius: 0;
    }


    &__list {
        padding: 0;
        list-style-type: none;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
    }

    &__item {
        font-size: 40px;
        text-transform: uppercase;
        color: white;

        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
}
</style>