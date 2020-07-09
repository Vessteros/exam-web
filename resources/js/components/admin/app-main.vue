<template>
    <main role="main">
        <app-admin-page-title></app-admin-page-title>

        <div class="container">
            <div class="row">
                <app-admin-filter-form></app-admin-filter-form>
                <app-admin-cafe-list></app-admin-cafe-list>
            </div>
        </div>

        <app-admin-delete-popup></app-admin-delete-popup>
        <app-admin-update-popup></app-admin-update-popup>
        <app-admin-create-popup></app-admin-create-popup>
    </main>
</template>

<script>
    export default {
        name: "app-main"
    }
</script>

<style scoped>

</style>