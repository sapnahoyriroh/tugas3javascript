function tambah() { 
    var frm = document.getElementById("kalkulator"); 
    var angka = parseFloat(frm.angka.value); 
    var angka2 = parseFloat(frm.angka2.value); 
    var total = angka + angka2; 
    frm.hasil.value = total; 
    if (frm.angka.value != "" && frm.angka2.value != "") { 
      return true; 
    } else { 
      alert("Maaf angka belum terisi!"); 
    } 
  } 
   
  function kurang() { 
    var frm = document.getElementById("kalkulator"); 
    var angka = parseFloat(frm.angka.value); 
    var angka2 = parseFloat(frm.angka2.value); 
    var total = angka - angka2; 
    frm.hasil.value = total; 
  x 
    if (frm.angka.value != "" && frm.angka2.value != "") { 
      return true; 
    } else { 
      alert("Maaf angka belum terisi!"); 
    } 
  } 
  function kali() { 
    var frm = document.getElementById("kalkulator"); 
    var angka = parseFloat(frm.angka.value); 
    var angka2 = parseFloat(frm.angka2.value); 
    var total = angka * angka2; 
    frm.hasil.value = total; 
   
    if (frm.angka.value != "" && frm.angka2.value != "") { 
      return true; 
    } else { 
      alert("Maaf angka belum terisi!"); 
    } 
  } 
  function pembagian() { 
    var frm = document.getElementById("kalkulator"); 
    var angka = parseFloat(frm.angka.value); 
    var angka2 = parseFloat(frm.angka2.value); 
    var total = angka / angka2; 
    frm.hasil.value = total; 
   
    if (frm.angka.value != "" && frm.angka2.value != "") { 
      return true; 
    } else { 
      alert("Maaf angka belum terisi!"); 
    } 
  } 
  function pangkat() { 
    var frm = document.getElementById("kalkulator"); 
    var angka = eval(frm.angka.value); 
    var angka2 = eval(frm.angka2.value); 
    var total = Math.pow(angka, angka2); 
    frm.hasil.value = total; 
    if (frm.angka.value != "" && frm.angka2.value != "") { 
      return true; 
    } else { 
      alert("Maaf angka belum terisi!"); 
    } 
  } 
   