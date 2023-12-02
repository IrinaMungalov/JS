




## JS / Object prototyping

NOTE: variable.__proto__ <------ Object.getPrototypeOf(variable)

1. base

   object {} -------> prototype


2. prototyping chains

   prototypeC {} ----> prototypeB {} ----> prototypeA ----> null



Object (base type)
 \
  \
   \
+---+----------------------------------------+
|       .prototype                           | Object.getPrototypeOf(emptyLiteral)
|  +------------------------------------+    |  v
|  |  ...                               |  <----- let emptyLiteral = {}
|  |  .toString()                       |    |
|  |  .hasOwnProperty()                 |    | Object.getPrototypeOf(anotherEmptyLiteral).customProperty
|  |  ...                               |    |  v
|  |  ...                               |  <----- let anotherEmptyLiteral = {
|  |                                    |    |          customProperty:"Another Custom"   
|  |                                    |    |    }
|  |                                    |    |               ^
|  |  .customProperty = "CustomProperty"|    |               |
|  |                                    |    |              get
|  |                                    |    |               |
|  +------------------------------------+    |           .customProperty
|                                            |
|    tools to work with objects              |       
|    ...                                     |
|    .getPrototypeOf()                       |
|    ...                                     |
|                                            |
|                                            |
|                                            |
|                                            |
|                                            |
+--------------------------------------------+












Object (base type)
 \
  \
   \
+---+----------------------------------------+
|       .prototype                           | 
|  +------------------------------------+    |  
|  |  ...                               |    |
|  |  .toString()                       |    |
|  |  .hasOwnProperty()                 |    | 
|  |  ...                               |    |  
|  |  ...                               |  <-------------------+
|  |                                    |    |                 |           
|  |                                    |    |                 |  
|  |                                    |    |                 |             
|  |  .customProperty = "CustomProperty"|    |               Array                     arr
|  |                                    |    |                 \                        \
|  |                                    |    |              +-------------+         +--------+
|  +------------------------------------+    |              | .protptype <--------- |   []   |  
|                                            |                                      +--------+
|    tools to work with objects              |                                       .customProperty
|    ...                                     |
|    .getPrototypeOf()                       |
|    ...                                     |
|                                            |
|                                            |
|                                            |
|                                            |
|                                            |
+--------------------------------------------+