var tanya = true;
while(tanya) {
    // Menangkap Pilihan Player
    var p = prompt('pilih: gajah, semut, orang');

    // Menangkan pilihan komputer
    // Membangkitkan bilangan random
    var comp = Math.random();

    if(comp < 0.34) {
        comp = 'gajah';
    } else if(comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';
    // Menentukan rules
    if(p == comp) {
        hasil = 'SERI';
    } else if(p == 'gajah') {
        // if(comp == 'orang') {
        //     hasil = 'MENANG'
        // } else {
        //     hasil = 'KALAH';
        // }
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
    } else if(p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
    } else if(p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'Memasukkan pilihan yang salah.';
    }

    // Tampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

    tanya = confirm('Lagi?');
}

alert('Terima kasih sudah bermain');