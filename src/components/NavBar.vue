<template>
    <div class="global">
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
                >{{ $t('home') }}</li>
                <li
                    @click="goSection('skills')"
                    class="nav__item"
                >{{ $t('skills') }}</li>
                <li
                    @click="goSection('work')"
                    class="nav__item"
                >{{ $t('work') }}</li>
                <li
                    @click="goSection('contact')"
                    class="nav__item"
                >{{ $t('contact') }}</li>
            </ul>
    
            <ul class="nav__list-lang">
                <li>
                    <button
                        class="nav__lang-button"
                        :class="{'nav__lang-button--select' : actualLang === 'fr'}"
                        @click="setLocale('fr')"
                    >FR</button>
                </li>
                <li>
                    <button
                        class="nav__lang-button"
                        :class="{'nav__lang-button--select' : actualLang === 'en'}"
                        @click="setLocale('en')"
                    >EN</button>
                </li>
                <li>
                    <button
                        class="nav__lang-button"
                        :class="{'nav__lang-button--select' : actualLang === 'ua'}"
                        @click="setLocale('ua')"
                    >UA</button>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    data: () => ({
        navOpen: false,
    }),
    computed: {
        actualLang() {
            return this.$i18n.locale;
        }
    },
    methods: {
        goSection(el) {
            this.navOpen = false;
            document.getElementById(el).scrollIntoView({
                behavior: "smooth"
            });
        },
        setLocale(locale) {
            this.$i18n.locale = locale;
        }
    }
}
</script>
<style lang="scss">
.global {
    animation: apear2 1s ease-in-out;
}
.navEl {
    background-color: rgba(255, 255, 255, 0.8);
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

    @media (min-width:900px) {
        backdrop-filter: none;
        top: 10px;
        left: 40px;
        position: fixed;
        z-index: 30;
        width: fit-content;
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
    transition: .5s;

    @media (min-width:900px) {
        display: none;
    }

    &--open {
        transform: rotate(45deg);
        &:before {
            transition: .5s;
            display: none;
        }
        &:after {
            transition: .5s;
            transform: rotate(90deg) !important;
            width: 35px !important;
        }
    }

    &:before {
        content: "";
        position: absolute;
        width: 40px;
        height: 4px; 
        background-color: $font-color;
        transform: translate(-5px ,-8px);
        border-radius: 50%;
        border-radius: 4px;
        transition: .5s;
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
        transition: .5s;
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
    display: flex;
    flex-direction: column;

    @media (min-width:900px) {
        width: 100%;
        height: 60px;
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(4px);
        z-index: 10;
        flex-direction: row;
    }

    &--open {
        width: 100vw;
        border-radius: 0;
        justify-content: center;
    }


    &__list {
        padding: 0;
        list-style-type: none;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        @media (min-width:900px) {
            flex-direction: row;
            height: auto;
            z-index: 10;
            gap: 50px;
        }
    }

    &__list-lang {
        display: flex;
        list-style-type: none;
        margin: 80px 0 0 0;
        align-items: center;
        justify-content: center;
        padding: 0;

        @media (min-width:900px) {
            margin: 0 40px 0 0;
        }
    }

    &__lang-button {
        border: 1px solid $font-color;
        color: $font-color; 
        background: transparent;
        font-size: 15px;
        padding: 10px;

        &--select {
            background-color: $font-color;
            color: white;
        }
    }

    &__item {
        font-size: 40px;
        text-transform: uppercase;
        color: white;
        cursor: pointer;

        &:not(:last-child) {
            margin-bottom: 20px;
        }

        @media (min-width:900px) {
            font-size: 20px;
            margin-bottom: 0 !important;
            color: $font-color;
        }
    }
}
@keyframes apear {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>