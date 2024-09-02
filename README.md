This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The goal of this project was to create a simple nextjs based chatbot, using the OpenAI API.

## Getting Started

First, add your OpenAI API key into .env.local: 
```bash
OPENAI_API_KEY = 'your api key here'
```

Secondly, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Deployed here: https://chat-bot-kappa-hazel.vercel.app/

## Proovitöö küsimused
### Kirjelda koodi struktuuri ja miks oled just sellised valikud teinud?
Kood on ehitatud üles võimalikult lihtsalt. Esilehe komponendi tegin wrapperiks ja seal sees kutsun välja ka Chat komponendi. See omakorda kuvab siis vestlusakna ja genereerib kõik kirjutatud ja saadud sõnumid kasutajale nähtavale. Sellise arhitektuuri ja üleüldise lihtsuse kasuks otsustasin puhtalt kogemuse põhjalt. Kuna kogu see projekt on täiesti uut sorti kogemus siis ma ei tahtnud asja enda jaoks liialt keeruliseks ajada. Toimetasin vastavalt ülesande püstitusele ja lõin vestlusakna kus on võimalik küsida küsimusi ja saada vastuseid. Muus osas jäin projekti algse arhitektuuri juurde, sest NextJS ise on nii üles ehitatud ja mul pole kogemusi, et midagi liigselt muutma hakata.
### Kirjelda, kuidas sinu loodud chat-kasutajaliideses on tagatud kasutajasõbralikkus?
Isikliku kogemuse põhjal ütleksin, et kasutajasõbralikud liidesed on iseenesestmõistetavad. Kui on väga palju teksti või nuppe või muid UI elemente siis on väga keeruline navigeerida. Sellel lehel on ainult üks lihtne tekstiväli, kuhu saab küsimusi kirjutada ja siis nupp, et neid saata. Täpselt samamoodi nagu kõige tavalisemad sõnumirakendused. Seetõttu on kerge aru saada, mida täpselt teha saab ja kuidas asi töötab. Kasutaja ja AI sõnumid on ka erinevate värvidega tähistatud ning lisaks on juures ka ikoonid, mis aitavad eirstada enda saadetud ja vastu saadud sõnumeid.
### Miks kasutad sellist värviskeemi ja tüpograafiat?
Disaini poolest püüdsin olla võimalikult neutraalne. Valida pehmed ja mitte liiga erksad toonid, mis valgel taustal näeksid kenad välja, kuid oleksid siiski eristatavad. AI teksti tähistuseks valisin protsessori ikooni, sest see võiks arusaadavalt tähistada AI vastuseid. Kasutaja enda teksti tähistasin sõnumi ikooniga. Muid pilte või disainielemente ei soovinud lisada, et säilitada lihtsus ja kasutajasõbralikkus.
### Miks kasutad just seda disaini lähenemist (puhas CSS või Tailwind või Bootstrap või Material või muu lähenemine, mida eelistad)?
Kasutasin Bootstrappi ja CSSi mõlemat. Puhtalt isikliku kogemuse tõttu, sest olen nendega varasemalt natukene töötanud.
### Kuidas testiksid automaatselt antud rakendust (võid lisada ka testi, kuid see pole kohustuslik)?
Oleks võimalik kirjutada automaatteste, mis teeksid POST requeste vastu rakenduse enda APIt ning kontrolliksid sel juhul vastuse struktuuri ja olemasolu. Kuna vastus ise sõltub vastavalt AI mudelist, eelnevatest sõnumitest ja paljudest muudest faktoritest siis vastuse enda sisu täpsust on väga keeruline kontrollida.
### Millised ohud ja riskid on seotud näidisrakendusega ning mida teeksid nende maandamiseks?
Rakenduse juures võib esineda mitmeid erinevaid ohte ja riske.
Esiteks võib ohuks olla AI mudeli täpsus. Küsimustele saadavad vastused ei pruugi olla faktiliselt korrektsed ning seetõttu tuleks kasutajat hoiatada, et vastused ei pruugi alati õiged olla ning iga küsimuse vastust tuleks kontrollida muude andmete põhjal.

Turvalisus ja andmete kaitsmine on alati kõige olulisem ohukoht, mille puhul tuleb olla väga ettevaatlik. Praeguse rakenduse juures on väga oluline kaitsta OpenAI API võtit. Seda ei tohi hoida avalikult Githubis vaid env failidena arendajate arvutites ja juurutamisel Vercelis saladustena (secret) keskkonna muutujates.

Lisaks võivad probleemiks osutuda mudeli skaleeritavus ja OpenAI enda rate limit. Need võivad piirata kasutajate ligipääsu ja sõnumitele vastuste saamise kiirust. Nende probleemide likvideerimiseks peaks kasutama sobivat paketti OpenAI-lt ning oma veebirakendust vastavalt kasutajate hulgale skaleerima, et riistvaraliselt ei tekiks limitatsioone.

Veel võib ohuks olla eetilisus ja autoriõiguste austamine. Kui kasutatav mudel on treenitud andmete peal, mille jaoks ei ole autoritelt õigust saadud siis on nende põhjal vastuste kuvamine ka vale. Seega peab esmalt olema kindel, et OpenAI on oma mudelite treenimisel pidanud kinni seadustest. Juhul kui sellise rakenduse puhul hakata sõnumeid ka kuidagi salvestama, siis peab kasutajaandmete seadustega ka kursis olema.

