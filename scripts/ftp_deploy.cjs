const ftp = require("basic-ftp");
const path = require("path");

async function run() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    await client.access({
      host: process.env.FTP_SERVER || "82.180.143.14",
      user: process.env.FTP_USERNAME || "u696371114.Vikasdhara",
      password: process.env.FTP_PASSWORD || "Vortex@121",
      port: 21,
      secure: false
    });
    console.log("Connected successfully to Hostinger FTP!");
    
    const localDist = path.resolve(__dirname, "../dist");
    console.log("Uploading all build files directly to root / from:", localDist);
    await client.uploadFromDir(localDist, "/");

    // Also upload to public_html subfolder just in case
    try {
      await client.ensureDir("/public_html");
      await client.uploadFromDir(localDist, "/public_html");
    } catch (e) {
      console.log("Subfolder sync note:", e.message);
    }
    
    console.log("🎉 ALL FILES DEPLOYED SUCCESSFULLY TO WEBROOT!");
  } catch (err) {
    console.error("Deployment failed:", err);
    process.exit(1);
  } finally {
    client.close();
  }
}

run();
