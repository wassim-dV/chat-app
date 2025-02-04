import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://joker:OkVuOAT14LMdvdUH@cluster0.5gfzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
		await mongoose.connect(process.env.MONGO_DB_URI);

		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;