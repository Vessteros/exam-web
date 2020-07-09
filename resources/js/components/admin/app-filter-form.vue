<template>
    <div class="col-md-12 order-md-1">
        <div class="row">

            <div class="col-md-8 mb-3">
                <div class="form-group">
                    <label for="name">Наименовование</label>
                    <input type="email" class="form-control" id="name" placeholder="Введите наименование">
                </div>
            </div>


            <div class="col-md-4 mb-3">
                <label for="country">Административный округ</label>
                <select class="custom-select d-block w-100" id="country" required="">
                    <option value="">Выберите административный округ...</option>
                    <option>Минимализм</option>
                    <option>Лофт</option>
                    <option>Классика</option>
                </select>
                <div class="invalid-feedback">
                    Пожалуйста выберите административный округ
                </div>
            </div>


            <div class="col-md-8 mb-3">
                <div class="row">
                    <div class="col-md-12 mb-31">
                        Количество посадочных мест
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="form-group row">
                            <label for="name" class="col-sm-3 col-form-label">От</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="name">
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="form-group row">
                            <label for="name" class="col-sm-3 col-form-label">До</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="name">
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="form-group row">
                            <label for="country" class="col-sm-6 col-form-label">Является сетевым</label>
                            <select class="custom-select d-block col-sm-6" id="country" required="">
                                <option value="">Не выбрано</option>
                                <option>Да</option>
                                <option>Нет</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-md-4 mb1">
                <label for="country">Район</label>
                <select class="custom-select d-block w-100" id="country" required="">
                    <option value="">Не выбрано</option>
                    <option>Луберцы</option>
                    <option>Жуковский</option>
                    <option>Семеновкая</option>
                </select>


            </div>


            <div class="col-md-8 mb-3">
                <div class="row">
                    <div class="col-md-12 mb-31">
                        Количество посадочных мест
                    </div>

                    <div class="col-md-4 mb-3">
                        <div class="form-group row">
                            <label for="name" class="col-sm-2 col-form-label">С</label>
                            <div class="col-sm-10">
                                <input type="date" class="form-control" id="name">
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mb-3">
                        <div class="form-group row">
                            <label for="name" class="col-sm-2 col-form-label">По</label>
                            <div class="col-sm-10">
                                <input type="date" class="form-control" id="name">
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mb-3">
                        <div class="form-group row">
                            <label for="country" class="col-sm-4 col-form-label">Льготы</label>
                            <select class="custom-select d-block col-sm-8" id="country" required="">
                                <option value="">Не выбрано</option>
                                <option>Студентам</option>
                                <option>Пенсионерам</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-md-4 mb1">
                <label for="country">Вид обьекта</label>
                <select class="custom-select d-block w-100" id="country" required="">
                    <option value="">Не выбрано</option>
                    <option>Кафе</option>
                    <option>Столовая</option>
                    <option>Ресторан</option>
                </select>
                <div class="invalid-feedback">
                    Пожалуйста выберите административный округ
                </div>

            </div>


            <div class="col-md-12">
                <div class="row justify-content-center">
                    <div class="col-md-5 mb-3">
                        <button class="btn  btn-block bgbot" type="submit">Найти</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-filter-form"
    }
</script>