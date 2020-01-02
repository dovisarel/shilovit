<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>שילובית</title>

        <base href="http://localhost:8086/">
        <!-- <base href="/q-dist/spa/"> -->

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- <link href=css/app.b43cee17.css rel=stylesheet> -->
    </head>
    <body>
        <div id="q-app"></div>

        <script type="text/javascript" src="/app.js"></script>

        <!-- <script type=text/javascript src=js/app.27a9c86d.js> </script> -->
        <!-- <script type=text/javascript src=js/runtime.8a4ff449.js> </script> -->
        <!-- <script type=text/javascript src=js/vendor.c8379dc3.js> </script> -->
    </body>
</html>
