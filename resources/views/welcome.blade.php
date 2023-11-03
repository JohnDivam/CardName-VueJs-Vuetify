<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Card Name</title>
    @vite('resources/css/app.css')	
    <!-- csrfToken -->		
    <script>
        (function () {
            window.Laravel = {
                csrfToken: '{{ csrf_token() }}'
            };
        })();
    </script>
</head>
<body>


    <div id="app">
        <main-app></main-app>
    </div>

    @vite('resources/js/app.js')
</body>
</html>