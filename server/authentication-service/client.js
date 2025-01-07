import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

// Load the protobuf definition
const protoPath = './protos/profile.proto';
const packageDefinition = protoLoader.loadSync(protoPath);
const profileProto = grpc.loadPackageDefinition(packageDefinition).profile;

// Create the gRPC client
const client = new profileProto.ProfileService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

const updateProfileInProfileService = (userId, name, email, bio) => {
    const call = client.UpdateProfileStream();

    // Send multiple actions/requests (for duplex communication)
    call.write({
        action: 'create',
        userId: userId,
        name: name,
        email: email,
        bio: bio
    });

    // Handling incoming responses from Profile Service
    call.on('data', (response) => {
        console.log('Profile Service response:', response.message);
    });

    call.on('end', () => {
        console.log('Profile update stream ended.');
    });

    // You could also send another request if necessary before ending the stream
    // You can call call.write for multiple requests if needed

    // End the streaming connection
    call.end();
};

export default updateProfileInProfileService;
