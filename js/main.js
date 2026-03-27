/**
 * @file Méthodes et fonctions utilisées pour le TP3 en Intégration - Validation Formulaire Accessible"
 * @author Maxime Riverin <2435415@csfoy.ca>
 * @version 1.0.0
 */

document.getElementById('formulaire').setAttribute('novalidate', true);
document.getElementById('telephone').type = "text";
document.getElementById('formulaire').addEventListener('submit', validerFormulaire);
document.querySelectorAll('.contact__containeur input').forEach(item => {
    item.addEventListener('blur', validerContact);
});
document.querySelectorAll('.postales__containeur input').forEach(item => {
    item.addEventListener('blur', validerPostales);
})

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

function validerContact(objEvent) {
    let blnEstValide = true;
    const refObjetContact = objEvent.target;
    const refMessageErreurContact = document.querySelector(`.contact__containeur .erreur-${refObjetContact.id}`);
    const strValeurObjet = refObjetContact.value.trim();
    const regexObjet = new RegExp('^' + refObjetContact.pattern + '$');
    console.log(regexObjet);

    if ((strValeurObjet.length !== 0) && (regexObjet.test(strValeurObjet))) {
        refMessageErreurContact.classList.add('cacher');
    }
    else {
        refMessageErreurContact.classList.remove('cacher');
        blnEstValide = false;
    }

    return blnEstValide;
}

function validerPostales(objEvent) {
    let blnEstValide = true;
    const refObjetPostales = objEvent.target;
    const refMessageErreurPostales = document.querySelector(`.postales__containeur .erreur-${refObjetPostales.id}`);
    const strValeurObjet = refObjetPostales.value.trim();
    const regexObjet = new RegExp('^' + refObjetPostales.pattern + '$');
    console.log(regexObjet);

    if ((strValeurObjet.length !== 0) && (regexObjet.test(strValeurObjet))) {
        refMessageErreurPostales.classList.add('cacher');
    }
    else {
        refMessageErreurPostales.classList.remove('cacher');
        blnEstValide = false;
    }

    return blnEstValide;
}

