import { Router } from "express";
import * as controller from "./controller.js"
const router=Router();
router.route("/display").post(controller.gettask)
router.route("/movies").get(controller.getdata)
router.route("/movieDetails/:id").post(controller.getdetails)
router.route("/delMovie/:id").delete(controller.delMovie)
router.route("/editmovie/:id").patch(controller.edit)
    // res.status(200).send("this is controller"))
export default router;