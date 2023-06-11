import { Server, ServerCredentials, ServerUnaryCall, sendUnaryData } from "grpc";
import { HelloService, IHelloServer } from "../proto/hello_grpc_pb";
import { HelloRequest, HelloResponse } from "../proto/hello_pb";

class HelloServerImplementation implements IHelloServer {
    greet(call: ServerUnaryCall<HelloRequest>, callback: sendUnaryData<HelloResponse>) {
        const res = new HelloResponse();
        res.setMessage(`Server received ... ${call.request.getName()}`)
        callback(null, res);
    }
}

const server = new Server();
server.addService(HelloService, new HelloServerImplementation());

const port = 3000;
const uri = `localhost:${port}`;
console.log(`Listening on ${uri}`);
server.bind(uri, ServerCredentials.createInsecure());

server.start();