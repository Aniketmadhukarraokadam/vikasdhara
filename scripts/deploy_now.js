const ftp = require("basic-ftp");
const path = require("path");

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  const configs = [
    {
      name: "FTP with u696371114.Vikasdhara (TLS optional)",
      host: "82.180.143.14",
      user: "u696371114.Vikasdhara",
      password: "Vortex@121",
      secure: false,
      remoteDir: "public_html"
    },
    {
      name: "FTP with u696371114.vikasdharafoundation.org (TLS optional)",
      host: "82.180.143.14",
      user: "u696371114.vikasdharafoundation.org",
      password: "Vortex@121",
      secure: false,
      remoteDir: "public_html"
    },
    {
      name: "FTP with explicit TLS",
      host: "82.180.143.14",
      user: "u696371114.Vikasdhara",
      password: "Vortex@121",
      secure: true,
      secureOptions: { rejectUnauthorized: false },
      remoteDir: "public_html"
    },
    {
      name: "FTP via ftp.vikasdharafoundation.org",
      host: "ftp.vikasdharafoundation.org",
      user: "u696371114.Vikasdhara",
      password: "Vortex@121",
      secure: false,
      remoteDir: "public_html"
    }
  ];

  const localDist = path.resolve(__dirname, "../dist");

  for (const config of configs) {
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
      console.log(`>>> Connected successfully to ${config.host}!`);

      console.log(`Listing root directory:`);
      const list = await client.list();
      console.log(list.map(f => f.name));

      console.log(`Entering or creating destination directory...`);
      // check if public_html or domains/vikasdharafoundation.org/public_html
      let targetDir = "public_html";
      const hasDomains = list.some(f => f.name === "domains");
      if (hasDomains) {
        targetDir = "domains/vikasdharafoundation.org/public_html";
      }

      console.log(`Target deployment directory: ${targetDir}`);
      await client.ensureDir(targetDir);
      
      console.log(`Uploading files from ${localDist} to ${targetDir}...`);
      await client.uploadFromDir(localDist);

      console.log(`\n🎉 DEPLOYMENT COMPLETE! Website is now LIVE on https://www.vikasdharafoundation.org/`);
      client.close();
      return;
    } catch (err) {
      console.error(`Attempt failed:`, err.message);
      client.close();
    }
  }

  console.log(`\n❌ All direct automated FTP attempts finished.`);
}

deploy();
