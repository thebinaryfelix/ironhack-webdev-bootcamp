$(() => {
  const queue = new QueueDataStructure();

  const addToQueue = () => {
    let valueToQueue = $('#input-element-queue').val();

    if (!valueToQueue) {
      alert('Please input a value to queue!');
    } else if (queue.enqueue(valueToQueue)) {
      valueToQueue = `<p>${valueToQueue}</p>`;
      const freeCell = queue.queueControl.length - 1;
      $('.queue-elements > ul > li')
        .eq(freeCell)
        .addClass('occupied')
        .html(valueToQueue);
      $('#queue-top').removeClass('over');
    } else {
      $('#queue-bottom')
        .html('<p>Queue Overflow</p>')
        .addClass('over')
        .removeClass('hidden');
    }
    $('#input-element-queue').val('');
  };

  const removeFromQueue = () => {
    if (!queue.dequeue()) {
      $('#queue-top')
        .html('<p>Queue Underflow</p>')
        .addClass('over');
    } else {
      $($('.queue-elements > ul').find('.occupied')[0])
        .removeClass('occupied')
        .empty();

      $('#queue-bottom')
        .html('<p>Queue Overflow</p>')
        .removeClass('over')
        .addClass('hidden');
    }
  };

  // REMOVE ELEMENT FROM queue
  $('#take-element-queue').on('click', function () {
    removeFromQueue();
  });
  // ADD ELEMENT TO queue
  $('#add-element-queue').on('click', function () {
    addToQueue();
  });
  // CLEAR INPUT FIELD
  $('#queue-clear-input').on('click', function () {
    $('#input-element-queue').val('');
  });
});