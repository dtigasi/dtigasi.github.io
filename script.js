const isi = document.getElementById("isi");
const modal = document.getElementById("modal");
const modalContainer = document.getElementById("kontainer-modal");

const listUMKM = {
  0: {
    nama: "Pasar Pelangi",
    gambar: "payungi.jpeg",
    alamat: "Jl. Kedondong, Yosomulyo, Kec. Metro Pusat, Kota Metro, Lampung 34111",
    deskripsi:
      "Payungi merupakan pasar yang dioperasikan oleh masyarakat Yosomulyo dan hanya beroperasi pada hari minggu saja, mulai pukul 06.00 hingga pukul 10.00. Selain berbelanja, di pasar ini juga tersedia spot foto yang instagramable dan beberapa permainan yang bisa dicoba oleh anak-anak.",
  },
  1: {
    nama: "Permata Fruitbar",
    gambar: "permataFruitbar.jpeg",
    alamat: "Jl. Ah Nasution (Sebelah PB 21) Metro Timur, Kota Metro",
    deskripsi:
      "Permata Fruitbar adalah sebuah toko yang menjual berbagai macam buah segar, jus buah, dan camilan sehat yang terbuat dari buah-buahan. Toko ini didirikan dengan tujuan untuk mempromosikan gaya hidup sehat melalui konsumsi buah-buahan yang segar dan berkualitas tinggi.",
  },
  2: {
    nama: "Angkringan Mas Hoed",
    gambar: "MasHoed.jpeg",
    alamat: "Jl. Diponegoro, Hadimulyo Tim., Kec. Metro Pusat, Kota Metro, Lampung 34111",
    deskripsi:
      "Angkringan Mas Hoed adalah sebuah warung makan yang menyajikan berbagai macam hidangan nasi, minuman, dan sate. Terletak di pinggir jalan, warung makan ini menawarkan pengalaman makan yang santai dan casual dengan harga yang terjangkau.",
  },
  3: {
    nama: "Kebun Lebah",
    gambar: "KebunLebah.jpeg",
    alamat: "Jl. Kutilang No.2, Hadimulyo Tim., Kec. Metro Pusat, Kota Metro, Lampung 34111",
    deskripsi:
      "Kebun lebah madu trigona metro adalah tempat dimana kita semua bisa melihat dan merasakan madu murni secara langsung dr sarang nya, disini juga tersedia bibit/ koloni lebah jika anda ingin memulai bisnis dan budidaya dengan memanfaatkan lahan atau halaman sekitar rumah.",
  },
  4: {
    nama: "Ketahuan Tahu Walek",
    gambar: "TahuWalek.jpeg",
    alamat: "Jl. Ki Hajar Dewantara, Iringmulyo, Metro Tim., Kota Metro, Lampung 34124",
    deskripsi:
      "Dengan cita rasa daging yang nikmat dan sambal petis yang mantap, cemilan tahu walek di toko Ketahuan Tahu Walek dijamin akan membuat pengunjung ketagihan. Toko ini merupakan pilihan yang tepat bagi para pecinta makanan yang ingin mencoba cemilan yang unik dan lezat.",
  },
  5: {
    nama: "Warmindo Edun",
    gambar: "WarmindoEdun.jpeg",
    alamat: "Jl. A.H. Nasution 21 Yosodadi Metro",
    deskripsi:
      "Warmindo Edun merupakan tempat yang tepat bagi para penggemar mi instan yang ingin mencoba varian rasa yang berbeda dan unik. Dengan suasana yang hangat dan ramah, warung makan ini menjadi pilihan yang tepat untuk menikmati makanan dengan gaya yang santai dan casual.",
  },
  6: {
    nama: "Kopi Volosans",
    gambar: "KopiVolosans.jpeg",
    alamat: "Jl. Terong No.6, Yosorejo, Kec. Metro Tim., Kota Metro, Lampung 34124",
    deskripsi:
      "Kopi Volosans bukan hanya sekadar kedai kopi, tetapi juga merupakan tempat yang tepat bagi para pecinta kopi yang ingin mencoba berbagai macam tipe kopi dengan cita rasa yang khas dan unik. Terletak di kota Metro yang strategis, kedai kopi ini menawarkan pengalaman yang berbeda dalam menikmati kopi dan makanan.",
  },
  7: {
    nama: "Yurisa Kitchen",
    gambar: "KeripikKaca.jpeg",
    alamat: "JALAN BUNGUR TENGAH NO.31 METRO PUSAT LAMPUNG",
    deskripsi:
      "Yurisa Kitchen adalah sebuah produsen jajanan ringan dan snack yang telah beroperasi selama kurang lebih 2 tahun. Produsen ini dikenal dengan kualitas produk yang tinggi dan cita rasa yang khas, sehingga banyak pelanggan yang memilih produk dari Yurisa Kitchen sebagai oleh-oleh atau makanan ringan untuk dikonsumsi saat bepergian.",
  },
  8: {
    nama: "Siomay Harmony",
    gambar: "SiomayHarmoni.jpeg",
    alamat: "Jl. Mayjen Ryacudu Metro Pusat",
    deskripsi:
      "Kedai Siomay Ikan Harmony menyajikan siomay ikan dengan harga terjangkau namun rasa premium. Siomay ikan terbuat dari bahan-bahan segar dan berkualitas, disajikan dengan kuah kental dan bumbu kacang yang gurih. Kedai ini memiliki suasana yang nyaman dan staf yang ramah. Cocok untuk para pecinta siomay ikan dengan budget terbatas.",
  },
  9: {
    nama: "Puding Buah",
    gambar: "PudingBuah.jpeg",
    alamat: "16c Mulyojati, Kec. Metro Barat., Kota Metro, Lampung 34121",
    deskripsi:
      "Toko Puding Buah adalah tempat yang cocok bagi para pecinta dessert segar dan lezat. Toko ini menyediakan berbagai macam varian puding buah yang terbuat dari buah-buahan segar yang berkualitas. Puding buah di toko ini sangat cocok untuk disantap setelah makan atau sebagai camilan sehat di siang hari.",
  },
};
isi.innerHTML = "";
for (let i = 0; i < 10; i++) {
  let aWUMKM = document.createElement("div");
  let aUMKM = document.createElement("article");
  let aNamUMKM = document.createElement("h3");
  let aDesUMKM = document.createElement("p");
  aWUMKM.classList.add("wrapper-umkm");
  aUMKM.classList.add("umkm");
  aNamUMKM.classList.add("namUmkm");
  aDesUMKM.classList.add("desUmkm");
  aUMKM.innerHTML =
    '<div class="gambar" style="background-image: url(./img/' + listUMKM[i].gambar + ');"></div>';
  aNamUMKM.innerText = listUMKM[i].nama;
  aDesUMKM.innerText = listUMKM[i].deskripsi;
  isi.appendChild(aWUMKM);
  aWUMKM.appendChild(aUMKM);
  aUMKM.appendChild(aNamUMKM);
  aUMKM.appendChild(aDesUMKM);

  aUMKM.addEventListener("click", function () {
    let bNam = document.createElement("h3");
    let bDesk = document.createElement("div");
    let bDeskripsi = document.createElement("p");
    let cDeskripsi = document.createElement("p");
    let bAlamat = document.createElement("span");
    let cAlamat = document.createElement("span");

    bNam.id = "nam-modal";
    bDesk.id = "desk-modal";
    bDeskripsi.id = "deskripsi-umkm";
    bAlamat.classList.add("tebal");
    cAlamat.id = "alamat-umkm";

    bNam.innerText = listUMKM[i].nama;
    bDeskripsi.innerText = listUMKM[i].deskripsi;
    bAlamat.innerText = "Alamat: ";
    cAlamat.innerText = listUMKM[i].alamat;

    modal.innerHTML =
      '<div id="gambar-modal" style="background-image: url(./img/' +
      listUMKM[i].gambar +
      ');"></div>';
    modal.appendChild(bNam);
    modal.appendChild(bDesk);
    bDesk.appendChild(bDeskripsi);
    bDesk.appendChild(cDeskripsi);
    cDeskripsi.appendChild(bAlamat);
    cDeskripsi.appendChild(cAlamat);
    modalContainer.style.display = "block";
  });
}

window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
