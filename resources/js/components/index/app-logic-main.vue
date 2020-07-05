<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 order-md-1">
                <app-index-filter-form></app-index-filter-form>

                <app-index-cafe-list></app-index-cafe-list>

                <app-index-menu-separator></app-index-menu-separator>

                <div class="album py-5 bg-light">
                    <div class="container">

                        <div class="row">
                            <div class="col-md-4">
                                <div class="card mb-4 shadow-sm">
                                    <img src="img/pre/1.png" class="bd-placeholder-img card-img-top" width="100%"
                                         height="225" alt="Responsive image">
                                    <div class="card-body">
                                        <h5>Название</h5>
                                        <p> Описание</p>
                                        <h6>Цена</h6>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">-
                                                </button>
                                                <input type="email" class="form-control" id="">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">+
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="card mb-4 shadow-sm">
                                    <img src="img/pre/1.png" class="bd-placeholder-img card-img-top" width="100%"
                                         height="225" alt="Responsive image">
                                    <div class="card-body">
                                        <h5>Название</h5>
                                        <p> Описание</p>
                                        <h6>Цена</h6>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">-
                                                </button>
                                                <input type="email" class="form-control" id="">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">+
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="card mb-4 shadow-sm">
                                    <img src="img/pre/1.png" class="bd-placeholder-img card-img-top" width="100%"
                                         height="225" alt="Responsive image">
                                    <div class="card-body">
                                        <h5>Название</h5>
                                        <p> Описание</p>
                                        <h6>Цена</h6>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">-
                                                </button>
                                                <input type="email" class="form-control" id="">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">+
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


                <section class="jumbotron text-center">
                    <div class="container">

                        <h2>Дополнительные опции</h2>
                        <hr class="featurette-divider">
                    </div>
                </section>

                <form>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                            Являюсь студентом вуза
                        </label>

                    </div>
                    <div class="form-check">

                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                            Быстрая доставка
                        </label>
                    </div>
                </form>
                <div class="col-md-12 order-md-1 mb">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <h2>ИТОГО<b> 500р</b></h2>
                        </div>


                        <div class="col-md-6 mb-3">
                            <button class="btn btn-warning btn-lg btn-block bgbot" type="submit" data-toggle="modal"
                                    data-target="#exampleModal">Оформить заказ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-logic-main"
    }
</script>

<style scoped>

</style>