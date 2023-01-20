const ver = document.querySelector(".first");
const noVer = document.querySelector(".hidden");
const usuario = document.querySelector(".mail").value;

document.querySelector(".entrar").addEventListener("click", () => { 
    document.querySelector(".comprador").innerHTML = "Bienvenido " + usuario   
    document.querySelector(".first"),ver.style.display = "block";
    document.querySelector(".hidden"),noVer.style.display = "none";
});


const dolarMep = [{}, { id: 1, nombre: "MEP", precio: 305 }];
const enJSON = JSON.stringify(dolarMep);
sessionStorage.setItem("dolarMep", enJSON);

let comprarMep = document.querySelector("#input1")

comprarMep.addEventListener("input", () => {
    if (comprarMep.value >= 305) {
        compra = Math.trunc(comprarMep.value / dolarMep[1].precio);
        document.querySelector("#total").innerHTML = compra + " dólares MEP";
    } else if (comprarMep.value <= 305)
        document.querySelector("#total").innerHTML = "No tiene suficiente dinero para comprar";
    if (comprarMep.value >= 61100)
        document.querySelector("#total").innerHTML = "No puede comprar mas de 200 Dólares MEP";
    if (comprarMep.value >= 61100)
        Swal.fire('No puede comprar mas de 200 dólares MEP')


});

let terminarCompra = document.querySelector(".btn")

terminarCompra.addEventListener("click", () => {
    if (comprarMep.value <= 61100) {
        document.querySelector("#billetera").innerHTML = compra + " dólares MEP"
        Swal.fire({
            title: '¿Esta seguro que quiere comprar?',
            text: "Recuerde que tiene una compra por sesión",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero comprar!'
        }).then((result) => {
            if (result.isConfirmed) {
                const button = document.createElement('button');
                button.type = 'button';
                button.innerText = 'retirar dólares y reiniciar compra';
                document.body.appendChild(button)
                button.addEventListener("click", () => {
          let timerInterval;
          Swal.fire({
            title: "Se está transfiriendo su dinero!",
            html: "Se reiniciara la aplicación en <b></b> segundos.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
          location.reload();
        }),
          Swal.fire(
            (document.querySelector("#billetera").innerHTML =
              "Usted tiene " + compra + " dolares Mep"),
            "Usted a Comprado " + compra + " Dólares Mep",
            (terminarCompra.disabled = true)
          );
      } else if (true) {
        document.querySelector("#billetera").innerHTML =
          "Usted cancelo la compra.";
      }
    });
  }
});
