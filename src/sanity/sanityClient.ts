import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'bkraz3f2',  // Ganti dengan projectId dari Sanity
  dataset: 'production',         // Dataset yang digunakan
  apiVersion: '2023-09-20',      // Sesuaikan versi API
  useCdn: true,                  // Gunakan true jika tidak butuh data real-time
});

export default sanityClient;
