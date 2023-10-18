


## Logical ops JS: &&, ||, ! - shortcuts / shortcircuits

exp1 && exp2  : 2 x true  --> true  | ~ *   1 * 1 --> 1
exp1 || exp2  : 2 x false --> false | ~ +   0 + 0 --> 0
      ! exp   :     false --> true  | ~         0 --> 1


exp1 && exp2 && exp3 && exp4...
      |
      v
      r1     && exp3
              |
              v
              r2     && exp4...







