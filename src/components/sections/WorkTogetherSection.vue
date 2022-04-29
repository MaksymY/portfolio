<template>
    <div class="WorkTogether" id="contact" ref="contact">
        <p class="WorkTogether__title">{{ $t("title-contact") }}</p>
        <p class="WorkTogether__description">{{ $t("description-contact") }}</p>
        <div class="WorkTogether__section">
            <button class="WorkTogether__button">
                <a href="mailto:maksym.yankivskyypro@gmail.com">Send Mail</a>
            </button>
            <button class="WorkTogether__button">
                <a href="tel:0664155085">Call Me</a>
            </button>
        </div>
        <p class="WorkTogether__description">{{ $t("footer-contact") }}</p>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import useObserver from '@/composables/use-observer.js';

export default {
    name: 'WorkTogether',
    setup() {
        let contact = ref();
        onMounted(() => {
            useObserver(contact.value, "apear1");
        });
        return {
            contact,
        }
    }
}
</script>
<style lang="scss">
.apear1 {
    transition: 1.5s;
    opacity: 1 !important;
}
.WorkTogether {
    opacity: 0;
    background-color: $main_color;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 34px;
    padding: 100px 10%;
    margin-top: 20%; 

    &__title {
        color: white;
        font-weight: bold;
        font-size: 40px;
        margin: 0;
    }
    &__description {
        color: white;
        margin: 0;
    }
    &__section {
        display: flex;
        flex-direction: column;
        gap: 10px;
        @media (min-width:900px) {
            display: flex;
            flex-direction: row;
            gap: 50px;
        }
    }
    &__button {
        background-color: transparent;
        border-radius: 10px;
        font-size: 20px;
        color: $font_color;
        border: 3px solid $font_color;
        padding: 1em;
        width: 175px;

        a {
            text-decoration: none;
            color: $font_color;
        }
    }
}
</style>