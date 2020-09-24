// Variabel yg menggunakan let bisa diganti tanpa error

let nama = "Timothy";

console.log(nama);

nama = "Samuel";

console.log(nama);

// Tetapi yg menggunakan const akan error jika diganti;

const name = "Ron";

console.log(name);

// name = "Weasley";

// console.log(name);

// Const tidak bisa diganti, tetapi bisa ditambahkan 
// jika variabel adalah array/object

const daftar = ["A", "B", "C"];

daftar.push("D", "E");

console.log(daftar);

// Var tidak menunjukkan error walaupun variabel sama sudah dideklarasikan

var sama = "pensil";

var sama = "pulpen";

console.log(sama);

// Var bisa dideklarasikan di luar blok seperti if

const jawaban = "yes";

if(jawaban === "yes"){
    var congrats = "Selamat! Anda menang!";
}

console.log(congrats);

// Tetapi let tidak bisa

const pekerjaan = "Dokter";

if(pekerjaan === "Dokter"){
    let pemberitahuan = "Seorang yang kerjanya menyembuhkan penyakit fisik.";
}

// console.log(pemberitahuan);

// Template literal yang efisien adalah berikut ini

let kerja = `${nama} bekerja sebagai seorang ${pekerjaan}.`;

console.log(kerja);

// Arrow Function fungsinya seperti ini

const information = (data) => {
    const process = `Yang anda perlu ketahui tentang saya adalah ${data}`;
    return process;
  };
  
  console.log(information("saya suka membaca novel."));
