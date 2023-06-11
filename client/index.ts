import { HelloClient } from "../proto/hello_grpc_pb";
import { credentials } from "grpc";
import { HelloRequest } from "../proto/hello_pb";

const port = 3000;

export const client = new HelloClient(
  `localhost:${port}`,
  credentials.createInsecure()
);

async function run() {
    let n = 0;
    setInterval(() => {
        const req = new HelloRequest();
        req.setName(`Number ${n++}`)

        client.greet(req, (err, res) => {
            if (err) {
                console.log('err', err)
            } else {
                console.log(res.getMessage())
            };
        });
    }, 1000);
}
  
run();