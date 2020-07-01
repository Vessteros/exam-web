<?php

use DI\Container;
use DI\Bridge\Slim\Bridge as AppFactory;

$container = new Container;

$settings = @require_once __DIR__ . '/../config/.settings.php';
$settings($container);

$app = AppFactory::create($container);

$middleware = require_once __DIR__ . '/../config/.middleware.php';
$middleware($app);

$routes = require_once __DIR__ . '/../routes/web.php';
$routes($app);

return $app;