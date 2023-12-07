








* in JS an OBJECT is:
    1. DATA STRUCTURE (properties)
    2. BEHAVIOR       (methods/ops)












                                                          null
                                                           ^
                                                           |
                                                        .__proto__
                                              prototype  |
btnA                                             |       |          btnC
 \                     +------ .__proto__ ---> Object ---+           /
  \                    |                         ^                  /
   \                   |                      .__proto__           /
    \                  |                         |                /
+-------- <Object> ----x---+                 +---x---- <Object>-------+
|                          |  \            / |                        |
|  .text                   |   \          /  | .text                  |
|  .backgroundColor        |     STRUCTURE   | .backgroundColor       |
|  .textColor              |   /          \  | .textColor             |
|                          |  /            \ |                        |
+--------------------------+                 +------------------------+



















                     
btnA                
 \                  
  \                   
   \                  
    \                  
+-------- <Object> ----x---+                
|                          |              
|  .text                   <--------------------------------------------+           
|  .backgroundColor        |                                            |   
|  .textColor              |                                            |
|                          |                                            |
|  .render ------------------------------------> +---------- <Function> |-----------------+  
|                          |                  +> |                      |                  |
+--------------------------+                 /   | html <-`<button>${this.text}</button>` |
                                            /    |               v                        |
                                           /     +--------------return--------------------+
                     +----------------------                     v
let html = btnA.render() <------------------------------------ `button`
    ^          |
    -----------+


    