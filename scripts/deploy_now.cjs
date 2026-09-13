const ftp = require("basic-ftp");
const path = require("path");

async function deploy() {
  const configs = [
    {
      name: "FTP (Plain) with u696371114.Vikasdhara",
      host: "82.180.143.14",
      user: "u696371114.Vikasdhara",
      password: "Vortex@121",
      secure: false
    },
    {
      name: "FTP (Plain) with u696371114.vikasdharafoundation.org",
      host: "82.180.143.14",
      user: "u696371114.vikasdharafoundation.org",
      password: "Vortex@121",
      secure: false
    },
    {
      name: "FTP (Explicit TLS) with u696371114.Vikasdhara",
      host: "82.180.143.14",
      user: "u696371114.Vikasdhara",
      password: "Vortex@121",
      secure: true,
      secureOptions: { rejectUnauthorized: false }
    },
    {
      name: "FTP (Explicit TLS) with u696371114.vikasdharafoundation.org",
      host: "82.180.143.14",
      user: "u696371114.vikasdharafoundation.org",
      password: "Vortex@121",
      secure: true,
      secureOptions: { rejectUnauthorized: false }
    }
  ];

  const localDist = path.resolve(__dirname, "../dist");

  for (const config of configs) {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    console.log(`\n========================================`);
    console.log(`Trying: ${config.name}...`);
    try {
      await client.access({
        host: config.host,
        user: config.user,
        password: config.password,
        port: 21,
        secure: config.secure,
        secureOptions: config.secureOptions
      });
      console.log(`>>> CONNECTED SUCCESSFULLY to ${config.host}!`);

      console.log(`Listing directory contents...`);
      const list = await client.list();
      console.log("Root items:", list.map(f => f.name));

      let targetDir = "public_html";
      if (list.some(f => f.name === "domains")) {
        targetDir = "domains/vikasdharafoundation.org/public_html";
      }

      console.log(`Target directory: ${targetDir}`);
      await client.ensureDir(targetDir);

      console.log(`Uploading all dist files from ${localDist}...`);
      await client.uploadFromDir(localDist);

      console.log(`\n========================================`);
      console.log(`🎉 SUCCESS! The website is deployed and LIVE!`);
      console.log(`URL: https://www.vikasdharafoundation.org/`);
      console.log(`Admin Portal: https://www.vikasdharafoundation.org/admin`);
      console.log(`========================================\n`);
      client.close();
      return;
    } catch (err) {
      console.error(`Attempt failed: ${err.message}`);
      client.close();
    }
  }

  console.log(`\nAll automatic connection attempts finished.`);
}

deploy();
