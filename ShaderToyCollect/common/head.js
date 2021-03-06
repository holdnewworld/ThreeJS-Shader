// 头文件, 公用部分, 用来加载一些必要的文件。
// 模板就是同目录下的 head.html 文件.
document.writeln(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Three Js for Shader</title>
    <style>
        body{
            margin: 0;
            padding: 0;
        }
        #btn {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 20%;
            height: 30px;
        }

        #pre {
            border: none;
            background: #ff5722;
            width: 49%;
            padding: 0;
            height: 100%;
            margin: 0;
        }

        #next {
            position: absolute;
            border: none;
            background: #40c4ff;
            width: 49%;
            padding: 0;
            height: 100%;
            margin: 0;
            right: 0;
        }
    </style>
</head>

<body>
    <div id="btn">
        <button id="pre">pre</button>
        <button id="next">next</button>
    </div>
    <div id="container"></div>
    <script src="https://cdn.bootcss.com/jquery/2.2.4/jquery.js"></script>
    <script src="../../js/three.min.js"></script>
    <script src="../../js/ShaderMgr.js"></script>

    <script>
        let pageList = ["002_gradual",  "003_line", "004_square" , "005_circle", "006_drawGraph", "007_drawGraph_pack", "008_shaderToy"];

        document.getElementById("pre").onclick = function (event) {
            let preIndex = getCureentPathIndex() - 1;
            if (preIndex < 0) {
                alert("This is already first page!")
                return
            }
            window.location = '../'+pageList[preIndex]+'/index.html';
        }

        document.getElementById("next").onclick = function (event) {
            let nextIndex = getCureentPathIndex() + 1;
            if (nextIndex >= pageList.length) {
                alert("This is already last page!")
                return
            }
            window.location = '../'+pageList[nextIndex]+'/index.html';
        }

        function getCureentPathIndex() {
            for (var i = 0 , len = pageList.length; i < len; i++) {
                const pathName = pageList[i];
                // 如果是当前路径
                if (window.location.pathname.includes(pathName)) {
                    return i
                }
            }
        }
    </script>
</body>

</html>
`);
