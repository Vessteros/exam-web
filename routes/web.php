<?php

use Exam\Http\Controllers\ExamController;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;

return function (App $app) {
    $app->get('/', [ExamController::class, 'index']);
};