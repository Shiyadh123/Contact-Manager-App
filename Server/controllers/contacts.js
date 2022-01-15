import Contact from "../models/contact.js";

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const createContact = (req, res) => {
  const contact = req.body;
  const newContact = new Contact(contact);
  try {
    newContact.save();
    res.json(newContact);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const deleteContact = (req, res) => {
  const idToDelete = req.params.id;
  try {
    Contact.deleteOne({ id: idToDelete }, (err) => {
      if (err) {
        res.json({ message: err.message });
      }
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const updateContact = (req, res) => {
  const id = req.body.id;
  try {
    Contact.findOneAndUpdate(
      { id: id },
      req.body,
      { new: true },
      function (err, doc) {
        if (err) return res.send(500, { error: err });
        else res.send(doc);
      }
    );
  } catch (err) {
    res.json({ message: err.message });
  }
};

export { getContacts, createContact, deleteContact, updateContact };
