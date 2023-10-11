


movePlayerRight
 \
  \
   \
+---+------<Function>-------------+
|                                 |
|      playerX += 10              |
|      player.style=`t...``       |
|                                 |
|                                 |
|                                 |
+---------------------------------+








-----------------------------------------------------------


----------- reads ltr -------------------->

               2. execute (call)
                 |
                 v
movePlayerRight ( )
        ^
        |
       1. find this one








                              -------------> call
                            /
button[onclick="movePlayerRight()"]
button[onclick="movePlayerLeft()"]
                            \
                              -------------> call







  >, <, a, w, space... <----- hits a key USER
    | 
    event
    |                if ? -----------> call movePlayerRight()
    v                  |
 body[onkeydown="onKey()"]
                       |
                     if ? -----------> call movePlayerLeft()





                       