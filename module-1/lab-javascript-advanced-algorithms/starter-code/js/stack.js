$(() => {
  const stack = new StackDataStructure();

  const addToStack = () => {
    let valueToStack = $('#input-element-stack').val();

    if (!valueToStack) {
      alert('Please input a value to stack!');
    } else if (stack.push(valueToStack)) {
      valueToStack = `<p>${valueToStack}</p>`;
      const freeCell = stack.MAX_SIZE + 1 - stack.stackControl.length;
      $('.stack-elements > ul > li')
        .eq(freeCell)
        .addClass('occupied')
        .html(valueToStack);
      $('#stack-bottom').removeClass('over');
    } else {
      $('#stack-top')
        .html('<p>Stack Overflow</p>')
        .addClass('over')
        .removeClass('hidden');
    }
    $('#input-element-stack').val('');
  };

  const removeFromStack = () => {
    if (!stack.pop()) {
      $('#stack-bottom')
        .html('<p>Stack Underflow</p>')
        .addClass('over');
    } else {
      const freeCell = stack.MAX_SIZE - stack.stackControl.length;
      $('.stack-elements > ul > li')
        .eq(freeCell)
        .removeClass('occupied')
        .empty();

      $('#stack-top')
        .html('<p>Stack Overflow</p>')
        .removeClass('over')
        .addClass('hidden');
    }
  };

  // REMOVE ELEMENT FROM STACK
  $('#take-element-stack').on('click', function () {
    removeFromStack();
  });
  // ADD ELEMENT TO STACK
  $('#add-element-stack').on('click', function () {
    addToStack();
  });
  // CLEAR INPUT FIELD
  $('#stack-clear-input').on('click', function () {
    $('#input-element-stack').val('');
  });
});
