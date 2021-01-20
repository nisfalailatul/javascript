// kondisi run program
// true: lanjut terus
// false: program berhenti
let runProgram = true;
// // While loop untuk mengulang program terus menerus sampai user tidak ingin berhitung lagi
while (runProgram) {
    //input operator oleh user
    let inputOperasi = prompt('Pilih Operator' + '\n' + 'ex : +,-,x,:');
    // Jika user tekan Cancel
    if (inputOperasi == null) {
        runProgram = false;
        alert('program selesai');
        break;
    }
    // Cek Operator benar atau salah
    if ((inputOperasi == '+') || (inputOperasi == '-') || (inputOperasi == 'x') || (inputOperasi == ':')) {

        //input bilangan 1 oleh user
        let angka1 = prompt('Masukkan bilangan pertama');
        // Jika User tekan Cancel
        if (angka1 == null) {
            runProgram = false;
            alert("Program Selesai");
            break;
        }
        // ubah angka1 jadi float
        angka1 = parseFloat(angka1);
        // cek apakah angka1 bertipe angka atau bukan
        if (!angka1) {
            alert("masukkan bukan angka")
            // tanya user mau lanjut apa nggak
            if (!confirm('Mau lanjut?')) {
                // jika user nggk lanjut runprogram jadi false
                runProgram = false;
                alert('Program Selesai');
                break;
            }
            // Jika user lanjut maka kembali ke awal 
            else {
                continue;
            }
        }

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
        // cek apakah angka2 bertipe angka atau bukan
        if (!angka2) {
            alert("masukkan bukan angka")
            // tanya user mau lanjut apa nggak
            if (!confirm('Mau lanjut?')) {
                // jika user nggk lanjut runprogram jadi false
                runProgram = false;
                alert('Program Selesai');
                break;
            }
            // Jika user lanjut maka kembali ke awal
            else {
                continue;
            }
        }

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

        // tanya user mau lanjut atau tidak
        if (!confirm('Mau lanjut?')) {
            // jika user nggk lanjut runprogram jadi false
            runProgram = false;
            alert('Program Selesai');
        }

        // Jika Operator Salah
    } else {
        // tanya user lanjut atau tidak
        alert('Masukkan Operator Salah');
        if (!confirm('Mau lanjut?')) {
            // jika user nggk lanjut runProgram jadi false
            runProgram = false;
            alert('Program Selesai');
        }
    }
}