$(document).ready(function() {

  var subtotal = 0;
  var tax = .029;
  var totalTax = 0;
  var total = 0;

  $('.porterhouse').on('click', function(event) {
    $('.myTable').append('<tr><td>Porterhouse</td><td class="price" data-value="24.99">$24.99</td></tr>');
    let price = $('.porterhouse').data('value');
    subtotal += price;
    totalTax = subtotal * tax;
    total = subtotal + totalTax;
    $('.subtotal').empty().text('$'+ subtotal.toFixed(2));
    $('.tax').empty().text('$'+ totalTax.toFixed(2));
    $('.total').empty().text('$'+ total.toFixed(2));
  })

  $('.ribeye').on('click', function(event) {
    $('.myTable').append('<tr><td>Ribeye</td><td class="price">$22.99</td></tr>')
    let price = $('.ribeye').data('value');
    subtotal += price;
    totalTax = subtotal * tax;
    total = subtotal + totalTax;
    $('.subtotal').empty().text('$'+ subtotal.toFixed(2));
    $('.tax').empty().text('$'+ totalTax.toFixed(2));
    $('.total').empty().text('$'+ total.toFixed(2));
  })

  $('.strip').on('click', function(event) {
    $('.myTable').append('<tr><td>New York Strip</td><td class="price">$18.99</td></tr>');
    let price = $('.strip').data('value');
    subtotal += price;
    totalTax = subtotal * tax;
    total = subtotal + totalTax;
    $('.subtotal').empty().text('$'+ subtotal.toFixed(2));
    $('.tax').empty().text('$'+ totalTax.toFixed(2));
    $('.total').empty().text('$'+ total.toFixed(2));
  })

  $('.tenderloin').on('click', function(event) {
    $('.myTable').append('<tr><td>Tenderloin</td><td class="price">$29.99</td></tr>');
    let price = $('.tenderloin').data('value');
    subtotal += price;
    totalTax = subtotal * tax;
    total = subtotal + totalTax;
    $('.subtotal').empty().text('$'+ subtotal.toFixed(2));
    $('.tax').empty().text('$'+ totalTax.toFixed(2));
    $('.total').empty().text('$'+ total.toFixed(2));
  })

// Clear all function

  function clearAll() {
    $('.myTable').empty();
    $('.subtotal').empty();
    $('.tax').empty();
    $('.total').empty();
    $('#name').val('');
    $('#phone').val('');
    $('#address').val('');
  }

  $('#order-button').on('click', function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var phone = $('#phone').val();
    var address = $('#address').val();
    if (name.length < 1) {
      Materialize.toast("Please enter your first and last name", 4000);
    }
    else if (phone.length < 10) {
      Materialize.toast("Please enter a valid phone number", 4000)
    }
    else if (address.length < 1) {
      Materialize.toast("Please enter a valid address", 4000);
    } else {
      Materialize.toast("Thank you for your order!", 4000);
      clearAll();
    }
  })
});
