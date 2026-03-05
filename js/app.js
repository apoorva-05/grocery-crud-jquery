var items = groceryItems;

// Render App
function render() {
  var $app = $("#app");
  $app.empty();

  var $formElement = createForm();
  var $itemsElement = createItems(items);

  // Clear button
  var $clearBtn = $('<button class="clear-btn">Clear All</button>');

  $clearBtn.on("click", function () {
    items = [];
    render();
  });

  $app.append($formElement);
  $app.append($itemsElement);
  $app.append($clearBtn);
}

// Initialize App
$(document).ready(function () {
  render();
});

// Toggle Completed
function editCompleted(itemId) {
  items = $.map(items, function (item) {
    if (item.id === itemId) {
      return $.extend({}, item, { completed: !item.completed });
    }
    return item;
  });
  render();
}

// Remove Item
function removeItem(itemId) {
  items = $.grep(items, function (item) {
    return item.id !== itemId;
  });
  render();

  setTimeout(function () {
    alert("Item Deleted Successfully!");
  }, 0);
}

// Generate unique ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Add Item
function addItem(itemName) {
  var newItem = {
    name: itemName,
    completed: false,
    id: generateId(),
  };

  items.push(newItem);
  render();

  setTimeout(function () {
    alert("Item Added Successfully!");
  }, 0);
}
