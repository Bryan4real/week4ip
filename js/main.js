
let total = 0;
let checkOut = 0;

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

  let nOrder = 0;

  total = parseInt(psize) + parseInt(pcrust) + parseInt(ptopping);
  nOrder = +1;
  checkOut = checkOut + total;

  $("#nOrder").html(nOrder);
  $("#sPizza").html($(".size option:selected").val());
  $("#cPizza").html($(".crust option:selected").val());
  $("#tPizza").html($(".topping option:selected").val());
  $("#totals").html(total);

  $("button.addPizza").click(function(event) {
    let psize = $(".size option:selected").val();
    let pcrust = $(".crust option:selected").val();
    let ptopping = $(".topping option:selected").val();

    total = parseInt(psize) + parseInt(pcrust) + parseInt(ptopping);

    checkOut = checkOut + total;
    nOrder = nOrder +1;
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
    event.preventDefault();
});

  $("button.checkout").click(function(event) {
  $("button.checkout").hide();
  $("button.addPizza").hide();
  $("button.deliver").slideDown(1000);
  $("#totalPizza").append("Your bill is ksh. " + checkOut);

  event.preventDefault();
});

  event.preventDefault();

  // home button
$("button.deliver").click(function() {
  $(".pizzatable").hide();
  $(".choice h2").hide();
  $(".delivery").slideDown(1000);
  $("#addedprice").hide();
  $("button.deliver").hide();
  $("#totalpizza").hide();

  let deliveryAmount = checkOut + 150;
  $("#bTotal").append(
    "Your bill plus delivery fee is: " + deliveryAmount
  );
});


$("button#final-order").click(function(event) {
  event.preventDefault();
  $("#pizzatotal").hide();
  $(".delivery").hide();
  $("button#final-order").hide();
  let deliceryAmount = checkoutTotal + 150;

  let person = $("input#name").val();
  let phone = $("input#phone").val();
  let location = $("input#location").val();

  if (
    $("input#name").val() &&
    $("input#phone").val() &&
    $("input#location").val() != ""
  ) {
    $("#finallmessage").append(
      person +
        ", We have recieved your order and the delivery wil be made  at  " +
        location +
        ". Prepare ksh. " +
        deliceryAmount
    );
    $("#totalbill").hide();
    $("#finallmessage").slideDown(1200);
  } else {
    alert("Please fill in the deliver details");
    $(".delivery").show();
    $("button#final-order").show();
  }
});


});
