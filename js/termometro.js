var temp = prompt("Temperatura");
        
temp = parseFloat(temp);

document.write("Temperatura:"+temp+"<br>");

if (temp >38) { document.write("Você está com febre"); } 

else if (temp >=50) { document.write ("Você queimou :(");}
else if (temp <3) { document.write ("Você está morto :O");}

else { document.write("Você está bem :)"); }