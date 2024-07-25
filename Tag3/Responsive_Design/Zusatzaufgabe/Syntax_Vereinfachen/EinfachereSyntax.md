# Vereinfachen

## Wie kannst du folgende Regel weniger umständlich schreiben?

`
.container {
    display: grid;
    grid-template-columns: 80px 80px 80px 80px 80px 80px 80px;
    grid-template-rows: 200px 200px 200px auto 200px 200px 200px 200px 200px 200px;
}
`

## Lösung

`
.container {
    display: grid;
    grid-template-columns: repeat(7, 80px);
    grid-template-rows: repeat(3, 200px) auto repeat(6, 200px);
}

`
