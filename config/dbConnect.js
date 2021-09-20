import mongoose from 'mongoose';

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  // TODO
  mongoose.connect(
    'mongodb+srv://trivopr:admin123@cluster0.tnu6d.mongodb.net/Cluster0?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log('Connected to MongoDB!!!');
    }
  );
};

export default dbConnect;
