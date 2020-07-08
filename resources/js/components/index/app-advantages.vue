<template>
    <div class="album py-2 ">
        <div class="container">
            <div class="row">
                <div v-for="adv in advList" class="col-md-4">
                    <div class="card mb-4 shadow">
                        <img :src="adv.src" class="bd-placeholder-img card-img-top" width="100%" height="225"
                             alt="Responsive image">
                        <div class="card-body">
                            <p class="card-text">{{adv.p}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-advantages",
        data: function () {
            return {
                advList: [
                    {
                        src: 'img/pre/1.png',
                        p: 'Доставка различных напитков',
                    },
                    {
                        src: 'img/pre/2.png',
                        p: 'Доставка в течении 30 минут',
                    },
                    {
                        src: 'img/pre/3.png',
                        p: 'Лучшие повора России',
                    },
                    {
                        src: 'img/pre/4.png',
                        p: 'Гарантия качества еды',
                    },
                    {
                        src: 'img/pre/5.png',
                        p: 'Еженедельные скидки',
                    },
                    {
                        src: 'img/pre/6.png',
                        p: 'Большой выбор блюд',
                    },
                ],
            }
        }
    }
</script>