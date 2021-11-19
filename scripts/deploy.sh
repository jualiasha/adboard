ssh -i ~/.ssh/doskaboard-backend.pem ec2-user@ec2-34-243-51-15.eu-west-1.compute.amazonaws.com << 'ENDSSH'
sudo yum update -y
cd adboard
git checkout .
git pull origin master
yarn --frozen-lockfile
pm2 restart all
ENDSSH

ssh -i ~/.ssh/doskaboard-backend.pem ec2-user@ec2-18-202-29-197.eu-west-1.compute.amazonaws.com << 'ENDSSH'
sudo yum update -y
cd adboard
git checkout .
git pull origin master
yarn --frozen-lockfile
pm2 restart all
ENDSSH
