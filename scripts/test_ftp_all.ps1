$hosts = @("82.180.143.14", "ftp.vikasdharafoundation.org")
$users = @(
    "u696371114.vikasdharafoundation.org",
    "u696371114.vikasdhara",
    "u696371114.Vikasdhara",
    "u696371114",
    "vikasdharafoundation.org"
)
$pass = "Vortex@121"

foreach ($h in $hosts) {
    foreach ($u in $users) {
        Write-Host "Trying Host: $h | User: $u"
        try {
            $uri = "ftp://$h/"
            $request = [System.Net.FtpWebRequest]::Create($uri)
            $request.Credentials = New-Object System.Net.NetworkCredential($u, $pass)
            $request.Method = [System.Net.WebRequestMethods+Ftp]::ListDirectory
            $request.UsePassive = $true
            $request.UseBinary = $true
            $request.Timeout = 5000
            $response = $request.GetResponse()
            $reader = New-Object System.IO.StreamReader($response.GetResponseStream())
            $content = $reader.ReadToEnd()
            $reader.Close()
            $response.Close()
            Write-Host ">>> SUCCESS! Host: $h | User: $u | Content: $content"
            exit 0
        } catch {
            Write-Host "Failed: $($_.Exception.Message)"
        }
    }
}
