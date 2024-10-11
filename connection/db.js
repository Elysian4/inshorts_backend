import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb+srv://${username}:${password}@inshort.psxqe.mongodb.net/?retryWrites=true&w=majority&appName=inshort`
        // mongodb+srv://root:<db_password>
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;