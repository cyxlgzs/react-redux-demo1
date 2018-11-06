import openSocket from 'socket.io-client';


function getNewSocket(){
    return openSocket("ws://47.99.217.151:3000");
}

export default getNewSocket;