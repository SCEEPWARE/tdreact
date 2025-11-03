import React, {ChangeEvent, FunctionComponent, useEffect, useMemo, useState} from "react";
import superheros from '../public/SuperHeros.json' with {type : "json"};

const App : FunctionComponent = () => {
    const nom : string = "Toto";
    let [compteur, SetCompteur] = useState<number>(0);

    const listHeros = superheros.map(hero => <li>{hero.name}</li>)
    let [filtre, SetFiltre] = useState<string>("");

    useEffect(() => {
        document.title = `Vous avez cliqué ${compteur} fois`;
    }, [compteur]);

    const listHerosFiltre = useMemo(() => {
        const herosFiltre = filtre ? superheros.filter(hero => hero.name.toLowerCase().includes(filtre.toLowerCase())) : superheros;
        return herosFiltre.map(hero => <li>{hero.name}</li>);
    }, [filtre]);

    const handleFiltre = (event : ChangeEvent<HTMLInputElement> ) => {
        SetFiltre(event.target.value);
    }

    return (
        <div>
            <h1>Bonjour {nom}, je découvre React!</h1>
            <p>Il y a {superheros.length} héros dans la base.</p>
            <input
                type="text"
                value={filtre}
                onChange={handleFiltre}
            />
            <ul>{listHerosFiltre}</ul>
            <button onClick={() => {SetCompteur(compteur + 1)}}>+</button>
            <button onClick={() => {SetCompteur(compteur = 0)}}>Réinitialiser</button>
        </div>
    )
}


export default App;
