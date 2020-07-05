<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container d-flex justify-content-between">
                <a href="#" class="navbar-brand d-flex align-items-center">
                    <img src="/img/logo.png" alt="about" width="40" height="40" fill="none" stroke="currentColor"
                         stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="mr-2"
                         viewBox="0 0 24 24" focusable="false">
                    <strong class="logotext">FAST </strong> <strong class="logotext1"> DELIVERRY</strong>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">

                    <ul class="navbar-nav  nav menualign">
                        <li class="nav-item ">
                            <a class="nav-link" href="/">Главная </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">Преимущества</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#mywork">Предприятия</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#menu">Меню</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/admin/">Админка</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "app-index-header"
    }
</script>

<style scoped>

</style>