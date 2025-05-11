function showOrHideDiv(divID) {

  //отваряме или затваряме избраното пристанище
  var x = document.getElementById(divID);
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  //затваряме останалите пристанища
  switch(divID) {
    case 'port-marina-dinevi':
      document.getElementById('port-pomorie').style.display = "none";
      document.getElementById('port-nesebyr').style.display = "none";
      document.getElementById('port-burgas').style.display = "none";
      document.getElementById('port-sozopol').style.display = "none";
      break;
    case 'port-pomorie':
      document.getElementById('port-marina-dinevi').style.display = "none";
      document.getElementById('port-nesebyr').style.display = "none";
      document.getElementById('port-burgas').style.display = "none";
      document.getElementById('port-sozopol').style.display = "none";
      break;
    case 'port-nesebyr':
      document.getElementById('port-marina-dinevi').style.display = "none";
      document.getElementById('port-pomorie').style.display = "none";
      document.getElementById('port-burgas').style.display = "none";
      document.getElementById('port-sozopol').style.display = "none";
      break;
    case 'port-burgas':
      document.getElementById('port-marina-dinevi').style.display = "none";
      document.getElementById('port-nesebyr').style.display = "none";
      document.getElementById('port-pomorie').style.display = "none";
      document.getElementById('port-sozopol').style.display = "none";
      break;
    case 'port-sozopol':
      document.getElementById('port-marina-dinevi').style.display = "none";
      document.getElementById('port-nesebyr').style.display = "none";
      document.getElementById('port-burgas').style.display = "none";
      document.getElementById('port-pomorie').style.display = "none";
      break;
  }
} 