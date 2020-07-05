<template>
    <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div v-for="slide in slideList" class="carousel-item" :class="slide.active ? 'active' : ''">
                <img :src="slide.src" class="placeholder-img" width="100%" height="100%" alt="Responsive image">
                <div class="container">
                    <div class="carousel-caption  bgcarousel text-left">
                        <h1 class=" logotext">FAST<strong class="logotext1">DELIVERRY</strong></h1>
                        <p class="logotext1">{{slide.p}}</p>

                    </div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Назад</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Вперед</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "carousel",
        data: function () {
            return {
                slideList: [
                    {
                        src: 'img/1.png',
                        p: 'Большой выбор блюд!',
                        active: true,
                    },
                    {
                        src: 'img/2.png',
                        p: 'Большой выбор блюд!',
                        active: false,
                    },
                    {
                        src: 'img/3.png',
                        p: 'Большой выбор блюд!',
                        active: false,
                    },
                ],
            };
        }
    }
</script>