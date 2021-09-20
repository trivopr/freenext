import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { allPosts } from '../../../controllers/postControllers';
import onError from '../../../middlewares/errors';

dbConnect();

const handler = nc({ onError });
handler.get(allPosts)

export default handler;