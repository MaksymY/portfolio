<template>
    <div class="WorkTogether" id="contact">
        <p class="WorkTogether__title">Let's work together</p>
        <p class="WorkTogether__description">Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
        <button class="WorkTogether__button">Contact Me</button>
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
    padding: 10%;
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
    &__button {
        background-color: transparent;
        border-radius: 10px;
        font-size: 20px;
        color: $font_color;
        border: 3px solid $font_color;
        padding: 1em;
        width: 175px;
    }
}
</style>