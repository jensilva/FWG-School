<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Flipper</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body id="background-color">
    <nav class="menu">
        <h1>Color Flipper</h1>
        <ul>
            <li>
                <a href="color-flipper.html">Simple</a>
            </li>
            <li>
                <a href="color-flipper-hex.html">Hex</a>
            </li>
            <li>
                <a href="color-flipper-rgb.html">Hex</a>
            </li>
        </ul>
    </nav>
    <main>
        <div class="color-wrapper">
            <div class="color-text-wrapper">
                <h2>Background Color :&nbsp;</h2>
                <span id="color">#FFF000</span>
            </div>
            <button id="color-button">Click me</button>
        </div>
    </main>
    <script src="utils.js"></script>
    <script src="color-flipper-rgb.js"></script>
</body>
</html>