const { exec } = require('child_process');

if( !process.env.SENDGRID_API_KEY ) {
   console.log('Adding API...')
   const execCallback = (err, stdout, stderr) => {
      if(err) {
         console.error(`ERROR: ${err}`);
      }
      if(stderr) {
         console.error(`STDERR: ${stderr}`);
      }
      console.log('Done. If on Windows, please restart console. Otherwise, run command again.');
      process.exit(1);
   }

   let thisPlatform = process.platform;
   if( thisPlatform === 'win32' ) {
      exec('sendgrid.bat', execCallback);
   } else if( thisPlatform === 'darwin' || thisPlatform === 'linux') {
      exec('bash sendgrid.env', execCallback);
   } else {
      console.warn('WARNING: OS is not Windows/MacOS/Linux. Please set your environment variables manually.');
      process.exit(1);
   }
} else if( !( typeof process.env.SENDGRID_API_KEY === 'string' && process.env.SENDGRID_API_KEY.startsWith('SG.') ) ) {
   console.warn('WARNING: Invalid API Key. Verify that the API key is correct in the env/bat file.');
   process.exit(1);
} else {
   console.log('Environment variables detected, proceeding...');
   return;
}
