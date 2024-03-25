# Vue introudzione

Vue è un framework di JS utilizzato per costruire interfacce utente. Consente di sviluppare in modo più efficente.
 - Riesce a tenere traccia automaticamente dei cambiamenti che avvengono nella pagina aggiornando di conseguenza il DOM
 - La maggior parte dei progetti vengono svolti utilizzando il metodo Single-file component (SFC), cioè un file al cui suo interno ha sia la logica di JS (<script></script>) che html (<template></template>) che CSS (<style></style>)
 - I componenti vue possono essere creati in due modi:
  - 1. Options API, più adatto ai principianti per via dell'organizzazione del codice tramite gruppi
  - 2. Composition API, più libero e richiede una comprensione maggiore di come funziona la reattività in vue, ha modelli più potenti per l'organizzazione e il riutilizzo della logica


# Template syntax

Vue utilizza una sintassi basata su html che consente di associare al DOM i dati dell'istanza del componente.
 - La forma più utilizzata per associare dati è la text interpolation utilizzando la sintassi "baffo" cioè doppia parentesi graffa {{esempio}}, il tag baffo verrà rimpiazzato con il valore della proprietà del corrispondente componente. (Aggiornamento automatico al cambiamento)
 - Direttive ---> le direttive hanno come prefisso v- , sono attributi speciali e il suo lavoro è quello di aggiornare il DOM al cambiamento di un valore
 - Attribute bindings (Associazioni) ----> Il baffo non può essere utilizzato all'interno di un attributo HTML, così utilizziamo la direttiva v-bind <div v-bind:id="dynamicaId"></div>         shorthand <div :id="dynamicId"></div>
 - Si possono utilizzare anche valori booleani come attributo, esempio il "disabled"
 - Se ho un oggetto con più attributi li posso associare a un singolo elemento usando v-bind con il nome dell'oggetto in questione
 - Vue supporta tutte le funzionalità di JS nelle associazioni ma possono essere usate: 
   1. dentro i baffi (nella text interpolation {{esempio}})
   2. Nel valore di un attributo (v-)
 - E' possibile anche invocare una funzione in una associazione ma saranno invocate ad ogni cambiamento del componente
 - Argomenti ----> alcune direttive possono avere un argomento indicato da due punti (:) dopo il nome della direttiva
 - Modificatori ----> sono suffissi speciali indicati da un punto (.), indicano che una direttiva deve essere associata in qualche modo speciale.