//it is statement just like an import in java.
//we are importing http module in with help of require()
const http=require("http");


//create chat server

const server=require("websocket").server;

//assign port number to server

const socket=new server(
    {
        httpServer:http.createServer().listen(8085,()=>{
            console.log("server is listening on port number 8085");
        })
    }
);

//connect , receive data , send response and close connection 

socket.on("request",function(request){
    let connection=request.accept(null,request.origin)
         connection.on("message",function(message){
        console.log(message.utf8Data);
        connection.sendUTF("Hello ... how are you ...coming to server");
        connection.sendUTF("Hi fine...coming to server");

    })


//close the connection

connection.on("close",function(connection){
    console.log("Connection closed");
})
})