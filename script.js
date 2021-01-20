//input operator oleh user
let inputOperasi = prompt('Pilih Operator' + '\n' + 'ex : +,-,x,:');
// Jika user tekan Cancel
if (inputOperasi == null) {
    alert('program selesai');
    fail;
}
// Cek Operator benar atau salah
if ((inputOperasi == '+') || (inputOperasi == '-') || (inputOperasi == 'x') || (inputOperasi == ':')) {

    //input bilangan 1 oleh user
    let angka1 = prompt('Masukkan bilangan pertama');
    // Jika User tekan Cancel
    if (angka1 == null) {
        // runProgram = false;
        alert("Program Selesai");
        fail;
    }
    // ubah angka1 jadi float
    angka1 = parseFloat(angka1);

    //input bilangan 2 oleh user
    let angka2 = prompt('Masukkan bilangan kedua');
    // jika user tekan cancel
    if (angka2 == null) {
        runProgram = false;
        alert("Program Selesai");
        fail;
    }
    // ubah angka2 jadi float
    angka2 = parseFloat(angka2);

    //pengondisian
    if (inputOperasi == '+') {
        hasil = angka1 + angka2;
    } else if (inputOperasi == '-') {
        hasil = angka1 - angka2;
    } else if (inputOperasi == 'x') {
        hasil = angka1 * angka2;
    } else if (inputOperasi == ':') {
        hasil = angka1 / angka2;
    }
    //ketika masukan user tidak sesuai 
    else {
        alert('Operator yang anda pilih salah');
    }
    alert('Hasil dari   ' + angka1 + inputOperasi + angka2 + '   adalah ' + hasil);

    // Jika Operator Salah
} else {

    alert('Masukkan Operator Salah');
    alert('program Selesai')

}
// }