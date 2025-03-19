'use client';

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function MetodeHafalan() {
  const [activeTab, setActiveTab] = useState('metode1');

  const metodeHafalan = [
    {
      id: 'metode1',
      nama: 'Metode Talqin',
      deskripsi:
        'Metode ini dilakukan dengan cara mendengarkan ayat-ayat yang akan dihafal secara berulang-ulang hingga tersimpan dalam pikiran.',
      langkah: [
        'Dengarkan ayat dari guru atau rekaman dengan seksama',
        'Ulangi mendengarkan 5-10 kali sampai terekam di memori',
        'Coba membaca tanpa melihat mushaf',
        'Ulangi proses sampai lancar',
      ],
      kelebihan: 'Sangat efektif untuk visual learner dan anak-anak',
      kelemahan: 'Membutuhkan waktu dan kesabaran yang cukup',
    },
    {
      id: 'metode2',
      nama: 'Metode Wahdah',
      deskripsi:
        'Metode ini dilakukan dengan menghafal satu per satu ayat Al-Quran hingga mencapai target hafalan.',
      langkah: [
        'Baca ayat pertama 20 kali sampai lancar',
        'Lanjutkan ke ayat kedua dengan cara yang sama',
        'Gabungkan ayat pertama dan kedua, baca 20 kali',
        'Lanjutkan hingga mencapai target',
      ],
      kelebihan: 'Hafalan sangat kuat dan terjaga',
      kelemahan: 'Membutuhkan waktu yang lebih lama',
    },
    {
      id: 'metode3',
      nama: "Metode Sima'i",
      deskripsi:
        'Metode menghafal dengan mendengarkan, baik dari guru atau rekaman murattal.',
      langkah: [
        'Dengarkan ayat dari guru atau rekaman dengan seksama',
        'Ulangi mendengarkan secara rutin',
        'Coba membaca bersama rekaman',
        'Ulangi sendiri tanpa rekaman',
      ],
      kelebihan: 'Cocok untuk tipe auditori dan orang yang sibuk',
      kelemahan: 'Membutuhkan konsentrasi pendengaran yang tinggi',
    },
    {
      id: 'metode4',
      nama: "Metode Jama'i",
      deskripsi:
        'Metode menghafal berjamaah atau bersama-sama dipimpin oleh seorang instruktur.',
      langkah: [
        'Instruktur membacakan ayat',
        'Peserta menirukan bersama-sama',
        'Diulang 5-10 kali dengan suara lantang',
        'Peserta mencoba membaca tanpa melihat secara bergantian',
      ],
      kelebihan: 'Menumbuhkan semangat kompetisi dan saling mendukung',
      kelemahan: 'Kecepatan hafalan tergantung pada kemampuan kelompok',
    },
    {
      id: 'metode5',
      nama: 'Metode Kitabah',
      deskripsi:
        'Metode menghafal dengan menulis ayat-ayat yang akan dihafal terlebih dahulu.',
      langkah: [
        'Tulis ayat yang akan dihafal di kertas',
        'Baca ayat tersebut hingga lancar',
        'Hafalkan ayat sambil melihat tulisan',
        'Ulangi hafalan tanpa melihat tulisan',
      ],
      kelebihan: 'Sangat membantu untuk tipe visual dan kinestetik',
      kelemahan: 'Membutuhkan waktu untuk menulis terlebih dahulu',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Metode Hafalan Al-Quran</title>
        <meta
          name="description"
          content="Informasi tentang berbagai metode hafalan Al-Quran"
        />
      </Head>

      <header className="bg-green-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center">
            Metode Hafalan Al-Quran
          </h1>
          <p className="text-center mt-2">
            Berbagai cara untuk memudahkan proses menghafal Al-Quran
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Kenapa Metode Hafalan Penting?
          </h2>
          <p className="text-gray-600 mb-4">
            Menghafal Al-Quran merupakan salah satu bentuk ibadah yang mulia.
            Dengan metode hafalan yang tepat, proses menghafal dapat menjadi
            lebih efektif, efisien, dan menyenangkan. Setiap orang memiliki gaya
            belajar yang berbeda, oleh karena itu pemilihan metode hafalan yang
            sesuai sangat penting untuk keberhasilan dalam menghafal Al-Quran.
          </p>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-1/2 relative h-64">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Gambar Ilustrasi Al-Quran</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Metode-Metode Hafalan
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-wrap border-b">
              {metodeHafalan.map((metode) => (
                <button
                  key={metode.id}
                  className={`px-4 py-3 text-sm font-medium ${
                    activeTab === metode.id
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-green-50'
                  }`}
                  onClick={() => setActiveTab(metode.id)}
                >
                  {metode.nama}
                </button>
              ))}
            </div>
            <div className="p-6">
              {metodeHafalan.map((metode) => (
                <div
                  key={metode.id}
                  className={`${activeTab === metode.id ? 'block' : 'hidden'}`}
                >
                  <h3 className="text-xl font-semibold text-green-600 mb-2">
                    {metode.nama}
                  </h3>
                  <p className="text-gray-600 mb-4">{metode.deskripsi}</p>

                  <h4 className="font-semibold text-gray-700 mb-2">
                    Langkah-langkah:
                  </h4>
                  <ul className="list-disc pl-5 mb-4 text-gray-600">
                    {metode.langkah.map((step, index) => (
                      <li key={index} className="mb-1">
                        {step}
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-600 mb-2">
                        Kelebihan:
                      </h4>
                      <p className="text-gray-600">{metode.kelebihan}</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-600 mb-2">
                        Kelemahan:
                      </h4>
                      <p className="text-gray-600">{metode.kelemahan}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Tips Menghafal Al-Quran
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                Konsistensi
              </h3>
              <p className="text-gray-600">
                Jadwalkan waktu khusus setiap hari untuk menghafal, meski hanya
                15-30 menit.
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-600 mb-2">
                Muraja'ah
              </h3>
              <p className="text-gray-600">
                Lakukan pengulangan hafalan secara rutin agar tidak mudah lupa.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">
                Pahami Makna
              </h3>
              <p className="text-gray-600">
                Pelajari arti ayat untuk mempermudah proses menghafal dan
                memahami.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-600 mb-2">
                Gunakan Satu Mushaf
              </h3>
              <p className="text-gray-600">
                Gunakan satu mushaf yang sama untuk membantu memori visual.
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-red-600 mb-2">
                Cari Guru/Pembimbing
              </h3>
              <p className="text-gray-600">
                Memiliki guru akan membantu mengoreksi bacaan dan memberi
                motivasi.
              </p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                Niat Ikhlas
              </h3>
              <p className="text-gray-600">
                Niatkan menghafal Al-Quran untuk mendapatkan ridha Allah SWT.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Informasi Metode Hafalan Al-Quran
          </p>
          <p className="text-gray-400 mt-2">
            Dikembangkan untuk membantu para penghafal Al-Quran
          </p>
        </div>
      </footer>
    </div>
  );
}
