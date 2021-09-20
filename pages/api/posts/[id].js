import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'
import { getSinglePost } from '../../../controllers/postControllers';
import onError from '../../../middlewares/errors'

dbConnect();

const handler = nc({ onError });
handler.get(getSinglePost)


export default handler;