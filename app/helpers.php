<?php

use Jenssegers\Blade\Blade;
use Psr\Http\Message\ResponseInterface as Response;

/**
 * @param Response $response
 * @param $template
 * @param array $with
 * @return Response
 */
if ( !function_exists('view')) {
    function view(Response $response, $template, $with = [])
    {
        $cache = __DIR__ . '/../cache';
        $views = __DIR__ . '/../resources/views';

        $blade = (new Blade($views, $cache))->make($template, $with);

        $response->getBody()->write($blade->render());

        return $response;
    }
}

if ( !function_exists('asset')) {
    /**
     * @param $path
     * @return string
     */
    function asset(string $path)
    {
        return env('APP_URL') . "/{$path}";
    }
}

if (!function_exists('base_path'))
{
    function base_path($path = '')
    {
        return  __DIR__ . "/../{$path}";
    }
}