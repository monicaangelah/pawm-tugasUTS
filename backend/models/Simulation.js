// models/Simulation.js
import mongoose from 'mongoose';

const simulationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true }, // Jenis simulasi, misalnya 'matrix-calculator' atau 'plotting-a-function'
  data: { type: Object, required: true }, // Data simulasi yang disimpan
  createdAt: { type: Date, default: Date.now },
});

const Simulation = mongoose.model('Simulation', simulationSchema);

export default Simulation;