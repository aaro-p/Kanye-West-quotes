# Kanye West Quotes

React ohjelmointikurssin lopputyö, Satakunnan ammattikorkeakoulu

Clone or Download this repository. You will need node and npm installed globally on your machine.

netlify: https://kanye-oneliners.netlify.app/

# Installation:

`npm install`


# To Start Server:

`npm run start`

# Sovelluksen kuvaus

Sovellus listaa API-endpointin 
palauttamia lainauksia (quote). Käyttäjällä on mahdollisuus poistaa haettuja 
lainauksia yksitellen tai kaikki kerralla. Ohjelmassa on mahdollisuus suodattaa 
lainauksia niiden sisältämän sanamäärän perusteella.

Lainauksien haku tapahtuu käyttäjän aloitteesta. Käyttäjän pitää painaa painiketta 
ladatakseen yhden (1) lainauksen. Jos yhtään lainausta ei ole tallennettu 
(esimerkiksi alkutilanteessa), näytetään käyttäjälle teksti "No quotes!".

Suodatuksessa käyttäjä määrittelee vähimmäissanamäärän joka lainauksessa pitää 
olla, jotta se näkyy listauksessa. Oletusarvo arvolle on 1 (yksi) ja kentän arvo ei saa 
mennä sitä pienemmäksi. Esimerkiksi jos suodattimen arvo on 3, listauksessa 
näkyisi teksti "Kolmen sanan lause", mutta "Moi maailma" ei näkyisi. 
Suodatuskenttään ei voi sijoittaa muita kuin kokonaislukuja. Suodatus tapahtuu 
kentän arvoa vaihtamalla, ilman erillisistä painikkeen aktivoimista.

Ohjelma näyttää käyttäjälle tallennettujen lainausten yhteismäärän sekä listassa 
näkyvissä olevien lainausten määrän.
