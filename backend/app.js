// Memuat variabel lingkungan dari .env
import dotenv from 'dotenv';
dotenv.config({ path: './.env' }); // Pastikan path benar jika .env ada di folder backend

// Import module yang diperlukan
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Import rute dari folder routes
import authRoutes from './routes/auth.js';
import protectedRoutes from './routes/protected.js';

// Import model Simulation
import Simulation from './models/Simulation.js';

// Membuat instance express
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Periksa apakah MONGO_URI telah terbaca dengan benar
if (!MONGO_URI) {
  console.error("Error: MONGO_URI tidak ditemukan di file .env");
  process.exit(1); // Menghentikan aplikasi jika MONGO_URI tidak ada
}

// Mengaktifkan middleware cors dengan konfigurasi yang fleksibel
app.use(cors({
  origin: ['http://localhost:5500', 'http://127.0.0.1:5500'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware untuk parsing JSON
app.use(express.json());

// Koneksi ke MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Could not connect to MongoDB:', err);
    process.exit(1); // Menghentikan aplikasi jika koneksi gagal
  });

// Menggunakan rute autentikasi dan rute yang dilindungi
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Ekspor aplikasi Express sebagai default
export default app;
