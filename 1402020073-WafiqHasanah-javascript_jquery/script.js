$(document).ready(function() {

    $("#nomor").change(function() {
        if ($("#nomor").val() > 1) {
            $("#pulsa-1").prop("disabled", false);
            $("#paket-1").prop("disabled", false);
        } else {
            $("#pulsa-1").prop("disabled", true);
            $("#paket-1").prop("disabled", true);
        }
    });

    $("#nomor").keypress(function(value) {
        if (value.which != 8 && value.which != 0 && (value.which < 48 || value.which > 57)) {
            return false;
        }
    });

    $("#pulsa-1").change(function() {
        $("#btn1").prop("disabled", false);
        $("#btn1").css('background-color', '#fa591d');
        $("#btn1").css('color', 'white');
    });

    $("#paket-1").change(function() {
        $("#btn2").prop("disabled", false);
        $("#btn2").css('background-color', '#fa591d');
        $("#btn2").css('color', 'white');
    });

    $("#kat-pulsa").click(function() {
        $("#paket-1").prop("hidden", true);
        $("#pulsa-1").prop("hidden", false);
        $("#btn1").prop("hidden", false);
        $("#btn2").prop("hidden", true);
    })

    $("#kat-paket-data").click(function() {
        $("#pulsa-1").prop("hidden", true);
        $("#paket-1").prop("hidden", false);
        $("#btn1").prop("hidden", true);
        $("#btn2").prop("hidden", false);
    })

    $("#btn1").click(function() {
        var value = $("#pulsa-1").val();
        var convert = parseInt(value);
        if (convert < 10000) {
            convert += 3000;
        } else {
            convert += 2000;
        }
        const verif = confirm("Apakah anda yakin membeli pulsa sebesar " + value + "?");
        if (verif) {
            alert("Selamat anda telah membeli pulsa sebesar Rp. " + convert);
        } else {

        }
    });

    $("#btn2").click(function() {
        const pilihanItem = $("#paket-1").children("option:selected").text();
        if (pilihanItem === "Pilih") {
            alert("Pilihan error karna pilihan tidak sesuai! Coba diubah kembali!");
        } else {
            let harga = pilihanItem.substring(pilihanItem.length - 10);
            let verif = confirm("Pembelian paket data " + pilihanItem + " ke nomor " + $("#nomor").val());
            if (verif) {
                alert("Total harga paket data " + harga + ",- ke nomor " + $("#nomor").val() + " sedang di proses. Terima kasih telah membeli paket data disini");
            } 
        }
        
    });

});