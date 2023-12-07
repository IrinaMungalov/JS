




## Javascript / OOP / Object type/class (tools for operating on objects)


+----------- Object ------------+
|                               |
|   // tools                    |
|   ...                         |
|   .create()                   |
|   .defineProperties()         |
|   .defineProperty()           |
|   ...                         |
|   .freeze()                   |
|   .seal()                     |
|   ...                         |
|   .getPrototypeOf()           |
|   .setPrototypeOf()           |
|   ...                         |
|                               |
|   +----- .prototype -------+  |
|   |                        |  |
|   | // inherittable props  |  |
|   | .customProperty        |  |
|   | ...                    |  |
|   |                        |  |
|   +------------------------+  |
|                               |
+-------------------------------+







Button
   \
    \
+----------- <Object> ------------+
|                                 |
|  .prototype                     |
|        \                        |
|  +---------------------------+  |
|  |.text: 'put some text here'|  |
|  +---------------------------+  |
|                                 |
+---------------------------------+
                  ^          ^
                  |          |
btnOk          prototype    prototype        btnCancel
  \               |          |               /
+----- <Object> ----+      +----- <Object> ----+
|                   |      |                   |
|   .text: 'Ok'     |      |  .text: 'Cancel'  |
|                   |      |                   |
+-------------------+      +-------------------+

! read/get  ---> search :
! write/set ---> NO search!
! override




Type
  .prototype
  {
    template
  }
       ^
       |
       |
obj    |
  Object.getPrototypeOf()







+---------- Array ----------------+
|                                 |
|  // tools                       |
|  ...                            |
|  +---- .prototype ------+       |
|  |                      |       |
|  | // inheritable props |       |
|  | ...                  |       |
|  |                      |       |
|  +----------------------+       |
|            ^                    |
+------------|--------------------+
             |
             |
arr          |
  \          |
+--- <Array>-x-+
|              |
|      []      |
|              |
+--------------+




Object
   ^
   |
Array
   ^
   |
  arr





+---------- Object----------------+
|                                 |
|  // tools                       |
|  ...                            |
|  +---- .prototype ------+       |
|  |                      |       |
|  | // inheritable props |       |
|  | ...                  |       |
|  |                      |       |
|  +----------------------+       |
|            ^                    |
+------------|--------------------+
             |
             |
arr          |
  \          |
+---<Object>-x-+
|              |
|      {}      |
|              |
+--------------+