const countwords = () => {
  let noc = document.getElementById('words').value.length;
  let now = document.getElementById('words').value;
  let x  = now.split(" ").length;
  // now = now.match(/\w+/g);
  // now = now.length;
  // alert(noc);
  document.getElementById("showdata").innerHTML = "Number of Characters = " + noc;
  document.getElementById("showwords").innerHTML = "Number of words = " + x;
}
function printPageArea(areaID){
    var printContent = document.getElementById(areaID);
    var WinPrint = window.open('', '', 'width=900,height=650');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}
