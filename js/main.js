/**
 * @file Méthodes et fonctions utilisées pour le TP3 en Intégration - Validation Formulaire Accessible"
 * @author Maxime Riverin <2435415@csfoy.ca>
 * @version 1.0.0
 */

document.getElementById('formulaire').setAttribute('novalidate', true);
document.getElementById('telephone').type = "text";
document.getElementById('formulaire').addEventListener('submit', validerFormulaire);
document.querySelectorAll('.informations-personnelles__containeur input').forEach(item => {
    item.addEventListener('blur', validerInformationsPersonnelles);
});

function validerFormulaire(objEvent) {
    let intChampsInvalides = 0;
    objEvent.preventDefault();

    // if (!validerFormat()) {
    //     ++intChampsInvalides;
    // }

    // if (!validerContact()) {
    //     ++intChampsInvalides;
    // }

    // if (!validerPostales()) {
    //     ++intChampsInvalides;
    // }

    // if (intChampsInvalides === 0) {
    //     console.log('Sended');
    // }
    
    // else {
    //     console.log('Nombre champ(s) invalide(s) : ' + intChampsInvalides);
        
    // }
}

function validerFormat() {
    let blnEstValide = true;
    const refMessageErreurFormat = document.querySelector('.format__containeur .message-erreur');

    if (document.querySelector('input[name="format"]:checked') === null) {
        refMessageErreurFormat.classList.remove('cacher');
        blnEstValide = false;
    }
    else {
        refMessageErreurFormat.classList.add('cacher');
    }

    console.log(blnEstValide);
    return blnEstValide;
}

function validerInformationsPersonnelles(objEvent) {
    let blnEstValide = true;
    const refObjet = objEvent.target;
    const refMessageErreur = document.querySelector(`.informations-personnelles__containeur .erreur-${refObjet.id}`);
    const strValeurObjet = refObjet.value.trim();
    const regexObjet = new RegExp('^' + refObjet.pattern + '$');
    console.log(regexObjet);

    if ((strValeurObjet.length !== 0) && (regexObjet.test(strValeurObjet))) {
        refMessageErreur.classList.add('cacher');
    }
    else {
        refMessageErreur.classList.remove('cacher');
        blnEstValide = false;
    }

    return blnEstValide;
}

