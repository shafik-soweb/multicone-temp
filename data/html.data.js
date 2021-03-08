const data = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    <title>Multicone</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        #text{
            display:flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-size: 3rem;
            text-align: center;
            font-family: Open Sans;
        }
        a{
            font-size: 2rem;
        }
        
       
    </style>
</head>
<body>
    <div class="container">
        <div id="text">
            <div>
            <img src="https://study.com/cimages/multimages/16/3d_cone.png" alt="" height="auto" width="100">
            <div>multicone</div>
            <a href="">docs</a>
            </div>
        </div>
    </div>
</body>
</html>`
}
export default data