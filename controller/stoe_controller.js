const store = require("../model/strore_schema");

exports.addStore = async (req, res) => {
    try {
        const { name, location } = req.body;
    
        if (!name || !location) {
          return res.status(400).json({ error: "Name and location are required." });
        }
    
        const newStore = new store({ name, location });
        const savedStore = await newStore.save();
    
        res.status(201).json({ message: "Store created successfully!", store: savedStore });
      } catch (error) {
        res.status(500).json({ error: "Server error. Please try again." });
      }
}

exports.getStores = async (req,res) => {
    try {
        const stores = await store.find();
        res.status(200).json({stores});
    }catch (error) {
        res.status(500).json({ error: "Server error. Please try again." });
      }
}

