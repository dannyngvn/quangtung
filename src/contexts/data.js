const data = [
    {
        id: "1",
        name: "Thanh lăn giãn cơ Upttitude",
        company: "Aria",
        price: 449000,
         colors: ["#000000"],
        sizes: ["13,5cm x 45cm"],
        image: "https://thamyoganamaste.com/wp-content/uploads/2022/10/z3825140909143_7e799214db2b716e7dee58709cdd6378-1.jpg",
        images: [
            { url: "https://thamyoganamaste.com/wp-content/uploads/2022/10/z3825140920354_d5c4fa79697ca822f74dc2d7de1fa5f4.jpg", filename: "image1" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2022/10/z3825140903339_b4a1b8a18bfb168521dacb7cbec9376f.jpg", filename: "image2" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2022/10/z3825140914377_14ec49f2a0ed8ecfa07078375bc44580.jpg", filename: "image3" },
          ],
        description: `<h3>Bổ trợ tốt nhất.</h3>`,
        category: "DỤNG CỤ PILATES",
        shipping: true,
        stars: 4.8,
        review: 100,
        stock: 20,
        sold: 50,
    },

    {
        id: "2",
         name: "Khăn Yoga Lululemon",
         company: "Toyogi",
         price: 1299000,
          colors: ["#22D3EF"],
         sizes: ["66 cm x 1.830 cm"],
         image: "https://thamyoganamaste.com/wp-content/uploads/2022/03/KV_Khan-Yoga-Lululemon_1647918750009.jpg",
         images: [
            { url: "https://thamyoganamaste.com/wp-content/uploads/2022/03/KV_Khan-Yoga-Lululemon_1647918750008.jpg", filename: "image1" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2022/03/KV_Khan-Yoga-Lululemon_1647918750010.jpg", filename: "image2" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2022/03/KV_Khan-Yoga-Lululemon_1647918750009.jpg", filename: "image3" },
          ],
         description: `<h3>Khăn trải thảm Lululemon The Towel chính hãng.🔅</h3>
         <p>Một trong những sản phẩm rất hữu ích cho người tập đổ nhiều mồ hôi, đồng thời giữ cho tấm thảm của mình luôn mới đẹp.💡</p>
         <p>Chất liệu Microfibre siêu bám và thấm hút mồ hôi tốt là đặc điểm nổi trội của chiếc khăn này.💡</p>
         <p>Trọng lượng khăn là 0,4kg, dài 1m83, rộng 66cm.👉</p>
         <p>Rất phù hợp cho người tập thường xuyên di chuyển nơi tập.👉</p>
         <p>Dễ dàng vệ sinh, có thể giặt bằng máy giặt, không giặt khô nhưng có thể sấy ở nhiệt độ thấp.🔅</p>`,
         category: "DỤNG CỤ YOGA",
         stars: 4,
         review: 100,
         stock: 20,
         sold: 60,
     },

     {
        id: "3",
        name: "Tượng trang trí Yoga",
        price: 569000,
        company: "Jade",
         colors: ["#CDD0D0", "#8ed1fc", "#0693e3"],
        sizes: ["Cao 24-29 cm, Ngang 22,5 cm, Rộng 8,5 cm"],
        image: "https://thamyoganamaste.com/wp-content/uploads/2022/06/KV_Tuong-trang-tri-YOGA_1654689455768-300x300.jpg",
        images: [
            { url: "https://thamyoganamaste.com/wp-content/uploads/2022/06/KV_Tuong-trang-tri-YOGA_1654689439131.jpg", filename: "image1" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2022/06/KV_Tuong-trang-tri-YOGA_1654689574282.jpg", filename: "image2" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2022/06/KV_Tuong-trang-tri-YOGA_1654689561816.jpg", filename: "image3" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2022/06/KV_Tuong-trang-tri-YOGA_1654689439131.jpg", filename: "image3" },
          ],
        description: `<h3>Hoàn hảo đến từng chi tiết.</h3>`,
        category: "HÀNG DECOR",
        "featured": true,
        shipping: true,
        stars: 4,
        review: 100,
        stock: 10,
        sold: 80,
    }, 

    {
        id: "4",
        name: "Tất dài leg warmer Grom",
        company: "Keep",
        price: 329000,
         colors: ["#000000", "#abb8c3"],
        sizes: ["FREESIZE"],
        image: "https://thamyoganamaste.com/wp-content/uploads/2023/03/z4220717898137_f0247b87acd5c28f58f687a3cb37877e.jpg",
        images: [
            { url: "https://thamyoganamaste.com/wp-content/uploads/2023/03/z4220717896097_eba761a8db4555f4b393bb9fc71f8ff7.jpg", filename: "image1" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2023/03/z4220717898137_f0247b87acd5c28f58f687a3cb37877e.jpg", filename: "image2" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2023/03/z4220717903059_f3b4bf04bb4938c90cb96bad9441440a.jpg", filename: "image3" },
          ],
        description: `<h3>Không thể thoải mái, hấp dẫn hơn với sản phẩm tất dài leg warmer Grom.</h3>`,
        category: "PHỤ KIỆN YOGA",
        shipping: true,
        stars: 3.5,
        review: 100,
        stock: 10,
        sold: 40,
    }, 
    {
        id: "5",
        name: "Áo Tank Lulu All Tied Up",
        company: "Aria",
        price: 349000,
         colors: ["#f78da7", "#cf2e2e", "#fcb900", "#8ed1fc"],
        sizes: ["S", "M", "L", "XL"],
        image: "https://thamyoganamaste.com/wp-content/uploads/2023/04/z4270886428451_b2bca264ac7f85394c161b05d0bec03c-300x300.jpg",
        images: [
            { url: "https://thamyoganamaste.com/wp-content/uploads/2023/04/z4270886428451_b2bca264ac7f85394c161b05d0bec03c.jpg", filename: "image1" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2023/04/z4270886457482_b9e624817a27e7aa7651a0a3f9708528.jpg", filename: "image2" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2023/04/z4270886416930_0540554695c9ad6164e697c0694b40c3.jpg", filename: "image3" },
          ],
        description: `<h3>Mỏng nhẹ, đem lại sự thoải mái nhất cho bạn.</h3>`,
        category: "QUẦN ÁO TẬP",
        "featured": true,
        stars: 3.8,
        review: 100,
        stock: 20,
        sold: 50,
    }, {
        id: "6",
        name: "Quần Legging Kaka lấp lánh",
        price: 499000,
        company: "Kaka",
         colors: ["#7bdcb5", "#000000", "#fcb900"],
        sizes: ["S", "M", "L", "XL"],
        image: "https://thamyoganamaste.com/wp-content/uploads/2022/02/kiotviet_4d4ad4cdbe0d292682207b470e16e9cd.jpeg",
        images: [
            { url: "https://thamyoganamaste.com/wp-content/uploads/2022/02/kiotviet_4b67c556485893f05b754cfd2237f8e7.jpeg", filename: "image1" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2022/02/kiotviet_daa1a5038a58041d7f64cd455595360f.jpeg", filename: "image2" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2022/02/kiotviet_7a98a563c8c201c03af5aad7c063e12e.jpeg", filename: "image3" },
          ],
        description: `<h3>Chính hãng Kaka.</h3>
        <p>Dáng quần cạp cao, chiều dài 25” tới mắt cá chân.</p>
        <p>Thiết kế in lấp lánh lên toàn bộ bề mặt vải vô cùng độc đáo, trẻ trung và nổi bật.</p> 
        <p>Chất liệu Nylon + spandex siêu co giãn và ôm khít lấy cơ thể khoe đường cong.</p>`,
        category: "QUẦN ÁO TẬP",
        shipping: true,
        stars: 4,
        review: 100,
        stock: 10,
        sold: 100,
    },
    {
        id: "7",
        name: "Jumpsuit viền màu Aria",
        company: "Aria",
        price: 1699000,
         colors: ["#fcb900"],
        sizes: ["S", "M", "L"],
        image: "https://thamyoganamaste.com/wp-content/uploads/2023/02/z4123620337061_459d995ce4e7b8bb8fe7d6a158fd6dc1.jpg",
        images: [
            { url: "https://thamyoganamaste.com/wp-content/uploads/2023/02/z4123620925000_199f0908abbeb02b12277e784a6bb71c.jpg", filename: "image1" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2023/02/z4123620931067_4388bd19ab2d7fbf507c044c4597aec8.jpg", filename: "image2" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2023/02/z4123620925623_e7c35d55230eef09017932e83b1a84bc.jpg", filename: "image3" },
          ],
        description: `<h3>Không thể sexy hơn.</h3>`,
        category: "QUẦN ÁO TẬP",
        stars: 4.3,
        review: 100,
        stock: 20,
        sold: 120,
    },
        {
        id: "8",
        name: "Áo phông DT khoét ngực Aria",
        company: "Beinks",
        price: 599000,
         colors: ["#abb8c3", "#fcb900"],
        sizes: ["S", "M", "L", "XL"],
        image: "https://thamyoganamaste.com/wp-content/uploads/2022/12/z3979614011148_720fc13f72f8c0ce34a2193f5aff10a4.jpg",
        images: [
            { url: "https://thamyoganamaste.com/wp-content/uploads/2022/12/z3979614014365_757de9d27d2f0dfdf94e7202a707fbb0.jpg", filename: "image1" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2022/12/z3979614014392_10536da35d3bca45a7d7793333a86178.jpg", filename: "image2" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2022/12/z3979614011148_720fc13f72f8c0ce34a2193f5aff10a4.jpg", filename: "image3" },
          ],
        description: `<h3>Trẻ trung, thoải mái, hấp dẫn.</h3>`,
        category: "QUẦN ÁO TẬP",
        shipping: true,
        stars: 4,
        review: 100,
        stock: 10,
        sold: 40,
    }, {
        id: "9",
        name: "Thảm Yoga PU hình in Hiyoga",
        company: "Hiyoga",
        price: 1499000,
         colors: ["#00d084", "#8ed1fc", "#9b51e0"],
        sizes: ["183cm x 68cm x 5mm"],
        image: "https://thamyoganamaste.com/wp-content/uploads/2023/02/z4108709375007_ec581d41f9819f384c85a18dfb738d49-300x300.jpg",
        images: [
            { url: "https://thamyoganamaste.com/wp-content/uploads/2023/02/z4108709343606_cb7fdbc3d80a3bed26d58e99caa4eba4.jpg", filename: "image1" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2023/02/z4108709380743_475a5721b0a50475b3693b3406d19d48.jpg", filename: "image2" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2023/02/z4108709384186_4804bc9facec34f8418788cfc085de8b.jpg", filename: "image3" },
          ],
        description: `<h3>Chính hãng Hiyoga cao cấp Thượng Hải.</h3>
        <p>Được sản xuất dành riêng cho người tập yoga hoặc giãn cơ.</p>
        <p>Chất liệu cao su Pu cao cấp và bám dính tốt, giúp chống trơn tuyệt đối cho người tập kể cả khi đổ nhiều mồ hôi lên thảm.</p>
        <p>Hình in đẹp đẽ, cá tính cùng mực in chất lượng cao không phai giúp người tập luôn có cảm hứng mỗi khi tập trên thảm.</p>`,
        category: "THẢM YOGA",
        stars: 4.4,
        review: 100,
        stock: 10,
        sold: 50,
    }, 
     {
        id: "10",
        name: "Áo phông cộc tay crop 2in1",
        company: "Aria",
        price: 399000,
         colors: ["#000000", "#cf2e2e", "#abb8c3", "#0693e3"],
        sizes: ["S", "M", "L", "XL"],
        image: "https://thamyoganamaste.com/wp-content/uploads/2023/03/z4184142392780_266e1e8d16e6c5e787763c36acf3db84.jpg",
        images: [
            { url: "https://thamyoganamaste.com/wp-content/uploads/2023/03/z4184142392780_266e1e8d16e6c5e787763c36acf3db84.jpg", filename: "image1" },
            { url: "https://thamyoganamaste.com/wp-content/uploads/2023/03/z4184142481246_c63d0c655de043da0045e494c05c841a.jpg", filename: "image2" },
        
          ],
        description: `<h3>Không thể thoải mái hơn.</h3>`,
        category: "QUẦN ÁO TẬP",
        shipping: true,
        stars: 4,
        review: 100,
        stock: 20,
        sold: 60,
    },  

    {
      id: "11",
      name: "Túi đựng thảm du lịch Meile",
      company: "Meilejia",
      price: 179000,
       colors: ["#000000", "#cf2e2e"],
      sizes: ["66cm x 15cm"],
      image: "https://thamyoganamaste.com/wp-content/uploads/2022/08/z3610543452572_b4ffa61369fb2bb1ef747e002c11ff0a.jpg",
      images: [
          { url: "https://thamyoganamaste.com/wp-content/uploads/2022/08/z3610543452572_b4ffa61369fb2bb1ef747e002c11ff0a.jpg", filename: "image1" },
          { url: "https://thamyoganamaste.com/wp-content/uploads/2022/08/z3610543448022_88f60b08157eada6d8468ee7722dfc51.jpg", filename: "image2" },
          { url: "https://thamyoganamaste.com/wp-content/uploads/2022/08/z3610543442621_4bd215e3a10eae59602e491d5cff257d.jpg", filename: "image3" },
        ],
      description: `<h3>Gọn nhẹ, tiện lợi, hữu dụng.</h3>`,
      category: "DỤNG CỤ YOGA",
      shipping: true,
      stars: 4,
      review: 100,
      stock: 20,
      sold: 60,
  }, 

  {
    id: "12",
    name: "Dây tập Yoga GROM",
    company: "Lululemon",
    price: 219000,
     colors: ["#000000", "#cf2e2e", "#fcb900", "#8ed1fc"],
    sizes: ["D2.5m x R3.8cm","D3.2m x R4.5cm"],
    image: "https://thamyoganamaste.com/wp-content/uploads/2022/06/z3496570231818_469720ae86980610ac0a3e2aaaa50bdc.jpg",
    images: [
        { url: "https://thamyoganamaste.com/wp-content/uploads/2022/06/z3496570231818_469720ae86980610ac0a3e2aaaa50bdc.jpg", filename: "image1" },
        { url: "https://thamyoganamaste.com/wp-content/uploads/2022/06/z3496570228497_0c6255aceaa317d4a03b46c73aabb9d3.jpg", filename: "image2" },
  
      ],
    description: `<h3>Bổ trợ tốt nhất.</h3>`,
    category: "DỤNG CỤ YOGA",
    shipping: true,
    stars: 4,
    review: 100,
    stock: 20,
    sold: 80,
},  

{
  id: "13",
  name: "Bóng tập yoga Keep",
  company: "Keep",
  price: 419000,
   colors: ["#000000", "#cf2e2e", "#7bdcb5", "#fcb900"],
  sizes: ["L-75cm", "XL-85cm"],
  image: "https://thamyoganamaste.com/wp-content/uploads/2023/05/z4316813100259_b8585e8fcbfb931a7533831f366098d2.jpg",
  images: [
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/05/z4316813100259_b8585e8fcbfb931a7533831f366098d2.jpg", filename: "image1" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/05/z4316813118934_5fdf348f3fe8af790d0d17119c1bbe29.jpg", filename: "image2" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/05/z4316813105098_ca1b7b667b7f27ee91c9b1cd2ac40016.jpg", filename: "image3" },
    ],
  description: `<h3>Dụng cụ hữu dụng khi bạn luyện tập.</h3>`,
  category: "DỤNG CỤ YOGA",
  shipping: true,
  stars: 4.1,
  review: 100,
  stock: 20,
  sold: 90,
}, 

{
  id: "14",
  name: "Túi đựng thảm Lulu",
  company: "Lululemon",
  price: 1299000,
   colors: ["#CDD0D0", "#fcb900", "#9b51e0"],
  sizes: ["L", "XL", "XXL"],
  image: "https://thamyoganamaste.com/wp-content/uploads/2023/04/IMG_1681190661419_1681197304930.jpg",
  images: [
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/04/IMG_1681190661419_1681197304930.jpg", filename: "image1" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/04/IMG_1681190661420_1681197305889.jpg", filename: "image2" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/04/IMG_1681190661418_1681197304134.jpg", filename: "image3" },
    ],
  description: `<h3>Chứa đựng tất cả.</h3>`,
  category: "DỤNG CỤ YOGA",
  shipping: true,
  stars: 4.5,
  review: 120,
  stock: 15,
  sold: 110,
}, 

{
  id: "15",
  name: "Thảm Lulu The Mat 5mm (ÚC)",
  company: "Lululemon",
  price: 2899000,
   colors: ["#CDD0D0", "#d77da0", "#9b51e0"],
  sizes: ["180cm x 66xm x 5mm"],
  image: "https://thamyoganamaste.com/wp-content/uploads/2023/03/z4226382692043_0ef8ce37ce6597c48408b55a92194932.jpg",
  images: [
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/03/z4226382692043_0ef8ce37ce6597c48408b55a92194932.jpg", filename: "image1" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/03/z4226383254343_c9a4a3be18366f29b5c1773fe333aef2.jpg", filename: "image2" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/03/z4226382637366_5cdde2772aa0a3e215936d3a749d2ee0.jpg", filename: "image3" },
    ],
  description: `<h3>Là dòng thảm mới nhất của Lululemon năm 2023. Được thiết kế đặc biệt cho người tập Yoga.</h3>
  <p>Bề mặt thấm hút độ ẩm tuyệt đối hỗ trợ bạn trong các hoạt động tiết nhiều mồ hôi.</p>
  <p>Đế cao su tự nhiên có nguồn gốc và được chứng nhận bởi FSC ™ mang đến cho bạn lớp đệm và độ bám chắc chắn để luyện tập ít mồ hôi.</p>`,
  category: "THẢM YOGA",
  shipping: true,
  stars: 4.8,
  review: 90,
  stock: 10,
  sold: 40,
}, 
{
    id: "16",
    name: "Thảm Liforme 4.2MM",
    company: "Liforme",
    price: 4399000,
    colors: ["#000000", "#CDD0D0", "#f78da7", "#7bdcb5"],
    sizes: ["176cm x 66xm x 4.2mm"],
    image: "https://thamyoganamaste.com/wp-content/uploads/2021/10/KV_Tham-Liforme-4.2MM_1642835582425.jpg",
    images: [
      { url: "https://thamyoganamaste.com/wp-content/uploads/2021/10/KV_Tham-Liforme-4.2MM_1642835582425.jpg", filename: "image1" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2021/10/Liforme_Grateful_Rainbow_4_1000x666_crop_center.jpg", filename: "image2" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2021/10/Liforme_Yoga_Mat_Purple_Earth_7_1000x666_crop_center.jpg", filename: "image3" }
    ],
    description: `<h3>Thảm yoga Liforme là một lựa chọn tốt cho những người tập yoga muốn đảm bảo an toàn và hiệu quả khi tập luyện.</h3>
                  <p>Thảm Liforme là một loại thảm yoga được sản xuất bởi công ty Liforme.</p>
                  <p>Thảm Liforme được thiết kế để đáp ứng nhu cầu của các tập yoga ở mọi cấp độ, với các tính năng vượt trội.</p>`,
    category: "THẢM YOGA",
    shipping: true,
    stars: 4.6,
    review: 90,
    stock: 10,
    sold: 110,
}, 
{
  id: "17",
  name: "Set đồ tập viền nổi Aria",
  company: "Aria",
  price: 1299000,
   colors: ["#000000", "#CDD0D0", "#f78da7"],
  sizes: ["L", "XL", "XXL"],
  image: "https://thamyoganamaste.com/wp-content/uploads/2023/05/IMG_1683712036005_1683800699267.jpg",
  images: [
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/05/IMG_1683712036005_1683800699267.jpg", filename: "image1" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/05/IMG_1683712036002_1683800699026.jpg", filename: "image2" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/05/IMG_1683712036004_1683800699209.jpg", filename: "image3" },
    ],
  description: `<h3>Thoải mái, thoáng khí, hấp dẫn.</h3>`,
  category: "QUẦN ÁO TẬP",
  shipping: true,
  stars: 4.2,
  review: 150,
  stock: 20,
  sold: 100,
}, 
{
  id: "18",
  name: "Set biker Aria",
  company: "Aria",
  price: 1399000,
   colors: ["#000000", "#f78da7", "#d77da0"],
  sizes: ["L", "XL", "XXL", "XXXL"],
  image: "https://thamyoganamaste.com/wp-content/uploads/2023/05/IMG_1683711264553_1683800024477.jpg",
  images: [
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/05/IMG_1683711264553_1683800024477.jpg", filename: "image1" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/05/IMG_1683711264554_1683800024530.jpg", filename: "image2" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/05/IMG_1683711264555_1683800024567.jpg", filename: "image3" },
    ],
  description: `<h3>Thoải mái, thoáng khí, hấp dẫn, tự tin.</h3>`,
  category: "QUẦN ÁO TẬP",
  shipping: true,
  stars: 4.4,
  review: 140,
  stock: 20,
  sold: 60,
},
{
  id: "19",
  name: "Quần short suông 2 lớp Aria",
  company: "Aria",
  price: 529000,
   colors: ["#000000", "#f78da7", "#d77da0"],
  sizes: ["L", "XL", "XXL", "XXXL"],
  image: "https://thamyoganamaste.com/wp-content/uploads/2023/05/z4372307374471_2d8024bb64e03f0294689763acc67b62.jpg",
  images: [
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/05/z4372307374471_2d8024bb64e03f0294689763acc67b62.jpg", filename: "image1" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/05/z4374981097824_c38bea2ff52a40965164228b6f4219c9.jpg", filename: "image2" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/05/z4374981101846_1b357bd1b015927b3ececc95a041aa0d.jpg", filename: "image3" },
    ],
  description: `<h3>Thoải mái, thoáng khí, hấp dẫn, tự tin.</h3>`,
  category: "QUẦN ÁO TẬP",
  shipping: true,
  stars: 4.7,
  review: 150,
  stock: 15,
  sold: 110,
}, 
{
  id: "20",
  name: "Quần short nỉ da cá Kaka",
  company: "Kaka",
  price: 489000,
   colors: ["#000000", "#8ed1fc", "#7bdcb5"],
  sizes: ["L", "XL", "XXL", "XXXL"],
  image: "https://thamyoganamaste.com/wp-content/uploads/2022/08/z3683260872564_9d355254c8e8c10fc734331726cca341.jpg",
  images: [
      { url: "https://thamyoganamaste.com/wp-content/uploads/2022/08/z3683260872564_9d355254c8e8c10fc734331726cca341.jpg", filename: "image1" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2022/08/z3683260864406_49680384221a13a8457ec83149a852ea.jpg", filename: "image2" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2022/08/z3683260856656_86d45a2d248902d66faf258e637133ae.jpg", filename: "image3" },
    ],
  description: `<h3>Thoải mái, thoáng khí, hấp dẫn, tự tin.</h3>`,
  category: "QUẦN ÁO TẬP",
  shipping: true,
  stars: 4.5,
  review: 120,
  stock: 15,
  sold: 100,
}, 
{
  id: "21",
  name: "Quần short Lulu túi hông",
  company: "Lulelemon",
  price: 589000,
   colors: ["#000000", "#CDD0D0", "#cf2e2e"],
  sizes: ["L", "XL", "XXL", "XXXL"],
  image: "https://thamyoganamaste.com/wp-content/uploads/2023/03/z4152918448901_e68a1aab888de5fefb8197d3feb74298.jpg",
  images: [
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/03/z4152918448901_e68a1aab888de5fefb8197d3feb74298.jpg", filename: "image1" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/03/z4152918464960_28e00e56e6f7cc5035a49278a3189d7a.jpg", filename: "image2" },
      { url: "https://thamyoganamaste.com/wp-content/uploads/2023/03/z4152918455915_b589c95db8508f8f7b3941042fea2c7c.jpg", filename: "image3" },
    ],
  description: `<h3>Thoải mái, thoáng khí, hấp dẫn, tự tin.</h3>`,
  category: "QUẦN ÁO TẬP",
  shipping: true,
  stars: 4.8,
  review: 120,
  stock: 15,
  sold: 80,
}, 




];

export default data;





// Mã màu "#000000" - Tên màu: Đen
// Mã màu "#22D3EF" - Tên màu: Xanh dương
// Mã màu "#CDD0D0" - Tên màu: Xám nhạt
// Mã màu "#8ed1fc" - Tên màu: Xanh dương nhạt
// Mã màu "#0693e3" - Tên màu: Xanh dương
// Mã màu "#abb8c3" - Tên màu: Xám nhạt
// Mã màu "#f78da7" - Tên màu: Hồng
// Mã màu "#cf2e2e" - Tên màu: Đỏ
// Mã màu "#fcb900" - Tên màu: Vàng
// Mã màu "#7bdcb5" - Tên màu: Xanh lá cây
 // Mã màu  "#d77da0" - Tên màu: Hồng đậm