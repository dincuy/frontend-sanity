// Tipe untuk produk
export type Product = {
    _id: string;
    hargaJual: string;
    produk: string;
    provider: string;
    kategori: string;
    jenisPaket: string;
    harga: string;
    desc: string;
    dibuatPada: string;
  };
  
  // Tipe untuk kategori
  export type Category = {
    _id: string;
    name: string;
  };
  
  // Tipe untuk provider
  export type Provider = {
    _id: string;
    name: string;
  };
  
  // Tambahkan tipe lain yang kamu perlukan di sini
  