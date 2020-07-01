<?php

use Slim\App;
use Zeuxisoo\Whoops\Slim\WhoopsMiddleware;

return function (App $app): void {
    $app->add(new WhoopsMiddleware);
};