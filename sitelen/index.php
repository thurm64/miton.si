
<!DOCTYPE html>
<html>
<?php
echo file_get_contents("../templates/header_info.html");
?>

<body>
<?php
echo file_get_contents("../templates/nav_template.html");
?>
<script type="module" src="https://md-block.verou.me/md-block.js"></script>
    <body>
<?php
$path = "./md";

if ($handle = opendir($path)) {
    while (false !== ($file = readdir($handle))) {
        if ('.' === $file) continue;
        if ('..' === $file) continue;
        $markdown = file_get_contents($path."/".$file);
        print("<md-block>$markdown</md-block>");
    }
    closedir($handle);
}
?>
<div id="mante" class="webring">
    <link rel="stylesheet" href="https://miton.si/mantewebringcss.css">

        <div class="webring-inner">
            <span class="webring-prev">&lt;- previous</span>
            <span class="webring-info">This site is part of the mante webring<br>
                    <a href="javascript:void(0)" onclick="randomSite()">random</a> | 
                    <a href="https://the-blob-system.neocities.org/mante_webring/webring">index</a> | 
                    <a href="https://garlic.garden/onionring/">what is this?</a></span>

            <span class="webring-next">next -&gt;</span></td>
        </div>
        <script type="text/javascript" src="https://the-blob-system.neocities.org/mante_webring/onionring-variables.js"></script>
        <script type="text/javascript" src="https://the-blob-system.neocities.org/mante_webring/onionring-widget.js"></script>
        </div>
</body>