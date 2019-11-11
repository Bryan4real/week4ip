
let total = 0;
let checkOut = 0;
let nOrder = 0;
function GetPizza(name, size, crust, topping, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$("button.smt").click(function(event) {
  let psize = $(".size option:selected").val();
  let pcrust = $(".crust option:selected").val();
  let ptopping = $(".topping option:selected").val();



  total = parseInt(psize) + parseInt(pcrust) + parseInt(ptopping);
  nOrder = +1;
  checkOut = checkOut + total;

  $("#nOrder").html(nOrder);
  $("#sPizza").html($(".size option:selected").val());
  $("#cPizza").html($(".crust option:selected").val());
  $("#tPizza").html($(".topping option:selected").val());
  $("#totals").html(total);

  $("button.addPizza").click(function() {
    let psize = $(".size option:selected").val();
    let pcrust = $(".crust option:selected").val();
    let ptopping = $(".topping option:selected").val();

    checkOut = checkOut + total;
    nOrder = ++;
    newOrder = new GetPizza(name, psize, pcrust, ptopping, total);
    $("#orders").append(
      `<tr><td id="nOrder">` +
        nOrder +
        `</td><td id="sPizza"> ` +
        newOrder.size +
        `</td><td id="cPizza"> ` +
        newOrder.crust +
        `</td><td id="tPizza"> ` +
        newOrder.topping +
        `</td><td id="totals"> ` +
        newOrder.total +
        `</td></tr>`
    );
    });

  event.preventDefault();
});
