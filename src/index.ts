
// Referencias

import { fromEvent, map, Subject } from "rxjs";

const input = document.createElement('input');
input.placeholder = "Ingrese nombre...";
document.querySelector('body').append(input);

const button = document.createElement('button');
button.innerHTML = "Agregar";
document.querySelector('body').append(button);



const boton$ = fromEvent( button, 'click' ).pipe(
    map( resp => input.value )
);

const bus$ = new Subject(); 

boton$.subscribe( bus$ );

const obs1$ = bus$.subscribe( resp => console.log('Obs1' , resp)  );
const obs2$ = bus$.subscribe( resp => console.log('Obs2' , resp) );
const obs3$ = bus$.subscribe( resp => console.log('Obs3' , resp) );
const obs4$ = bus$.subscribe( resp => console.log('Obs4' , resp) );
const obs5$ = bus$.subscribe( resp => console.log('Obs5' , resp) );


setTimeout(() => {
    obs1$.unsubscribe();
}, 5000 );



