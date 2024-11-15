# Tugas 2 II3140 Pengembangan Aplikasi Web dan Mobile
## Monica Angela Hartono - 18222078

## Description
Mathoria merupakan sebuah platform belajar Matematika yang berbasis HTML, CSS, dan Javascript khususnya untuk mahasiswa TPB ITB. Mathoria menyajikan berbagai materi Matematika TPB ITB dengan lebih sederhana dan mudah dipahami sehingga memberikan pengalaman belajar yang menyenangkan.

## Fitur yang Ditambahkan
1. Register: Digunakan untuk pengguna baru yang belum pernah menggunakan Virtual Lab Mathoria sebelumnya. Pengguna mendaftarkan akunnya dengan menginput username dan password.
2. Log In: Digunakan untuk pengguna yang sudah pernah menggunakan Virtual Lab Mathoria sebelumnya. Pengguna melakukan log in dengan menginpun username dan password yang sudah pernah didaftarkan sebelumnya.
3. Log Out: Digunakan untuk mengakhiri sesi pengguna pada Virtual Lab Mathoria. Ketika menekan "log out", pengguna akan diarahkan kembali ke halaman log in.
4. Penyimpanan Hasil Simulasi: Digunakan untuk menyimpan hasil simulasi yang pernah dilakukan oleh pengguna. Hasil simulasi disimpan pada database (MongoDB Atlas).

## Tech Stack
1. FrontEnd: HTML, CSS, JavaScript
2. BackEnd: Node.js, Express.js, MongoDB Atlas
3. Hosting: Vercel (Front End dan Back End)

## FrontEnd Hosting Link
```
https://mathoria.vercel.app
```

## BackEnd Hosting Link
```
https://mathoria-backend.vercel.app
```

## Repository Link
```
https://github.com/monicaangelah/pawm-tugasUTS.git
```

## How to Run Project on Your Local?
*notes* : Hosting FrontEnd dan BackEnd pada Vercel dalam pengembangan Virtual Lab Mathoria tidak sepenuhnya berjalan mulus. Terdapat kendala saat melakukan hosting pada BackEnd, yaitu server tidak terbaca sehingga tampilan menjadi 404: NOT_FOUND. Karena gagal dalam melakukan hosting BackEnd, hosting FrontEnd pun terkena imbasnya. Ketika menjalankan FrontEnd Hosting Link, tampilan hanya sampai register dan login, tidak bisa masuk ke main page dan melakukan simulasi. Hal ini terjadi karena antara FrontEnd dan BackEnd belum saling terhubung. Karena permasalahan dalam hosting ini, saya memberikan cara lain untuk mencoba website dalam localhost masing-masing.
1. Clone GitHub Repository
```
https://github.com/monicaangelah/pawm-tugasUTS.git
```
2. Jalankan Proyek pada Direktori Backend
```
node app.js
```
3. Setelah berhasil, akan terdapat output "Server is running on port 3000" dan "Connected to MongoDB".
4. Buka file index.html di root pada VSCode, lalu "Open with Live Server".
5. Tampilan website akan muncul pada browser yang digunakan. Pengguna dapat melakukan registrasi, login, dan melakukan simulasi. Data-data saat pengguna melakukan registrasi, login dan simulasi akan tersimpan di database MongoDB Atlas. 
