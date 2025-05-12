# Automated Password Reset Script for Active Directory Users
# Author: Lia Clemente
# Date: April 2025

# Requires ActiveDirectory module
Import-Module ActiveDirectory

# Prompt for user input
$username = Read-Host "Enter the username (sAMAccountName)"
$newPassword = Read-Host "Enter the new password" -AsSecureString

try {
    # Check if user exists
    $user = Get-ADUser -Identity $username -ErrorAction Stop

    # Reset the password
    Set-ADAccountPassword -Identity $username -NewPassword $newPassword -Reset

    # Force user to change password at next logon (optional)
    Set-ADUser -Identity $username -ChangePasswordAtLogon $true

    Write-Host "Password for user '$username' has been reset successfully." -ForegroundColor Green
}
catch {
    Write-Host "Error: $_" -ForegroundColor Red
}
