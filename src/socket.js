import openSocket from 'socket.io-client';

const io = openSocket("ws://47.99.217.151:3000");

export default io;