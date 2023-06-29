
<!DOCTYPE html>
<html>
<?php
echo file_get_contents("/templates/header_info.html");
?>

<body>
<?php
echo file_get_contents("/templates/nav_template.html");
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

</body>