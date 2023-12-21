
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
        print("<md-block id=\"$file\">$markdown</md-block>");
    }
    closedir($handle);
}
?>

<script>
const element = document.querySelector(location.hash)
const topPos = element.getBoundingClientRect().top + window.pageYOffset

window.scrollTo({
  top: topPos, // scroll so that the element is at the top of the view
  behavior: 'smooth' // smooth scroll
})</script>

</body>