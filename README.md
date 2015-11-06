# backbone-react app skeleton

this is an app skeleton to setup a react backbone app

use with docker: 

docker build -t react-backbone .

docker run -it --rm -v $(pwd):/app -p 8082:8080 -h frontend --name frontend react-backbone
