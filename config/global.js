const { readFileSync } = require("fs");

const metaData = {
  chatBotName: "Development Chatbot",
  /**
   * ***Session Creds***
   * - Bebas ubah nama
   * - Dapat dimanipulasi untuk memilih session yang ingin diaktifkan
   */
  sessionName: "chatbot-marketplace",
  cooldownsCommand: {
    dashboard: 10 * 000,
    catalog: 10 * 000,
    product: 5 * 000,
    upload: 10 * 000,
  },
  admin: {
    name: "Rizuky",
    number: "6281329585825",
  },
  developer: {
    name: "Rizuky",
    number: "6281329585825",
    numberID: "6281329585825@s.whatsapp.net", //6281329585825@s.whatsapp.net
  },
  templateData: {
    dashboardImage: "https://telegra.ph/file/445eb47f9b0833bc67378.png",
    marketplaceInfoImage: "https://telegra.ph/file/445eb47f9b0833bc67378.png",
    trialDashboard: "https://telegra.ph/file/445eb47f9b0833bc67378.png",
    emptyCatalog: "https://telegra.ph/file/f9b8835fc934ccb8f2165.png",
  },
  gifPlayback: {
    marketplaceDashboard: readFileSync(
      "./store/images/dashboard-marketplace.mp4"
    ),
    adminDashboard: readFileSync("./store/images/dashboard-admin.mp4"),
    userDashboard: readFileSync("./store/images/dashboard-user.mp4"),
    demo: readFileSync("./store/images/user-demo.mp4"),
    uploadSucces: readFileSync("./store/images/state-loading-upload.mp4"),
    editSuccess: readFileSync("./store/images/state-loading-edit.mp4"),
    deleteSuccess: readFileSync("./store/images/state-loading-delete.mp4"),
    // trial
    newUser: readFileSync("./store/images/state-user-new.mp4"),
    userDelete: readFileSync("./store/images/state-user-delete.mp4"),
  },
};
/**
 * ***Message Handler***
 *
 * Bebas untuk memodifikasi pesan
 */
const message = {
  notOwner: "Kamu bukan Administrator/Owner dari marketplace ini!",
  notRegasAdmin:
    "Kamu bukan Admin marketplace ini!, silahkan hubungi Owner marketplace untuk info lebih lanjut.",
  hasRegasAdmin: "Nomor ini sudah terdaftar sebagai Admin sebelumnya",
  notValidIDAdmin: "ID admin tidak valid!",
  notRegasTrialUser:
    'Kamu belum membuat katalog, silahkan buat terlebih dahulu dengan cara:\nAkses menu "!dashboard" terlebih dahulu, kemudian ketuk tombol "Coba Demo/Trial" ikuti langkah selanjutnya.',
  alreadyRegistered: "Kamu sudah terdaftar Demo sebelumnya!.",
  noValidID:
    "ID Produk yang dimasukan tidak valid, salah atau produk sudah dihapus sebelumnya!",
  hasNoProducts:
    "\nKamu belum menambahkan produk ke katalog, silahkan download modul panduan untuk mengetahui tata cara menambahkan produk ke dalam katalog\n",
  hasNoDashboard:
    "Belum ada caption kata-kata promosi, Kamu dapat mengubahnya dengan cara:\n*!editdashboard Kata-kata promosimu ....*\n",
  wrongFormat: {
    upload:
      'Contoh Penggunaan:\nkirim foto/gambar produk dengan caption ".upload Nama produk # Harga produk (nomor/huruf) # Kategori produk # Deskripsi produk ... max 500 kata"\n\nGunakan tanda "#" sebagai pemisah dari tiap parameter, pastikan input sesuai aturan, jika tidak maka kemungkinan dapat terjadi Error.',
    delete: "Contoh Penggunaan:\n.hapusproduk ID Produk",
    edit: {
      all: 'Contoh Penggunaan:\nkirim foto/gambar produk dengan caption ".editproduk serial ID Produk # Nama produk # Harga produk (nomor/huruf) # Kategori produk # Deskripsi produk"\n\nGunakan tanda "#" sebagai pemisah dari tiap parameter, pastikan input sesuai aturan, jika tidak maka kemungkinan dapat terjadi Error.',
      name: "Contoh Penggunaan:\n.editnama serial ID Produk # Nama produk baru",
      price:
        "Contoh Penggunaan:\n.editharga serial ID Produk # Harga produk baru",
      category:
        "Contoh Penggunaan:\n.editkategori serial ID Produk # Kategori produk baru",
      stock:
        "Contoh Penggunaan:\n.editstok serial ID Produk # Stok produk baru",
      desc: "Contoh Penggunaan:\n.editdeskripsi serial ID Produk # Deskripsi produk baru",
    },
    unfullFilled: {
      ID: "ID Produk tidak dimasukan!",
      image: "Tidak ada gambar produk!",
      name: "Tidak ada Nama Produk!",
      price: "Harga produk belum dimasukan!",
      category: "Kategori produk belum ditentukan/kosong!",
      stock: "Stok produk belum dimasukan!",
      desc: "Deskripsi produk belum dimasukan!",
    },
  },
  hasError: "Maaf, spertinya terjadi Error",
  noProductsToRecap: "Tidak ada Produk untuk direkap Datanya!",
  noStatisticsToRecap: "Tidak ada Data Statistik untuk direkap!",
  howToAddAdmin:
    'Promosikan Admin baru dengan cara: "!adminbaru nomor admin baru"\nContoh: !adminbaru 62123456789\n\n*pastikan awalan nomor "62" atau menggunakan format negara.',
  cancelAddAdmin: "Penambahan Admin telah dibatalkan",
  cancelDeleteProduct: "Penghapusan Produk telah dibatalkan",
};
/**
 * ***MongoDB Configurations***
 * - URI merupakan link database yang sudah include Username dan Password
 * - DATABASE, nama Database yang sudah dibuat sebelumnya
 * - COLLECTION, collection yang ada di dalam Database
 *
 * Tidak perlu setup untuk Collection, akan otomatis membuat Collection baru jika Collection yang dituju tidak ada.
 *
 * Bebas untuk mengganti Nama Database / Collection
 */
const ATLAS = {
  URI: "PASTE LINK URI MONGODB DISINI",
  DATABASE: "Chatbot-Marketplace",
  COLLECTION: {
    /** Data Dashboard */
    DATABOT: "data-dashboard-chatbot",
    /** Data Admin */
    ADMIN: "data-admin-marketplace",
    /** Data Etalase */
    ETALASE: {
      MAIN: "catalogue-main",
      // bisa menambah katalog baru lagi...
    },
    /** Data Statistik */
    STATISTICS: "D-marketplace-statistics",
  },
};

module.exports = { ATLAS, message, metaData };
