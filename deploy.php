<?php
// Secret key to prevent unauthorized access
$secret_token = "Com03/008/23"; 

if (!isset($_GET['token']) || $_GET['token'] !== $secret_token) {
    http_response_code(403);
    die("Unauthorized access");
}

// Run cPanel API to pull latest code and execute .cpanel.yml
$cmd = "uapi VersionControl update repository_root=/home/aulcoke/repositories/allianz";
$output = shell_exec($cmd);

echo "<pre>$output</pre>";
?>