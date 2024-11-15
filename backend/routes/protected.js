// routes/protected.js
import express from 'express';
import auth from '../middleware/auth.js';
import Simulation from '../models/Simulation.js';

const router = express.Router();

// Endpoint untuk akses protected
router.get('/protected', auth, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Endpoint untuk menyimpan hasil simulasi
router.post('/simulations/save', auth, async (req, res) => {
  const { type, data } = req.body;

  // Validasi input
  if (!type || !data) {
    return res.status(400).json({ error: 'Type and data are required' });
  }

  try {
    // Buat objek baru untuk menyimpan hasil simulasi
    const simulation = new Simulation({
      userId: req.user.id, // Mendapatkan ID pengguna dari token JWT
      type,
      data,
    });

    // Simpan hasil simulasi ke database
    await simulation.save();
    res.status(201).json({ message: 'Simulation saved successfully' });
  } catch (error) {
    console.error('Error saving simulation:', error);
    res.status(500).json({ error: 'Failed to save simulation' });
  }
});

// Endpoint untuk mendapatkan semua simulasi dari pengguna saat ini
router.get('/simulations', auth, async (req, res) => {
  try {
    // Dapatkan semua simulasi milik pengguna yang sedang login
    const simulations = await Simulation.find({ userId: req.user.id });
    res.json(simulations);
  } catch (error) {
    console.error('Error fetching simulations:', error);
    res.status(500).json({ error: 'Failed to fetch simulations' });
  }
});

export default router;
