<!DOCTYPE html>
<html>

<head>
    @yield('title')
    <meta name="csrf-token" content="{{csrf_token()}}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script type="text/javascript">
        window.Laravel = {
            csrfToken: "{{ csrf_token() }}",
        }
    </script>
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,500,600,700&display=swap" rel="stylesheet" />
    <title>Recreational Vehicle CSV Import</title>
</head>

<body>
    <div id="root"></div>
    <script type="text/javascript" src="{{mix('/app.js')}}"></script>
</body>

</html>