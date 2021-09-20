const mongoose = require('mongoose');
const Room = require('../models/room');
const rooms = require('../data/rooms');
const Posts = require('../models/posts');
const posts = require('../data/posts');
const Banners = require('../models/banner');
const banner = require('../data/banner');
'mongodb://localhost:27017/freenext',
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

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log('Rooms are deleted');

    await Room.insertMany(rooms);
    console.log('All Rooms are added.');

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

const seedPosts = async () => {
  try {
    await Posts.deleteMany();
    console.log('Posts are deleted');

    await Posts.insertMany(posts);
    console.log('All Posts are added.');

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

const seedBanner = async () => {
  try {
    await Banners.deleteMany();
    console.log('Banners are deleted');

    await Banners.insertMany(banner);
    console.log('All Banner are added.');

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
seedPosts();
seedBanner();
