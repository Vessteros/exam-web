<template>
    <main role="main">
        <app-index-carousel></app-index-carousel>
        <app-index-desc></app-index-desc>
        <app-index-advantages></app-index-advantages>
        <app-index-pre-logic-desc></app-index-pre-logic-desc>
        <app-index-logic-main></app-index-logic-main>
        <app-index-footer-separator></app-index-footer-separator>
    </main>
</template>

<script>
    export default {
        name: "app-main",

        created() {
            this.$eventBus.listFilter = null;

            this.$eventBus.filterOptions = {
                admArea: new Set,
                district: new Set,
                typeObject: new Set,
            };
        }
    }
</script>