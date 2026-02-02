const Resource = require('../models/Resource');

// 1. Create a new Resource
exports.createResource = async (req, res) => {
  try {
    // We add the "owner" ID manually from the logged-in user (req.user.id)
    // (We will set req.user in the next step using middleware)
    const newResource = await Resource.create({
      ...req.body,
      owner: req.user.id 
    });

    res.status(201).json({
      status: 'success',
      data: { resource: newResource }
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

// 2. Get All Resources
exports.getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    
    res.status(200).json({
      status: 'success',
      results: resources.length,
      data: { resources }
    });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err.message });
  }
};