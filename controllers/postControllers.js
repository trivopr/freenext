import Posts from '../models/posts'
import ErrorHandler from '../utils/errorHandler'
import catchAsyncErrors from '../middlewares/catchAsyncErrors'
import APIFeatures from '../utils/apiFeatures'

// Create all posts   =>   /api/posts
const allPosts = catchAsyncErrors(async (req, res) => {

    const resPerPage = 4;

    const postsCount = await Posts.countDocuments();
    let posts = await Posts.find();

    res.status(200).json({
        success: true,
        postsCount,
        resPerPage,
        posts
    })

});


// Get post details   =>   /api/posts/:id
const getSinglePost = catchAsyncErrors( async (req, res) => {
    const postId = req.query.id;
    let post = await Posts.findById(postId);

    if (!post) {
        return next(new ErrorHandler('Post not found', 404))
    }

    res.status(200).json({
        success: true,
        post
    })
});

export { allPosts, getSinglePost }
