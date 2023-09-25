let saldoVitoria = heroiSaldoVitorias(180, 95);
let nivelHeroi = " ";


function heroiSaldoVitorias(vitoria, derrota){
    let saldoVitorias = vitoria - derrota;
    return saldoVitorias;
    }
if (saldoVitoria < 10) {
    nivelHeroi = "Ferro";
 } else if (saldoVitoria > 10 && saldoVitoria <= 20) {
     nivelHeroi = "Bronze";
 } else if (saldoVitoria > 20 && saldoVitoria <= 50) {
     nivelHeroi = "Prata";
 } else if (saldoVitoria > 50 && saldoVitoria <= 80) {
     nivelHeroi = "Ouro";
 } else if (saldoVitoria > 80 && saldoVitoria <= 90) {
     nivelHeroi = "Diamante";
 } else if (saldoVitoria > 90 && saldoVitoria <= 100) {
     nivelHeroi = "Lendário";
 } else if (saldoVitoria > 100) {
     nivelHeroi = "Imortal";
 } 

 console.log ("O Herói tem de saldo de ", saldoVitoria, " está no nível de ", nivelHeroi);