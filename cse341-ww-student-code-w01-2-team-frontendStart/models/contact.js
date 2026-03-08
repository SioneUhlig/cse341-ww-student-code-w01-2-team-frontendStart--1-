const mongodb = require('../routes/data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async () => {
  const result = await mongodb.getDatabase().collection('contacts').find();
  return result.toArray();
};

const getContactById = async (id) => {
  const contactId = new ObjectId(id);
  const result = await mongodb.getDatabase().collection('contacts').find({ _id: contactId });
  const contacts = await result.toArray();
  return contacts[0];
};

module.exports = {
  getAllContacts,
  getContactById
};