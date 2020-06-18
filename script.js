// Array data
let data = [
  {
    zodiac: "Capricorn",
    image: "images/Capricorn.jpg",
    description:
      "Umum: Anda mesti tahu kapan mengatakan setuju atau ya terhadap pendapat dan pandangan orang dan kapan mesti menolak atau mengatakan tidak. Jika Anda tak sependapat, Anda mesti menunjukkannya dengan cara yang sopan dan enak dilihat. Alasannya, supaya relasi yang sudah Anda bangun selama ini tidak hancur karena sekeping egoisme atau sakit hati.",
  },
  {
    zodiac: "Aquarius",
    image: "images/Aquarius.jpg",
    description:
      "Umum: Ada selingan baru dalam rutinitas. Bentuk atau wujudnya bisa bermacam-macam. Lihatlah selingan baru itu lebih sebagai kesempatan dan bukan sebagai gangguan. Justru hal itu bisa membantu Anda menjalankan tugas. Bukankah Anda semakin terpacu karena ada hal baru? Pada pertengahan pekan nanti, arahkan perhatian Anda kepada hal-hal yang kecil. Jangan mengabaikannya karena hal itu tetap punya hubungan dengan pekerjaan Anda.",
  },
  {
    zodiac: "Pisces",
    image: "images/Pisces.jpg",
    description:
      "Umum : Anda rupanya suka sekali berkhayal tentang pekerjaan dan relasi Anda di awal pekan. Tak apa-apa! Yang penting, Anda bisa mengambil tindakan yang konkret sesuai dengan situasi dan/atau kondisi yang ada, jangan mengabaikan situasi yang sedang terjadi. Situasi itu bisa mendukung langkah Anda.",
  },
  {
    zodiac: "Aries",
    image: "images/Aries.jpg",
    description:
      "Umum : Keragu-raguan bukan gaya Anda. Bingung dan tak tahu harus berbuat apa bukanlah kekhasan Anda. So, tentukan langkah yang pasti. Jangan tanggung. Jika Anda bingung menentukan sikap yang tepat di hadapan begitu banyak kemungkinan, mintalah nasihat atau pendapat orang lain. Sekalipun pendapat mereka belum tentu merupakan jawaban yang tepat, setidak-tidaknya mereka telah memberikan kisi-kisi yang berguna untuk Anda.",
  },
  {
    zodiac: "Cancer",
    image: "images/Cancer.jpg",
    description:
      "Umum: Anda lumayan boros. Anda mudah sekali mengeluarkan uang. Apapun yang menarik mata Anda, bahkan yang bukan menjadi kebutuhan sekalipun, membuat Anda dengan begitu mudah membuka dompet. Jangan salah, itu semua hanya mendatangkan kesenangan sesaat. Anda mesti punya prioritas kebutuhan. Itu sisi yang kurang dari Anda.",
  },
  {
    zodiac: "Taurus",
    image: "images/Taurus.jpg",
    description:
      "Umum: Anda memang dituntut untuk tetap konsisten pada ritme kerja yang ada. Di situlah komitmen dan loyalitas Anda diuji. Tapi Anda harus jeli mencari celah untuk fleksibel sebelum terlanjur jenuh. Ingat, komitmen dan konsistensi tidak sama dengan taat buta. Anda mesti punya sikap. Anda, misalnya, mulai dengan berolahraga di awal hari kerja. Atau Anda juga bisa mencoba berpikir dengan cara yang lain. Fleksibilitas memperkuat relasi personal dan sosial Anda, sekaligus merangsang produktivitas.",
  },
  {
    zodiac: "Gemini",
    image: "images/Gemini.jpg",
    description:
      "Umum: Anda tidak hidup seorang diri. Anda bukan sebuah pulau tak bertuan yang tiba-tiba terlempar begitu saja ke tengah lautan. Anda sudah selalu berada bersama dan dengan orang lain. Karena itu, jangan memisahkan diri dari lingkungan sosial atau komunitas tempat Anda bekerja dan bergaul. Orang-orang seperti merekalah yang menantang Anda untuk berpikir lebih serius serta mendukung Anda. Jika kemudian muncul kesulitan, jangan cepat tergoda untuk mengambil sikap. Berpikirlah baik-baik dan lihatlah persoalan dengan lebih spesifik.",
  },
  {
    zodiac: "Leo",
    image: "images/Leo.jpg",
    description:
      "Umum: Bukalah diri Anda dan sambutlah hari yang baru. Apa pun yang akan Anda lakukan dan hadapi di sepanjang pekan ini berjalan menarik. Buatlah tujuan yang jelas. Petakan prioritas dan orientasi dengan jelas dan tegas. Anda mau buat apa? Anda mau lakukan apa? Anda mau menjadi apa? Kalau muncul kebingungan, jangan malu dan takut meminta bantuan orang lain.",
  },
  {
    zodiac: "Virgo",
    image: "images/Virgo.jpg",
    description:
      "Umum: Jika Anda terjebak dalam kesulitan, mintalah bantuan orang lain. Mintalah bantuan orang lain. Mintalah nasihat atau masukan dari orang yang kemampuannya lebih tinggi dan baik daripada Anda. Jangan takut dan malu! Apalagi orang yang Anda mintai bantuan itu tidak berkeberatan. Lalu matangkan rencana Anda. Jangan melihat ke belakang. Ingat, masa lalu punya konteks sendiri. Angkat mata dan lihat masa depan.",
  },
  {
    zodiac: "Libra",
    image: "images/Libra.jpg",
    description:
      "Umum: Banyak mata menatap kagum pada Anda. Tanya kenapa? Karena Anda hadir minggu ini dengan sejumlah ide segar dan insight baru. Anda juga punya hati untuk mendengarkan orang lain. Karena itu, jangan tahan ide itu untuk Anda sendiri. Bagikan kepada anggota tim Anda. Biarkan mereka tahu apa yang bercokol di dalam kepala Anda. Itulah artinya interdependensi dan solidaritas.",
  },
  {
    zodiac: "Scorpio",
    image: "images/Scorpio.jpg",
    description:
      "Umum: Istirahat yang banyak, makan makanan yang segar dan olahraga yang cukup. Ingat, ada hubungan erat antara kesehatan dan produktivitas. Jika Anda sudah jalani hal itu, Anda bakal kembali fokus pada apa yang sedang Anda hadapi. Teman-teman Anda akan belajar banyak dari Anda. Mereka membutuhkan contoh konkret dan bukan teori atau opini yang jelimet. Dan itu adalah Anda.",
  },
  {
    zodiac: "Sagitarius",
    image: "images/Sagitarius.jpg",
    description:
      "Umum: Berpikir positif. Ini senjata Anda mempertahankan hubungan kerja Anda dengan rekan atau mitra bisnis Anda minggu ini. Perhatikan juga kesempatan yang ada untuk meraih sukses. Sekalipun ada sedikit persoalan dengan pimpinan atau partner kerja, Anda mesti tetap menunjukkan sikap yang wajar, tidak di buat-buat dan juga tidak memperparah keadaan.",
  },
];

// Membuat input angka
function inputAngka(e) {
  let charCode = e.which ? e.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

// Menampilkan nama bulan
let namaBulan = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let hasil = `<option value="" disabled selected>Choose your option</option>`;
namaBulan.forEach((data, index) => {
  hasil += `<option value="${index + 1}">${data}</option>`;
  document.getElementById("bulan").innerHTML = hasil;
});

// pilihan eksekusi
function searchZodiak(tanggal, bulan) {
  // batas tanggal pada bulan
  if (
    (bulan == 1 && tanggal > 31) ||
    (bulan == 2 && tanggal > 29) ||
    (bulan == 3 && tanggal > 31) ||
    (bulan == 4 && tanggal > 30) ||
    (bulan == 5 && tanggal > 31) ||
    (bulan == 6 && tanggal > 30) ||
    (bulan == 7 && tanggal > 31) ||
    (bulan == 8 && tanggal > 31) ||
    (bulan == 9 && tanggal > 30) ||
    (bulan == 10 && tanggal > 31) ||
    (bulan == 11 && tanggal > 30) ||
    (bulan == 12 && tanggal > 31)
  )
    return "Tanggal salah!!";

  if (bulan == "" && tanggal == "") return "belum";

  if ((bulan == 1 && tanggal >= 20) || (bulan == 2 && tanggal <= 18))
    return "Aquarius";
  if ((bulan == 2 && tanggal >= 19) || (bulan == 3 && tanggal <= 20))
    return "Pisces";
  if ((bulan == 3 && tanggal >= 21) || (bulan == 4 && tanggal <= 19))
    return "Aries";
  if ((bulan == 4 && tanggal >= 20) || (bulan == 5 && tanggal <= 20))
    return "Taurus";
  if ((bulan == 5 && tanggal >= 21) || (bulan == 6 && tanggal <= 21))
    return "Gemini";
  if ((bulan == 6 && tanggal >= 22) || (bulan == 7 && tanggal <= 22))
    return "Cancer";
  if ((bulan == 7 && tanggal >= 23) || (bulan == 8 && tanggal <= 22))
    return "Leo";
  if ((bulan == 8 && tanggal >= 23) || (bulan == 9 && tanggal <= 22))
    return "Virgo";
  if ((bulan == 9 && tanggal >= 23) || (bulan == 10 && tanggal <= 22))
    return "Libra";
  if ((bulan == 10 && tanggal >= 23) || (bulan == 11 && tanggal <= 21))
    return "Scorpio";
  if ((bulan == 11 && tanggal >= 22) || (bulan == 12 && tanggal <= 21))
    return "Sagitarius";
  if ((bulan == 12 && tanggal >= 22) || (bulan == 1 && tanggal <= 19))
    return "Capricorn";
}

// Mencari Zodiak
const btnSearch = document.querySelector(
  "section.container .card .card-body a.search"
);

btnSearch.addEventListener("click", function () {
  // Mengambil data dari form bulan dan tanggal
  const valueTanggal = document.querySelector("input#tanggal").value;
  const valueBulan = document.querySelector("select#bulan").value;

  // mencari value zodiac
  const valueZodiak = searchZodiak(valueTanggal, valueBulan);

  // membuat perulangan mencari data di array dataweton
  data.forEach((data) => {
    if (data.zodiac == valueZodiak) {
      document.getElementById("come").innerHTML = `
        <h4>Zodiac Anda adalah ${data.zodiac}</h4>
        <img src="${data.image}" alt="${data.zodiac}" />
        <p>${data.description}</p>
      `;
    }
  });

  // jika tanggal melebihi batas
  if (valueZodiak === "Tanggal salah!!") {
    document.getElementById("come").innerHTML =
      "Maaf tanggal yang anda masukan salah mohon masukan lagi dengan benar";
  }

  // jika input ada yg kosong
  if (valueZodiak === "belum") {
    document.getElementById("come").innerHTML =
      "Masukan tanggal dan bulan lahir anda untuk mengetahui zodiak anda dengan lengkap";
  }
});
