Number("10")        // 10
Number("10.5")      // 10.5
Number("texto")     // NaN
Number(undefined)   // NaN
Number(true)        // 1
Number(false)       // 0
Number(null)        // 0

parseInt("10")         // 10
parseInt("10abc")      // 10
parseInt("abc10")      // NaN
parseInt("10.5")       // 10  (só pega a parte inteira)
parseFloat("10.5")     // 10.5

// | Função                | Significado fácil                                     | Exemplo                     |
// | --------------------- | ----------------------------------------------------- | --------------------------- |
// | `Number.isNaN(valor)` | “Ele **é literalmente** o NaN?”                       | `Number.isNaN(NaN) // true` |
// | `isNaN(valor)`        | “Ele **vira NaN** se eu tentar converter pra número?” | `isNaN("Ana") // true`      |

// Exemplo 1
Number.isNaN(NaN)    // true
isNaN(NaN)           // true

// Exemplo 2
Number.isNaN('Ana')  // false (não é NaN de verdade)
isNaN('Ana')         // true  (vira NaN se tentar converter pra número)

// Exemplo 3
Number.isNaN(10)     // false
isNaN(10)            // false (10 é número válido)

// Exemplo 4
Number.isNaN('10')   // false ('10' é string, não é NaN)
isNaN('10')          // false ('10' vira número 10, não é NaN)

// Exemplo 5
Number.isNaN(undefined) // false
isNaN(undefined)        // true (undefined vira NaN se tentar converter)
