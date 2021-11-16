# AWS EC2 Setup for Next JS

Guida for how to install tools on AWS EC2, to make it production ready.

## Git

Install git in your EC2 instance
`sudo yum install git -y`

## NVM and Node JS


`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`

We will use nvm to install Node.js because nvm can install multiple versions of Node.js and allow you to switch between them.

Activate nvm by typing the following at the command line.

`. ~/.nvm/nvm.sh`

Use nvm to install the latest version of Node.js by typing the following at the command line.

`nvm install 12.22.0`

Installing Node.js also installs the Node Package Manager (npm) so you can install additional modules as needed.

Test that Node.js is installed and running correctly by typing the following at the command line.

`node -e "console.log('Running Node.js ' + process.version)"`

## SSH keys with SSH keygen

Create ssh keys

`ssh-keygen -t ed25519 -C "easykoodi@gmail.com"`

Open newely created id_ed25519.pub file and paste it's contents in your Github account.

`cat ~/.ssh/id_ed25519.pub`

## Clone project from Github

`cd ~/`

Clone project

`git clone "your link to your project repository"`

## Install PM2, yarn and nodemon globally

`npm install nodemon yarn pm2 -g`

### Run project

Create `ecosystem.config.js` file next to `adboard` project folder.

`cd ~/`

`touch ecosystem.config.js`

Open `ecosystem.config.js` using vim editor:

`vim ecosystem.config.js`

Paste into it following content:

``````
module.exports = {
  apps: [
    {
      name: "frontend",
      cwd: "/home/ec2-user/adboard/frontend",
      script: "yarn",
      args: "serve",
      autorestart: true,
      instances: 1,
      watch: false,
      env: {
        NEXT_PUBLIC_STRAPI_API_URL: "http://13.51.47.132:1337",
        SECRET_COOKIE_PASSWORD:
          "ogjdgdfj5656_=ddfdf45445fddfd007909095094095jriureh",
      },
    },
  ],
};
``````

Start **Next JS** on Amazon EC2 with:

`pm2 start ecosystem.config.js`

## Install and start NGINX

`sudo yum update -y`

`sudo amazon-linux-extras install nginx1`

`sudo systemctl start nginx`

To Make NGINX serve next app
edit **conf.d/your-site.conf** config file for NGINX

`vim /etc/nginx/conf.d/your-site.conf`

Paste and save the below codes to **your-site.conf** file

`````
server {
    listen 80;
    server_name nextjs.your-site.com;
location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
`````

Restart Nginx

`systemctl restart nginx`

Now NGINX finally shows your Next.js app properly!
