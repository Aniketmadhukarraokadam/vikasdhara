const ftp = require("basic-ftp");
const path = require("path");

async function run() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  client.ftp.timeout = 30000;
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
    console.log("Uploading build files to / from:", localDist);
    await client.uploadFromDir(localDist, "/");
    
    console.log("🎉 ALL FILES DEPLOYED SUCCESSFULLY TO WEBROOT!");
  } catch (err) {
    console.error("Deployment notice:", err.message);
  } finally {
    client.close();
  }
}

run();
