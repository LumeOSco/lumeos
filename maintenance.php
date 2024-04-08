<?php
$maintenanceMode = true; // Set to true when maintenance mode is enabled
if ($maintenanceMode) {
    include('maintenance.html'); // Include maintenance page
    exit(); // Stop further execution
}
// Regular website content below
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website</title>
    <!-- Include your CSS and other dependencies here -->
</head>
<body>
    <header>
        <!-- Your header content here -->
    </header>
    <main>
        <!-- Your main content here -->
    </main>
    <footer>
        <!-- Your footer content here -->
    </footer>
</body>
</html>
