// manipulating DOM elements by class
const readDetails = item => {
  $(".categoryTable").text(item.category);
  $(".nameTable").text(item.item);
  $(".typeTable").text(item.type);
  $(".brandTable").text(item.brand);
  $(".qtyTable").text(item.qty);
}

$(".itemDetails").on("click", function(event) {
  // preventing default behavior of button on click events
  event.preventDefault();

  // storing id, from the data-id attr which is created on render
  const id = $(this).data("id");
 
  // ajax get request for given id, object response passed along to updateDetails function
  $.get(`./api/groceries/${id}`, (response) => {
    return readDetails(response);
  });
})