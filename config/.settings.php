<?php

use Psr\Container\ContainerInterface;

return function (ContainerInterface $container): void {
    $container->set('settings', function (): array {
        return [
            'displayErrorDetails' => true,
            'logErrorDetails'     => true,
            'logErrors'           => true,
        ];
    });
};