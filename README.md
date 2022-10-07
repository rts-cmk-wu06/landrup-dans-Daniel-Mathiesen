landrup-dans-Daniel-Mathiesen
landrup-dans-Daniel-Mathiesen created by GitHub Classroom

# Svendeprøve dokumentation Daniel Mathiesen - WU06 - okt 2022


# Tech-Stack

### React:

Jeg har valgt at bruge React i mit projekt, fordi det er det framework/library jeg selv kender bedst. React er også meget fleksibelt, og tillader en som udvikler at spare en masse tid, og kost af udvikling pga. Reacts modulare struktur. 

Det er også nemt at opretholde Reacts kode da det ikke går i stykker selvom der er ændringer. React er også designet til at være et hurtigt framework, så man kan køre komplexe apps/hjemmesider ekstremt hurtigt. Det er gjort ved at lave en virtuel DOM der kører server-sided.

React giver også mulighed for genbrugelige komponenter. Det er et af mine egne yndlings funktioner som React tilbyder. Det gør det super nemt at lave små komponenter, som man ved skal bruges flere steder.

React har også en masse packages of frameworks der gør react et endnu stærkerer værktøj, som bringer mig videre til…


### Tailwind CSS:

Tailwind er det css framework jeg har valgt at tage med i mit projekt. Det er det css framework jeg selv er bedst bekendt med, og det er den måde jeg godt kan lide at arbejde med css. Man kan nemlig spare meget tid på bare at have ens css og html i samme dokument, i stedet for at skifte mellem 2 dokumenter.

Tailwind tilbyder en hurtig og ekstrem nem styling af ens hjemmeside/app der er kendt som utility-first. Det hele bliver stylet igennem classes der bliver sat på ens elementer, og alle classes gør noget forskelligt ved ens element. Alt ens Tailwind css bliver lavet om til normal web læseligt css på millisekunder, og selve frameworket er ekstremt kompakt og fylder næsten ingenting. Med Tailwind kan man lave ens design et til et med ens mockup, og hvis Tailwind mangler noget man skal bruge, så kan man i Tailwinds config fil helt selv skabe nye klasser lige til ens behov.

### Axios:

Jeg har valgt Axios fordi jeg har arbejdet mere med det end fetch.
Axios har også nogle funktioner som fetch ikke har der er meget nyttige at have. Axios har muligheden for at annullere HTTP requests eller sætte en timeout på dem, samt at Axios automatisk transformere JSON data, og det er kun nogle af tingene.

## Versionsstyring:

Jeg har brugt github til versionsstyring. Github tillader mig at pushe mit arbejde ud på nettet, så jeg kan tilgå det lige meget hvor jeg er. Jeg har pushet hver gang jeg har færdiggjort en opgave, og sammen med det har jeg lavet nogle gode beskrivelser, samt labels der fortæller om der er bugs eller om der er nye features.




## Process overblik:

Jeg har også brugt trello til kanban board for at holde styr på hvilken opgaver der var færdige, og hvad der skulle arbejdes på. Trello har helt klart givet mig et bedre overblik over opgaven, og gjort den mere overskuelig. 
https://trello.com/b/gyKMvvDN/landrupdans

## Deploy process:

Min deploy process foregår gennem netlify, der automatisk opdatere/builder min netlify side, når der kommer nye changes til mit projekt. (I dette tilfælde min fork)

![netlifyDeploy](https://cdn.discordapp.com/attachments/560102203608793088/1027888778385301581/unknown.png)

## Tech-Stack perspektivering:

### React:
React køre på en virtuel DOM og derfor har lynhurtige hastigheder. Det gør angular ikke

### Tailwind css:

Tailwind har gode predefined klasser man nemt kan bruge. Udover det kan man nemt oprette egne klasser på sekunder, der passer lige til ens behov. Det er meget svære med bootstrap.

### Axios:

Axios har automatisk JSON konvertering, og HTTP request annullering. Det har fetch ikke.  



## Projekt perspektivering:

Appen kunne helt klart få tilføjet flere funktioner. det ville være godt med “premium aktiviteter” til evt. guld medlemmer. Det ville også være godt hvis instruktører kunne annullere aktiviteter, hvis det skulle være nødvendigt. Appen kunne også blive udviklet til at virke på desktop og andre platforme.

Min applikation har noget styling der nok godt kunne gøres bedre. Søgefunktionen kunne også blive bedre så man ikke behøver at bruge store og små bogstaver. Den kunne også gøres bedre på den responsive del.



## Kode til særlig bedømmelse:

Jeg vil i min præsentation komme nærmere ind på: Hvordan min søgefunktion henter api data og opdatere på ingen tid.

### Kode fra Search.js

```javascript
import { useState, useEffect } from "react";

// Components
import Menu from "../components/Menu";
import { getActivities } from "../data/axiosSearch";
import SearchBar from "../components/SearchBar";
import SearchList from "../pages/List" 
```

<br>

```javascript
const SearchPage = () => {

    const [activities, setActivities] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        getActivities().then(json => { 
         setActivities(json)   
         return json
        }).then(json =>{
           setSearchResults(json) 
        })
    }, [])
```

<br>

### Kode fra SearchBar.js

```javascript
const SearchBar = ({ activities, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(activities)

        const resultsArray = activities.filter(activity => activity.name.includes(e.target.value) || activity.weekday.includes(e.target.value) || activity.description.includes(e.target.value)) // gets activity titles and bodies
        
        setSearchResults(resultsArray)
    }
```

<br>

### Kode fra ActivitySearch.js

```javascript
const Activity = ({ activity }) => {
    return(
        <div className="px-8 bg-landrupPurple w-screen h-full pt-10">
          <a href={`/activity/${activity.id}`}>
          <div
            className="flex flex-col-reverse h-96 rounded-3xl mb-12)] bg-cover bg-center bg-no-repeat pt-10"
            style={{ backgroundImage: `url("${activity.asset.url}")` }}
          >
            <div className="bg-[#E1A1E9] flex flex-col justify-center items-start text-md font-bold px-3 h-[30%] w-full opacity-90 rounded-tr-[50px] rounded-bl-2xl">
              <p className="pb-2">{activity.name}</p>
              <p className="pb-2">{activity.minAge}-{activity.maxAge} år</p>
            </div>
          </div>
          </a>
      </div> 
    )
}

export default Activity
```
