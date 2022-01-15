import express from "express";
const router = express.Router();
import {
  getContacts,
  createContact,
  deleteContact,
  updateContact,
} from "../controllers/contacts.js";

router.get("/contacts", getContacts);
router.post("/contacts", createContact);
router.put("/contacts/:id", updateContact);
router.delete("/contacts/:id", deleteContact);

export default router;
