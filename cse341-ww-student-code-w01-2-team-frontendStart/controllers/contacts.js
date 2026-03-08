const Contact = require('../models/contact');

const getAll = async (req, res) => {
  const contacts = await Contact.getAllContacts();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(contacts);
};

const getSingle = async (req, res) => {
  const contact = await Contact.getContactById(req.params.id);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(contact);
};

module.exports = {
  getAll,
  getSingle
};