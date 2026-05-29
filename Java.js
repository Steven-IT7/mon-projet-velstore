function changerCouleur() {
    const hero = document.querySelector('.hero');
    // Alterne entre le thème bleu d'origine et un thème violet sombre moderne
    if (hero.style.background.includes('rgb(15, 76, 129)')) {
        hero.style.background = 'linear-gradient(135deg, #1f4068, #162447)';
    } else {
        hero.style.background = 'linear-gradient(135deg, #0f4c81, #1b262c)';
    }
}