<?php
// Secret key to prevent unauthorized access
$secret_token = "Com03/008/23"; 

if (!isset($_GET['token']) || $_GET['token'] !== $secret_token) {
    http_response_code(403);
    die("Unauthorized access");
}

// 1. Pull latest code from remote repository
$pull_cmd = "uapi VersionControl update repository_root=/home/aulcoke/repositories/allianz branch=main";
$pull_output = shell_exec($pull_cmd);

// 2. Execute deployment tasks from .cpanel.yml
$deploy_cmd = "uapi VersionControlDeployment create repository_root=/home/aulcoke/repositories/allianz";
$deploy_output = shell_exec($deploy_cmd);

echo "<pre>";
echo "=== Pull Output ===\n" . htmlspecialchars((string)$pull_output) . "\n\n";
echo "=== Deployment Output ===\n" . htmlspecialchars((string)$deploy_output);
echo "</pre>";
?>