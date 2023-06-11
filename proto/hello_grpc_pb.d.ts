// package: hello
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as hello_pb from "./hello_pb";

interface IHelloService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    greet: IHelloService_IGreet;
}

interface IHelloService_IGreet extends grpc.MethodDefinition<hello_pb.HelloRequest, hello_pb.HelloResponse> {
    path: "/hello.Hello/Greet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<hello_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<hello_pb.HelloRequest>;
    responseSerialize: grpc.serialize<hello_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<hello_pb.HelloResponse>;
}

export const HelloService: IHelloService;

export interface IHelloServer {
    greet: grpc.handleUnaryCall<hello_pb.HelloRequest, hello_pb.HelloResponse>;
}

export interface IHelloClient {
    greet(request: hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    greet(request: hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    greet(request: hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}

export class HelloClient extends grpc.Client implements IHelloClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public greet(request: hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public greet(request: hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public greet(request: hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}
