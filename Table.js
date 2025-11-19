class Table{
    constructor(longueur, largeur, etat, couleur){
        this.longueur = longueur;
        this.largeur = largeur;
        this.etat = etat;
        this.couleur = couleur
    }

    getLongueur(){
        return this.longueur;
    }

    getLargeur(){
        return this.largeur
    }

    getSurface() {
        return this.longueur * this.largeur;
    }
}


