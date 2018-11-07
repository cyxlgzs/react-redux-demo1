import openSocket from 'socket.io-client';


function getNewSocket(){
    return openSocket("http://47.99.217.151:3000");
}

export default getNewSocket;