//input operator oleh user
let inputOperasi = prompt('Pilih Operator' + '\n'+ 'ex : +,-,x,:');
//input bilangan 1 oleh user
let angka1 = parseInt(prompt('Masukkan bilangan pertama'));
//input bilangan 1 oleh user
let angka2 = parseInt(prompt('Masukkan bilangan kedua'));

//pengondisian
if (inputOperasi=='+'){
    hasil = angka1 + angka2;
} else if (inputOperasi == '-'){
    hasil = angka1 - angka2;
    } else if (inputOperasi == '*'){
        hasil = angka1*angka2;
        } else if (inputOperasi == ':'){
            hasil = angka1/angka2;
            }     
//ketika masukan user tidak sesuai 
else {
    alert('Operator yang anda pilih salah');
}
alert('Hasil dari   '+ angka1 + inputOperasi + angka2 + '   adalah ' + hasil);  