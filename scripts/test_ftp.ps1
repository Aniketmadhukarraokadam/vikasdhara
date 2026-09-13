$ftpHost = "82.180.143.14"
$ftpUser = "u696371114.Vikasdhara"
$ftpPass = "Vortex@121"
$remoteBase = "/home/u696371114/domains/vikasdharafoundation.org/public_html"
$localBase = (Resolve-Path "dist").Path

Write-Host "Connecting to FTP: $ftpHost as $ftpUser..."

function Test-FtpConnection {
    param($user, $pass, $dir)
    try {
        $uri = "ftp://$ftpHost$dir"
        $request = [System.Net.FtpWebRequest]::Create($uri)
        $request.Credentials = New-Object System.Net.NetworkCredential($user, $pass)
        $request.Method = [System.Net.WebRequestMethods+Ftp]::ListDirectory
        $request.UsePassive = $true
        $request.UseBinary = $true
        $request.Timeout = 10000
        $response = $request.GetResponse()
        $reader = New-Object System.IO.StreamReader($response.GetResponseStream())
        $content = $reader.ReadToEnd()
        $reader.Close()
        $response.Close()
        Write-Host "Connection successful for $dir! Files found: $content"
        return $true
    } catch {
        Write-Host "Failed on $dir with $user : $_"
        return $false
    }
}

# Test possible paths and usernames
Write-Host "Testing combinations..."
$success = Test-FtpConnection -user $ftpUser -pass $ftpPass -dir "/public_html/"
if (-not $success) {
    Test-FtpConnection -user $ftpUser -pass $ftpPass -dir "/"
}
if (-not $success) {
    Test-FtpConnection -user "u696371114.vikasdharafoundation.org" -pass $ftpPass -dir "/public_html/"
}
