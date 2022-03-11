

function CreateTab (date,capteur,valeur) {
    // créer header -> une ligne  et columns (date, capteur, valeur), stocké dans var table.
};

function GetHour (json) {
    //parcourt json, récupère timestamp, transforme pour récupérer heure, la stocke dans une variable (Heure)"
};

function GetDatas (json, date, capteur, bruit) {
    // parcourt json, récupère, stock et retourne dans 3 variables [date], [capteur] et [bruit] (en strings)
};

function FillTabDate ([date]) {
    //push dans colomne date en créant une ligne à chaque index. 
};

function FillTabCapteur ([capteur]) {
    //push dans colomne capteur en créant une ligne à chaque index. 
};

function FillTabBruit ([bruit]) {
    //push dans colomne bruit en créant une ligne à chaque index. 
};

function CalcBruitHeure (date, bruit) {
    // calcul bruit par heure et stocke dans une variable (BruitHeure).
};

function CreateGraph (BruitHeure, Heure) {
    // Créé absysse et ordonées avec avec un rectangle bleu qui reprensente Bruit par Heure, 
    // graduations en ordonées et Heure en absysse + legende.
};

function RenderPage (Graph, Tableau) {
    //Appel createTab et createGraph
};

