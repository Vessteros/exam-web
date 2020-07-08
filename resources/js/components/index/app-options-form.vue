<template>
    <form>
        <div class="form-check" v-if="canUserSocialDiscount">
            <!-- [@option 1.1] -->
            <input class="form-check-input" type="checkbox" value="" id="useSocialDiscount" @click="socialDiscount">
            <label class="form-check-label" for="useSocialDiscount">
                Применить социальную скидку
            </label>

        </div>
        <div class="form-check">
            <!-- [@option 5.1] -->
            <input class="form-check-input" type="checkbox" value="" id="useDoubled" @click="doubled">
            <label class="form-check-label" for="useDoubled">
                В 2 раза больше
            </label>
        </div>
    </form>
</template>

<script>
    export default {
        name: "app-options-form",

        data: function () {
            return {
                canUserSocialDiscount: false,
            };
        },

        mounted() {
            this.$eventBus.$on('updateCafeInfo', this.updateSocialDiscountVisibility);
        },

        methods: {
            socialDiscount: function () {
                console.log();
                this.$config.useSocialDiscount = !this.$config.useSocialDiscount;
                this.$eventBus.$emit('recountOrder');
            },

            doubled: function () {
                this.$config.useDoubled = !this.$config.useDoubled;
                this.$eventBus.$emit('recountOrder');
            },

            updateSocialDiscountVisibility: function () {
                this.canUserSocialDiscount = this.$config.currentCafeObj.socialPrivileges;
            }
        },
    }
</script>