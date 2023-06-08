function generatorQR(){
    var name = document.getElementById('name1').value;
    var email = document.getElementById('email').value;
    var num = document.getElementById('num').value;
    var dob = document.getElementById('dob').value;
  //  var Male = document.getElementById('Male').value;
    //var Female=document.getElementById('Female').value;
    var add = document.getElementById('add').value;
    var country = document.getElementById('country').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;
    var pin = document.getElementById('pin').value;
    var dl = document.getElementById('dl').value;
    var auth = document.getElementById('auth').value;
    var name2 = document.getElementById('name2').value;
    var vno = document.getElementById('vno').value;
    var vt = document.getElementById('vt').value;
    var rc = document.getElementById('rc').value;
    var ins = document.getElementById('ins').value;
    var puc = document.getElementById('puc').value;
    var vds = document.getElementById('vds').value;
    var vde = document.getElementById('vde').value;
    var vage = document.getElementById('vage').value;
    var vs = document.getElementById('vs').value;
    var cm = document.getElementById('cm').value;
    var remarks = document.getElementById('remarks').value;
   
    console.log("name:"+name+"email: "+email+"num:  "+num+"dob: "+dob+"add: "+add+"country: "+country+"state: "+state+"city: "+city+"pin:  "+pin+"dl:  "+dl+"auth: "+auth+" "+name2+"vno: "+vno+"vt: "+vt+"rc: "+rc+"ins: "+ins+"puc: "+puc+"vds: "+vds+"vde: "+vde+" "+vage+"vs: "+vs+"cm: "+cm+"remarks: "+remarks);

    var url ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=name:"+name+"email: "+email+"num:  "+num+"dob: "+dob+"add: "+add+"country: "+country+"state: "+state+"city: "+city+"pin:  "+pin+"dl:  "+dl+"auth: "+auth+" "+name2+"vno: "+vno+"vt: "+vt+"rc: "+rc+"ins: "+ins+"puc: "+puc+"vds: "+vds+"vde: "+vde+" "+vage+"vs: "+vs+"cm: "+cm+"remarks: "+remarks;

    var ifr=`<iframe src="${url}></iframe>`;
    document.getElementById('qrcode').innerHTML=ifr

}

function callValue(){

  var name = document.getElementById('name1').value;
    var email = document.getElementById('email').value;
    var num = document.getElementById('num').value;
    var dob = document.getElementById('dob').value;
  //  var Male = document.getElementById('Male').value;
    //var Female=document.getElementById('Female').value;
    var add = document.getElementById('add').value;
    var country = document.getElementById('country').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;
    var pin = document.getElementById('pin').value;
    var dl = document.getElementById('dl').value;
    var auth = document.getElementById('auth').value;
    var name2 = document.getElementById('name2').value;
    var vno = document.getElementById('vno').value;
    var vt = document.getElementById('vt').value;
    var rc = document.getElementById('rc').value;
    var ins = document.getElementById('ins').value;
    var puc = document.getElementById('puc').value;
    var vds = document.getElementById('vds').value;
    var vde = document.getElementById('vde').value;
    var vage = document.getElementById('vage').value;
    var vs = document.getElementById('vs').value;
    var cm = document.getElementById('cm').value;
    var remarks = document.getElementById('remarks').value;
    
    document.writeln("name:<br>"+name);
    document.writeln("email: <br>"+email);
    document.writeln("phone: <br> "+num);
    document.writeln("dob: <br>"+dob)
    document.writeln("address: <br>"+add)
    document.writeln("country: <br>"+country)
    document.writeln("state: <br>"+state)
    document.writeln("city:<br> "+city)
    document.writeln("pin:  <br>"+pin)
    document.writeln("dl:  <br>"+dl)
    document.writeln("auth: <br>"+auth)
    document.writeln("name2: <br>"+name2)
    document.writeln("vehicle no.: <br>"+vno)
    document.writeln("vehicle type: <br>"+vt)
    document.writeln("rc: <br>"+rc)
    document.writeln("ins: <br>"+ins)
    document.writeln("puc: <br>"+puc)
    document.writeln("vds: <br>"+vds)
    document.writeln("vde: <br>"+vde)
    document.writeln("vehicle age: <br>"+vage)
    document.writeln("vehicle status: <br>"+vs)
    document.writeln("monthly checklist: <br>"+cm)
    document.writeln("remarks: <br>"+remarks)
    
}