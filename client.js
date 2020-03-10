const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("messages.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const protoPackage = grpcObject.protoPackage;


//process.argv.forEach(function (val, index, array) {
//  console.log(index + ': ' + val);
//});

const client = new protoPackage.TheService("localhost:40000", 
grpc.credentials.createInsecure())


client.Add({
  "a": 1,
  "b": 2
}, (err, response) => {

  console.log("Recieved from server " + JSON.stringify(response))

})