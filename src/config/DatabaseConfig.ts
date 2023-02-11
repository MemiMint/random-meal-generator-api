import mongoose, { Mongoose, ConnectOptions, ConnectionStates } from "mongoose";

const options: ConnectOptions = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 4000,
    family: 4
}

abstract class DatabaseConnection {
    private readonly connectionString: string;

    constructor() {
        this.connectionString = "";
    }

    protected GetConnection = async () => {
        try {
            const connection = await mongoose.connect(this.connectionString, options);

            if (connection.STATES.connected) {
                console.log("%c Database is connected", "color: #4AF626");
            } 

            else if (connection.STATES.connecting) {
                console.info("Database is connecting...")
            }

            else if (connection.STATES.disconnected) {
                console.error("Database is disconnected");
            }

            else if (connection.STATES.disconnected) {
                console.error("Database is disconnected");
            }

        } catch (error) {
            console.log("Something went wrong");
            console.error(error);
        }
    }
}

export { DatabaseConnection };