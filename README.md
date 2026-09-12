# Servisku API

REST API backend untuk aplikasi **Servisku**, sebuah aplikasi web yang membantu pengguna melihat informasi komponen dan interval servis berkala berdasarkan tipe sepeda motor.

Backend dibangun menggunakan **Laravel** dan **MySQL**, kemudian digunakan oleh frontend React melalui REST API.

## Fitur

* Menampilkan daftar motor
* Pencarian data motor
* Menampilkan detail motor berdasarkan slug
* Menampilkan komponen servis berdasarkan tipe motor
* Relasi motor dengan komponen servis
* Seeder data motor dan komponen servis
* REST API untuk integrasi dengan frontend Servisku

## Teknologi

* Laravel
* PHP
* MySQL / MariaDB
* Eloquent ORM
* REST API
* Composer

## Endpoint API

### Daftar Motor

```http
GET /api/motorcycles
```

Mengambil seluruh data motor yang tersedia.

Pencarian motor juga dapat dilakukan menggunakan query pencarian.

```http
GET /api/motorcycles?search=Beat
```

### Detail Motor

```http
GET /api/motorcycles/{slug}
```

Mengambil detail motor beserta informasi komponen servis berdasarkan slug.

Contoh:

```http
GET /api/motorcycles/honda-beat-fi-110
```

## Instalasi

Clone repository:

```bash
git clone https://github.com/baihaqiwahyu/servisku-api.git
```

Masuk ke folder project:

```bash
cd servisku-api
```

Install dependency Laravel:

```bash
composer install
```

Salin file environment:

```bash
cp .env.example .env
```

Generate application key:

```bash
php artisan key:generate
```

Atur konfigurasi database pada file `.env`.

Contoh:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=servisku
DB_USERNAME=root
DB_PASSWORD=
```

Jalankan migration dan seeder:

```bash
php artisan migrate --seed
```

Jalankan development server:

```bash
php artisan serve
```

API akan tersedia secara default di:

```text
http://127.0.0.1:8000/api
```

## Frontend

Frontend Servisku dibuat menggunakan **React, Vite, dan Tailwind CSS**.

Repository frontend:

https://github.com/baihaqiwahyu/servisku

Frontend menggunakan environment variable berikut untuk menentukan alamat backend:

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

## Struktur Aplikasi

Secara sederhana, alur aplikasi:

```text
React Frontend
      ↓
Servisku REST API
      ↓
Laravel
      ↓
Eloquent ORM
      ↓
MySQL
```

## Catatan

Data interval servis pada Servisku merupakan informasi panduan umum. Interval aktual dapat berbeda berdasarkan kondisi kendaraan, penggunaan, lingkungan, dan rekomendasi resmi dari produsen.

## Repository

* Frontend: https://github.com/baihaqiwahyu/servisku
* Backend API: https://github.com/baihaqiwahyu/servisku-api
