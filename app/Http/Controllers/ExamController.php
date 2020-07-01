<?php


namespace Exam\Http\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ExamController
{
    public function index (Request $request, Response $response) {
        return view($response, 'pages.home');
    }
}