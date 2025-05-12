import React from 'react';
import ProjectCard from './ProjectCard'; // Assuming ProjectCard is a separate component
import './AutomatedReset.css';

const AutomatedReset = () => {
  const scriptPreview = `
# Automated Password Reset Script for Active Directory Users
Import-Module ActiveDirectory

$username = Read-Host "Enter the username (sAMAccountName)"
$newPassword = Read-Host "Enter the new password" -AsSecureString

try {
    $user = Get-ADUser -Identity $username -ErrorAction Stop
    Set-ADAccountPassword -Identity $username -NewPassword $newPassword -Reset
    Set-ADUser -Identity $username -ChangePasswordAtLogon $true
    Write-Host "Password reset successfully." -ForegroundColor Green
}
catch {
    Write-Host "Error: $_" -ForegroundColor Red
}
  `;

  return (
    <div className="reset-script-container larger-card">
      <h2>Automated Password Reset Script</h2>
      <pre>{scriptPreview}</pre>
      
      {/* View Project Button */}
      <div className="view-project">
        <a
          href="/scripts/AD_PasswordReset.ps1"
          download
          className="view-project-btn">
          Download Script
        </a>
      </div>
    </div>
  );
};


export default AutomatedReset;
