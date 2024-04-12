import {T_ListProducts} from './types';

export const useLogic = () => {
  const ListProducts: Array<T_ListProducts> = [
    {
      id: '123',
      name: 'Ayam geprek level 1',
      description: 'Paket Ayam Geprek + Nasi, dengan tingkat kepedasan level 1',
      image:
        'https://www.shutterstock.com/image-photo/ayam-geprek-indonesian-food-crispy-600nw-2253297977.jpg',
      isDiscount: false,
      price: 150000,
      priceAfterDiscount: 0,
      type: 'MAKANAN',
      stock: 500,
    },
    {
      id: '124',
      name: 'Ayam geprek level 2',
      description: 'Paket Ayam Geprek + Nasi, dengan tingkat kepedasan level 2',
      image:
        'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/17055245/Rendah-Kalori-Ini-Resep-Ayam-Geprek-Pedas-Ala-Rumahan-.jpg.webp',
      isDiscount: false,
      price: 15000,
      priceAfterDiscount: 0,
      type: 'MAKANAN',
      stock: 100,
    },
    {
      id: '125',
      name: 'Nasi Putih',
      description: 'Nasi putih Hangat',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Nasi_dibentuk_bulat.jpg/800px-Nasi_dibentuk_bulat.jpg',
      isDiscount: false,
      price: 5000,
      priceAfterDiscount: 0,
      type: 'MAKANAN',
      stock: 100,
    },
    {
      id: '126',
      name: 'Es teh manis',
      description: 'Es teh manis',
      image:
        'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/15093247/Ketahui-Fakta-Es-Teh-Manis.jpg',
      isDiscount: true,
      price: 5000,
      priceAfterDiscount: 3000,
      type: 'MINUMAN',
      stock: 100,
    },
    {
      id: '121',
      name: 'Ayam geprek level 1',
      description: 'Paket Ayam Geprek + Nasi, dengan tingkat kepedasan level 1',
      image:
        'https://www.shutterstock.com/image-photo/ayam-geprek-indonesian-food-crispy-600nw-2253297977.jpg',
      isDiscount: false,
      price: 15000,
      priceAfterDiscount: 0,
      type: 'MAKANAN',
      stock: 100,
    },
    {
      id: '122',
      name: 'Ayam geprek level 2',
      description: 'Paket Ayam Geprek + Nasi, dengan tingkat kepedasan level 2',
      image:
        'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/17055245/Rendah-Kalori-Ini-Resep-Ayam-Geprek-Pedas-Ala-Rumahan-.jpg.webp',
      isDiscount: false,
      price: 15000,
      priceAfterDiscount: 0,
      type: 'MAKANAN',
      stock: 100,
    },
    {
      id: '111',
      name: 'Nasi Putih',
      description: 'Nasi putih Hangat',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Nasi_dibentuk_bulat.jpg/800px-Nasi_dibentuk_bulat.jpg',
      isDiscount: false,
      price: 5000,
      priceAfterDiscount: 0,
      type: 'MAKANAN',
      stock: 100,
    },
    {
      id: '112',
      name: 'Es teh manis',
      description: 'Es teh manis',
      image:
        'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/15093247/Ketahui-Fakta-Es-Teh-Manis.jpg',
      isDiscount: true,
      price: 5000,
      priceAfterDiscount: 3000,
      type: 'MINUMAN',
      stock: 100,
    },
    {
      id: '113',
      name: 'Ayam geprek level 1',
      description: 'Paket Ayam Geprek + Nasi, dengan tingkat kepedasan level 1',
      image:
        'https://www.shutterstock.com/image-photo/ayam-geprek-indonesian-food-crispy-600nw-2253297977.jpg',
      isDiscount: false,
      price: 15000,
      priceAfterDiscount: 0,
      type: 'MAKANAN',
      stock: 100,
    },
    {
      id: '1114',
      name: 'Ayam geprek level 2',
      description: 'Paket Ayam Geprek + Nasi, dengan tingkat kepedasan level 2',
      image:
        'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/17055245/Rendah-Kalori-Ini-Resep-Ayam-Geprek-Pedas-Ala-Rumahan-.jpg.webp',
      isDiscount: false,
      price: 15000,
      priceAfterDiscount: 0,
      type: 'MAKANAN',
      stock: 100,
    },
    {
      id: '1114',
      name: 'Ayam geprek level 2',
      description: 'Paket Ayam Geprek + Nasi, dengan tingkat kepedasan level 2',
      image:
        'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/17055245/Rendah-Kalori-Ini-Resep-Ayam-Geprek-Pedas-Ala-Rumahan-.jpg.webp',
      isDiscount: false,
      price: 15000,
      priceAfterDiscount: 0,
      type: 'MAKANAN',
      stock: 100,
    },
    {
      id: '1114',
      name: 'Ayam geprek level 2',
      description: 'Paket Ayam Geprek + Nasi, dengan tingkat kepedasan level 2',
      image:
        'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/17055245/Rendah-Kalori-Ini-Resep-Ayam-Geprek-Pedas-Ala-Rumahan-.jpg.webp',
      isDiscount: false,
      price: 15000,
      priceAfterDiscount: 0,
      type: 'MAKANAN',
      stock: 100,
    },
    {
      id: '1114',
      name: 'Ayam geprek level 2',
      description: 'Paket Ayam Geprek + Nasi, dengan tingkat kepedasan level 2',
      image:
        'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/17055245/Rendah-Kalori-Ini-Resep-Ayam-Geprek-Pedas-Ala-Rumahan-.jpg.webp',
      isDiscount: false,
      price: 15000,
      priceAfterDiscount: 0,
      type: 'MAKANAN',
      stock: 100,
    },
    {
      id: '1114',
      name: 'Ayam geprek level 2',
      description: 'Paket Ayam Geprek + Nasi, dengan tingkat kepedasan level 2',
      image:
        'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/17055245/Rendah-Kalori-Ini-Resep-Ayam-Geprek-Pedas-Ala-Rumahan-.jpg.webp',
      isDiscount: false,
      price: 15000,
      priceAfterDiscount: 0,
      type: 'MAKANAN',
      stock: 100,
    },
  ];

  return {
    ListProducts,
  };
};