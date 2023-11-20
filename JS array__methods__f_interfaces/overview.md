 ```

                [    "John" , "m", 30   ]
                   |
                   v
 
 +------ render ( personalData ) ----------+
                   |
                   |
                   v
        `
        <div
            <h2>${personalData[NAME]}</h2>
            <p>${personalData[GEN]} (${personalData[AGE]} years)</p>
        </div>
        `

                  |
                 html
 +----------------|------------------------+
                return
                  |
                  v
 '<div><h2>John</h2><p>m (30 years)</p></div>'







                                               +----------------+ 
 original                                      |                |
 const people = [                     .map ( render )           |    [    "John" , "m", 30   ]     
                                                                |          |
        [    "John" , "m", 30   ],  >>                          |          V
        [   "Marry" , "f", 31   ],                            render ( personalData )
        [    "Pete" , "m", 22   ],                               |
        [   "Tanya" , "f", 19   ],        <-------------------  html
        [    "Mark" , "m", 33   ], 
]

copy
[
    '<div> .....' , 
    '<div> .....' ,
    '<div> .....' ,
    '<div> .....' ,
    '<div> .....' ,
]





original [] ---> map (f) ----> result []