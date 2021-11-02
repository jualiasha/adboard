ssh -i ~/.ssh/adboard-backend.pem ec2-user@ec2-13-51-47-132.eu-north-1.compute.amazonaws.com << 'ENDSSH'
sudo yum update -y
cd adboard
git checkout .
git pull origin master
yarn --frozen-lockfile
pm2 restart all
ENDSSH
