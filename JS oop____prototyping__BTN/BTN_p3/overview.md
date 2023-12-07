





## JS / OOP / prototyping & property descriptors

btn
 \
  \
+------ <Object> -------+
|                       |
|    .text: "Ok"        |
|       ^     ^         |
|       |     |         |
|  structure data       |
|       |     |         |
|      configure        |
|                       |
+-----------------------+







## Encapsulation

* get / set methods ---> DATA/VALUE


btn
 \
  \
+------ <Object> -------+
|                       |
|    .__text: "Ok"  <----- data -----> btn.text = ...   // external script
|                       |
+-----------------------+




btn
 \
  \
+------ <Object> -------+
|                       |
|    .__text: "Ok" -->  get () ---------> btn.text        // read
|                  <--  set () ---------> btn.text = ...  // write
|                    /  |
|           validation  |
|                       |
+-----------------------+






## Freezing
  - structure
  - data

Object.freeze(btn)
< {__text: 'Ok'}

Object.isFrozen(btn)
< true

btn.color = "black" // add color
< 'black'

btn
< {__text: 'Ok'}    // non add

delete btn.__text   // delete __text
< false

btn
< {__text: 'Ok'}    // non delete

btn.text = 'Cancel' // modify value
< 'Cancel'

btn
< {__text: 'Ok'}    // non modified











## Sealing 
  - structure

btn.color = "black"  // add color
< 'black'

btn
< {__text: 'Ok'}     // non add

delete btn.__text    // delete __text
< false

btn
< {__text: 'Ok'}     // non delete

btn.text = 'Cancel"  // modify value
< 'Cancel'

btn
< {__text: 'Cancel'} // modified












window.document
< #document

Object.isFrozen(window)
< false

Object.isSealed(window)
< false

delete window.document
< false

window.document = "This page has been hacked"
< 'This page has been hacked'

window.document
< #document

