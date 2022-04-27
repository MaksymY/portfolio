<template>
    <div class="WorkTogether" id="contact">
        <p class="WorkTogether__title">Let's work together</p>
        <p class="WorkTogether__description">Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
        <div class="WorkTogether__section">
            <button class="WorkTogether__button">
                <a href="mailto:maksym.yankivskyypro@gmail.com">Send Mail</a>
            </button>
            <button class="WorkTogether__button">
                <a href="tel:0664155085">Call Me</a>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkTogether',
}
</script>
<style lang="scss">
.WorkTogether {
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
        color: $font_color;
        font-weight: bold;
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