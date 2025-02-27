// routes.js
const express = require('express');
const Content = require('./models/Content'); // Import content model
const router = express.Router();

// CREATE - Add new content (joke, story, skill)
router.post('/content', async (req, res) => {
  try {
    const { title, body, category } = req.body;
    const newContent = new Content({ title, body, category });
    await newContent.save();
    res.status(201).json(newContent);
  } catch (error) {
    res.status(400).json({ message: 'Error creating content', error });
  }
});

// READ - Get all content (jokes, stories, skills)
router.get('/content', async (req, res) => {
  try {
    const content = await Content.find();
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching content', error });
  }
});

// READ - Get a single content by ID
router.get('/content/:id', async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching content', error });
  }
});

// UPDATE - Update content by ID
router.put('/content/:id', async (req, res) => {
  try {
    const { title, body, category } = req.body;
    const updatedContent = await Content.findByIdAndUpdate(
      req.params.id,
      { title, body, category },
      { new: true }
    );
    if (!updatedContent) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json(updatedContent);
  } catch (error) {
    res.status(400).json({ message: 'Error updating content', error });
  }
});

// DELETE - Delete content by ID
router.delete('/content/:id', async (req, res) => {
  try {
    const deletedContent = await Content.findByIdAndDelete(req.params.id);
    if (!deletedContent) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting content', error });
  }
});

module.exports = router;
