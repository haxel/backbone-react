# backbone-react app skeleton

this is an app skeleton to setup a react backbone app
use with docker: 

    docker build -t react-backbone .
    docker run -it --rm -v $(pwd):/app -p 8082:8080 -h frontend --name frontend react-backbone

example taken from https://medium.com/react-tutorials/react-edge-backbone-requirejs-15602e6f88fa
