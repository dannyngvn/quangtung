const data = [
  {
    id: '1',
    name: 'Thanh lăn giãn cơ Upttitude',
    company: 'Aria',
    price: 449999,
    colors: ['#000000'],
    sizes: ['13,5cm x 45cm'],
    image:
      'https://thamyoganamaste.com/wp-content/uploads/2022/10/z3825140909143_7e799214db2b716e7dee58709cdd6378-1.jpg',
    images: [
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2022/10/z3825140920354_d5c4fa79697ca822f74dc2d7de1fa5f4.jpg',
        filename: 'image1',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2022/10/z3825140903339_b4a1b8a18bfb168521dacb7cbec9376f.jpg',
        filename: 'image2',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2022/10/z3825140914377_14ec49f2a0ed8ecfa07078375bc44580.jpg',
        filename: 'image3',
      },
    ],
    description: 'Bổ trợ tốt nhất.',
    category: 'DỤNG CỤ PILATES',
    shipping: true,
    stars: 4,
    review: 100,
    stock: 20,
  },

  {
    id: '2',
    name: 'Khăn Yoga Lululemon',
    company: 'Toyogi',
    price: 1299999,
    colors: ['#22D3EF'],
    sizes: ['66 cm x 1.830 cm'],
    image:
      'https://thamyoganamaste.com/wp-content/uploads/2022/03/KV_Khan-Yoga-Lululemon_1647918750009.jpg',
    images: [
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2022/03/KV_Khan-Yoga-Lululemon_1647918750008.jpg',
        filename: 'image1',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2022/03/KV_Khan-Yoga-Lululemon_1647918750010.jpg',
        filename: 'image2',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2022/03/KV_Khan-Yoga-Lululemon_1647918750009.jpg',
        filename: 'image3',
      },
    ],
    description: [
      'Khăn trải thảm Lululemon The Towel. ',
      'Một trong những sản phẩm rất hữu ích cho người tập đổ nhiều mồ hôi, đồng thời giữ cho tấm thảm của mình luôn mới đẹp.  ',
      '💡Chất liệu Microfibre siêu bám và thấm hút mồ hôi tốt là đặc điểm nổi trội của chiếc khăn này.  ',
      '👉Trọng lượng khăn là 0,4kg, dài 1m83, rộng 66cm 👉 Rất phù hợp cho người tập thường xuyên di chuyển nơi tập.  ',
      '🔅Dễ dàng vệ sinh, có thể giặt bằng máy giặt, không giặt khô nhưng có thể sấy ở nhiệt độ thấp.',
    ],
    category: 'DỤNG CỤ YOGA',
    stars: 4,
    review: 100,
    stock: 20,
  },

  {
    id: '3',
    name: 'Tượng trang trí Yoga',
    price: 569999,
    company: 'Jade',
    colors: ['#CDD0D0', '#8ed1fc', '#0693e3'],
    sizes: ['Cao 24-29 cm, Ngang 22,5 cm, Rộng 8,5 cm'],
    image:
      'https://thamyoganamaste.com/wp-content/uploads/2022/06/KV_Tuong-trang-tri-YOGA_1654689455768-300x300.jpg',
    images: [
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2022/06/KV_Tuong-trang-tri-YOGA_1654689439131.jpg',
        filename: 'image1',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2022/06/KV_Tuong-trang-tri-YOGA_1654689574282.jpg',
        filename: 'image2',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2022/06/KV_Tuong-trang-tri-YOGA_1654689561816.jpg',
        filename: 'image3',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2022/06/KV_Tuong-trang-tri-YOGA_1654689439131.jpg',
        filename: 'image3',
      },
    ],
    description: 'Hoàn hảo đến từng chi tiết.',
    category: 'HÀNG DECOR',
    featured: true,
    shipping: true,
    stars: 4,
    review: 100,
    stock: 10,
  },

  {
    id: '4',
    name: 'Tất dài leg warmer Grom',
    company: 'Keep',
    price: 329999,
    colors: ['#000000', '#abb8c3'],
    sizes: ['FREESIZE'],
    image:
      'https://thamyoganamaste.com/wp-content/uploads/2023/03/z4220717898137_f0247b87acd5c28f58f687a3cb37877e.jpg',
    images: [
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2023/03/z4220717896097_eba761a8db4555f4b393bb9fc71f8ff7.jpg',
        filename: 'image1',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2023/03/z4220717898137_f0247b87acd5c28f58f687a3cb37877e.jpg',
        filename: 'image2',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2023/03/z4220717903059_f3b4bf04bb4938c90cb96bad9441440a.jpg',
        filename: 'image3',
      },
    ],
    description:
      'Không thể thoải mái, hấp dẫn hơn với sản phẩm tất dài leg warmer Grom.',
    category: 'PHỤ KIỆN YOGA',
    shipping: true,
    stars: 4,
    review: 100,
    stock: 10,
  },
  {
    id: '5',
    name: 'Áo Tank Lulu All Tied Up',
    company: 'Aria',
    price: 349999,
    colors: ['#f78da7', '#cf2e2e', '#fcb900', '#8ed1fc'],
    sizes: ['S', 'M', 'L', 'XL'],
    image:
      'https://thamyoganamaste.com/wp-content/uploads/2023/04/z4270886428451_b2bca264ac7f85394c161b05d0bec03c-300x300.jpg',
    images: [
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2023/04/z4270886428451_b2bca264ac7f85394c161b05d0bec03c.jpg',
        filename: 'image1',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2023/04/z4270886457482_b9e624817a27e7aa7651a0a3f9708528.jpg',
        filename: 'image2',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2023/04/z4270886416930_0540554695c9ad6164e697c0694b40c3.jpg',
        filename: 'image3',
      },
    ],
    description: 'Mỏng nhẹ, đem lại sự thoải mái nhất cho bạn.',
    category: 'QUẦN ÁO TẬP',
    featured: true,
    stars: 4,
    review: 100,
    stock: 20,
  },
  {
    id: '6',
    name: 'Quần Legging Kaka lấp lánh',
    price: 499999,
    company: 'Kaka',
    colors: ['#7bdcb5', '#000000', '#fcb900'],
    sizes: ['S', 'M', 'L', 'XL'],
    image:
      'https://thamyoganamaste.com/wp-content/uploads/2022/02/kiotviet_4d4ad4cdbe0d292682207b470e16e9cd.jpeg',
    images: [
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2022/02/kiotviet_4b67c556485893f05b754cfd2237f8e7.jpeg',
        filename: 'image1',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2022/02/kiotviet_daa1a5038a58041d7f64cd455595360f.jpeg',
        filename: 'image2',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2022/02/kiotviet_7a98a563c8c201c03af5aad7c063e12e.jpeg',
        filename: 'image3',
      },
    ],
    description: [
      'Chính hãng Kaka. Dáng quần cạp cao, chiều dài 25” tới mắt cá chân.',
      'Thiết kế in lấp lánh lên toàn bộ bề mặt vải vô cùng độc đáo, trẻ trung và nổi bật.',
      'Chất liệu Nylon + spandex siêu co giãn và ôm khít lấy cơ thể khoe đường cong',
    ],
    category: 'QUẦN ÁO TẬP',
    shipping: true,
    stars: 4,
    review: 100,
    stock: 10,
  },
  {
    id: '7',
    name: 'Jumpsuit viền màu Aria',
    company: 'Aria',
    price: 1699999,
    colors: ['#fcb900'],
    sizes: ['S', 'M', 'L'],
    image:
      'https://thamyoganamaste.com/wp-content/uploads/2023/02/z4123620337061_459d995ce4e7b8bb8fe7d6a158fd6dc1.jpg',
    images: [
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2023/02/z4123620925000_199f0908abbeb02b12277e784a6bb71c.jpg',
        filename: 'image1',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2023/02/z4123620931067_4388bd19ab2d7fbf507c044c4597aec8.jpg',
        filename: 'image2',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2023/02/z4123620925623_e7c35d55230eef09017932e83b1a84bc.jpg',
        filename: 'image3',
      },
    ],
    description: 'Không thể sexy hơn.',
    category: 'QUẦN ÁO TẬP',
    stars: 4,
    review: 100,
    stock: 20,
  },
  {
    id: '8',
    name: 'Áo phông DT khoét ngực Aria',
    company: 'Beinks',
    price: 599999,
    colors: ['#abb8c3', '#fcb900'],
    sizes: ['S', 'M', 'L', 'XL'],
    image:
      'https://thamyoganamaste.com/wp-content/uploads/2022/12/z3979614011148_720fc13f72f8c0ce34a2193f5aff10a4.jpg',
    images: [
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2022/12/z3979614014365_757de9d27d2f0dfdf94e7202a707fbb0.jpg',
        filename: 'image1',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2022/12/z3979614014392_10536da35d3bca45a7d7793333a86178.jpg',
        filename: 'image2',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2022/12/z3979614011148_720fc13f72f8c0ce34a2193f5aff10a4.jpg',
        filename: 'image3',
      },
    ],
    description: 'Trẻ trung, thoải mái, hấp dẫn.',
    category: 'QUẦN ÁO TẬP',
    shipping: true,
    stars: 4,
    review: 100,
    stock: 10,
  },
  {
    id: '9',
    name: 'Thảm Yoga PU hình in Hiyoga',
    company: 'Hiyoga',
    price: 1499999,
    colors: ['#00d084', '#8ed1fc', '#9b51e0'],
    sizes: ['183cm x 68cm x 5mm'],
    image:
      'https://thamyoganamaste.com/wp-content/uploads/2023/02/z4108709375007_ec581d41f9819f384c85a18dfb738d49-300x300.jpg',
    images: [
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2023/02/z4108709343606_cb7fdbc3d80a3bed26d58e99caa4eba4.jpg',
        filename: 'image1',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2023/02/z4108709380743_475a5721b0a50475b3693b3406d19d48.jpg',
        filename: 'image2',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2023/02/z4108709384186_4804bc9facec34f8418788cfc085de8b.jpg',
        filename: 'image3',
      },
    ],
    description: [
      'Chính hãng Hiyoga cao cấp Thượng Hải.  ',
      'Được sản xuất dành riêng cho người tập yoga hoặc giãn cơ.  ',
      'Chất liệu cao su Pu cao cấp và bám dính tốt, giúp chống trơn tuyệt đối cho người tập kể cả khi đổ nhiều mồ hôi lên thảm. ',
      'Hình in đẹp đẽ, cá tính cùng mực in chất lượng cao không phai giúp người tập luôn có cảm hứng mỗi khi tập trên thảm. ',
    ],
    category: 'THẢM YOGA',
    stars: 4,
    review: 100,
    stock: 10,
  },
  {
    id: '10',
    name: 'Áo phông cộc tay crop 2in1',
    company: 'Aria',
    price: 399999,
    colors: ['#000000', '#cf2e2e', '#abb8c3', '#0693e3'],
    sizes: ['S', 'M', 'L', 'XL'],
    image:
      'https://thamyoganamaste.com/wp-content/uploads/2023/03/z4184142392780_266e1e8d16e6c5e787763c36acf3db84.jpg',
    images: [
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2023/03/z4184142392780_266e1e8d16e6c5e787763c36acf3db84.jpg',
        filename: 'image1',
      },
      {
        url: 'https://thamyoganamaste.com/wp-content/uploads/2023/03/z4184142481246_c63d0c655de043da0045e494c05c841a.jpg',
        filename: 'image2',
      },
    ],
    description: 'Không thể thoải mái hơn.',
    category: 'QUẦN ÁO TẬP',
    shipping: true,
    stars: 4,
    review: 100,
    stock: 20,
  },
];

export default data;
