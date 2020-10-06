function submitNumber(){
    let numberr;
    do{
        numberr = prompt('Saisissez un nombre entre 0 et 1000 :\n(Nombres entiers seulement)');
        if (!((Number(numberr) >= 0 && Number(numberr) <= 1000) && numberr !== undefined)){
            alert('Veuillez entrez une valeur correcte.');
        }
    } while(!((Number(numberr) >= 0 && Number(numberr) <= 1000) && numberr !== undefined));
    if (numberr === null || numberr === ''){
        return numberr;
    }
    else{
        return Math.trunc(Number(numberr));
    }
}

function cutNbr(nbr){
    nbr = nbr / 10;
    nbr = Math.trunc(nbr);
    return nbr;
}

function traitement(nbr){
    if (nbr == 0){
        return 'zéro';
    }
    else if (nbr == 1000){
        return 'mille';
    }
    else{
        let nbrArray =  [
            ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'],
            ['dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix',
            'quatre-vingts', 'quatre-vingt-dix'],
            ['cent', 'deux-cent', 'trois-cent', 'quatre-cent', 'cinq-cent', 'six-cent',
            'sept-cent', 'huit-cent', 'neuf-cent']
        ]
        let except1 = ['onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize'];
        let except2 = ['soixante-et-onze', 'soixante-douze', 'soixante-treize', 'soixante-quatorze',
                    'soixante-quinze', 'soixante-seize'];
        let except3 = ['quatre-vingt-onze', 'quatre-vingt-douze', 'quatre-vingt-treize',
                    'quatre-vingt-quatorze', 'quatre-vingt-quinze', 'quatre-vingt-seize']
        let centain, dizain, unit;

        let verif = nbr % 100;
        if((verif > 10 && verif < 17) || (verif > 70 && verif < 77) || (verif > 90 && verif < 97)){
            switch(true){
                case (verif > 10 && verif < 17):
                    verif = (verif % 10);
                    dizain = except1[verif - 1];
                    break;
                case (verif > 70 && verif < 77):
                    verif = (verif % 10);
                    dizain = except2[verif - 1];
                    break;
                case (verif > 90 && verif < 97):
                    verif = (verif % 10);
                    dizain = except3[verif - 1];
                    break;
            }
            nbr = cutNbr(nbr);
            nbr = cutNbr(nbr);
            if(nbr == 0){
                centain = null;
                unit = null;
                return dizain;
            }
            else{
                centain = nbrArray[2][nbr - 1];
                unit = null;
                return (centain + '-' + dizain);
            }
        }
        else{
            let etUn = nbr % 10;

            (nbr % 10) == 0 ? unit = null : unit = nbrArray[0][(nbr % 10) - 1];
            
            nbr = cutNbr(nbr);
            if (nbr == 0){
                return unit;
            }
            else{
                if ((etUn == 1) && (nbr % 10 > 0) && (nbr % 10 != 8)){
                    unit = 'et-' + unit;
                }
                (nbr % 10) == 0 ? dizain = null : dizain = nbrArray[1][(nbr % 10) - 1];

                nbr = cutNbr(nbr);
                if (nbr == 0){
                    if (unit == null){
                        return dizain;
                    }
                    else{
                        return (dizain + '-' + unit);
                    }
                }
                else{
                    centain = nbrArray[2][nbr - 1];
                    
                    if ((unit == null) && (dizain == null)){
                        return centain;
                    }
                    else if ((unit == null) && (dizain != null)){
                        return (centain + '-' + dizain);
                    }
                    else if ((dizain == null) && (unit != null)){
                        return (centain + '-' + unit);
                    }
                    else{
                        return (centain + '-' + dizain + '-' + unit);
                    }
                }
            }
        }
    }
}

function final(){ 
    let nbr = submitNumber();
    console.log(nbr);
    if (nbr === undefined || nbr === null || nbr === ''){ return; }
    nbrLT = traitement(nbr);
    document.getElementById('result').style.display="initial";
    document.getElementById('buttone').style.top="45px";
    document.getElementById('result').innerHTML= 
    '<span style="color: #c23616;">' + nbr + '</span> <span style="color: #718093;">=></span> ' + nbrLT;
}