<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 order-md-1">
                <app-index-filter-form></app-index-filter-form>
                <app-index-cafe-list></app-index-cafe-list>
                <app-index-menu-separator></app-index-menu-separator>
                <app-index-menu-list></app-index-menu-list>
                <app-index-additional-options></app-index-additional-options>
                <app-index-options-form></app-index-options-form>
                <app-index-order-price-computing></app-index-order-price-computing>
                <app-index-order-popup></app-index-order-popup>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-logic-main",
    }
</script>