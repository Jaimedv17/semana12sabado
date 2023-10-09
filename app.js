
const inputDni = document.getElementById("inputDni");
const inputPassword = document.getElementById("inputPassword");
const buttonEnviar = document.getElementById("buttonEnviar");


const container = document.querySelector(".container")
const menu = document.querySelector(".menu")
const mensaje = document.querySelector(".mensaje")


let cuentas = [
    {dni: 74523149, 
     saldo: 200, 
     password: 'helloworld' 
    },
    {dni: 74427820, 
    saldo: 600, 
    password: 'jaime17' 
    },
    {dni: 78459325, 
    saldo: 67, 
    password: 'helloworId'
    }
];


buttonEnviar.addEventListener("click", (e)=>{
    e.preventDefault()
    for(let i = 0; i < cuentas.length; i++){
        if (inputDni.value == cuentas[i].dni && inputPassword.value == cuentas[i].password){
            container.style.display = "none"
            menu.style.display = "block"
        }
        else {
            mensaje.style.display = "block"
        }
    }
})

//........................CONSULTAR MONTO............................

const buttonConsultarMonto = document.getElementById("buttonConsultarMonto")
const consultarSaldo = document.querySelector(".consultarSaldo");

buttonConsultarMonto.addEventListener("click", () =>{
    menu.style.display = "none"
    consultarSaldo.style.display = "block"
})

const buttonMenu = document.getElementById("buttonMenu")
const buttonInicio = document.getElementById("buttonInicio")


buttonMenu.addEventListener("click", () =>{
    consultarSaldo.style.display = "none"
    menu.style.display = "block"
})

buttonInicio.addEventListener("click", () =>{
    consultarSaldo.style.display = "none"
    container.style.display = "block"
})

//.......................INGRESAR MONTO..............................

const ingresarMonto = document.querySelector(".ingresarMonto")
const buttonIngresarMonto = document.getElementById("buttonIngresarMonto")


buttonIngresarMonto.addEventListener("click", () =>{
    menu.style.display = "none"
    ingresarMonto.style.display = "block"
})

const saldoActual = document.getElementById("saldoActual");
const inputSaldoIngresar = document.getElementById("inputSaldoIngresar");
const saldoIngresado = document.getElementById("saldoIngresado");
const agregarMonto = document.getElementById("agregarMonto");
const mensaje2 = document.querySelector(".mensaje2")



    agregarMonto.addEventListener("click", (e)=>{
        e.preventDefault();
        
        const actual = Number(saldoActual.value);
        const ingreso = Number(inputSaldoIngresar.value);
        console.log (ingreso)

        const suma =  actual + ingreso;

        if (suma <= 990){
            saldoActual.value = suma
        } 

        else {
            mensaje2.style.display = "block"
        }
    })

    agregarMonto.addEventListener("click", (e)=>{
        e.preventDefault();
        
        const ingreso = Number(inputSaldoIngresar.value);
        const ingresado = Number(saldoIngresado.value);

        const suma2 = ingresado + ingreso

        if (suma2 <= 990){
            saldoIngresado.value = suma2
        } 
    })

    const buttonMenu3 = document.getElementById("buttonMenu3");
    const buttonInicio3 = document.getElementById("buttonInicio3");

    buttonMenu3.addEventListener("click", () =>{
        ingresarMonto.style.display = "none"
        menu.style.display = "block"
    })
    buttonInicio3.addEventListener("click", () =>{
        ingresarMonto.style.display = "none"
        container.style.display = "block"
    })

    
//......................RETIRAR MONTO.................................


const buttonRetirarMonto = document.getElementById("buttonRetirarMonto");
const retirarMonto = document.querySelector(".retirarMonto");

buttonRetirarMonto.addEventListener("click", () =>{
    menu.style.display = "none"
    retirarMonto.style.display = "block"
})

const  buttonRestarMonto = document.getElementById("buttonRestarMonto");
const  saldoActua2 = document.getElementById("saldoActua2");
const  mensaje3 = document.querySelector(".mensaje3");
const  inputSaldoRetirado = document.getElementById("inputSaldoRetirado");
const  saldoRetirado = document.getElementById("saldoRetirado");

buttonRestarMonto.addEventListener("click", (e) =>{
    e.preventDefault();
    const actualNunero = Number(saldoActua2.value);
    const  retiroNumero = Number(inputSaldoRetirado.value);

    const resta = actualNunero - retiroNumero

    if (resta >= 10){
        saldoActua2.value = resta
    }
    else{
        mensaje3.style.display = "block"
    }
})

buttonRestarMonto.addEventListener("click", (e) =>{
    e.preventDefault();
    const inputRetidaro = Number(saldoRetirado.value);
    const retiroNumero = Number(inputSaldoRetirado.value);

    const retirado = inputRetidaro + retiroNumero

    if (retirado > 0){
        saldoRetirado.value = retirado
    }

})


const buttonMenu4 = document.getElementById("buttonMenu4");
const buttonInicio4 = document.getElementById("buttonInicio4");

buttonMenu4.addEventListener("click", () =>{
    retirarMonto.style.display = "none"
    menu.style.display = "block"
})
buttonInicio4.addEventListener("click", () =>{
    retirarMonto.style.display = "none"
    container.style.display = "block"
})


















