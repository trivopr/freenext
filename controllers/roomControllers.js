import Room from '../models/room'
// import Booking from '../models/booking'

// import cloudinary from 'cloudinary'

import ErrorHandler from '../utils/errorHandler'
import catchAsyncErrors from '../middlewares/catchAsyncErrors'
import APIFeatures from '../utils/apiFeatures'

// Create all rooms   =>   /api/rooms
const allRooms = catchAsyncErrors(async (req, res) => {

    const resPerPage = 4;

    const roomsCount = await Room.countDocuments();
    let rooms = await Room.find();

    res.status(200).json({
        success: true,
        roomsCount,
        resPerPage,
        rooms
    })

});


// Get room details   =>   /api/rooms/:id
const getSingleRoom = catchAsyncErrors( async (req, res) => {
    const roomId = req.query.id;
    let room = await Room.findById(roomId);

    if (!room) {
        return next(new ErrorHandler('Room not found', 404))
    }

    res.status(200).json({
        success: true,
        room
    })
});

export { allRooms, getSingleRoom }
