const eventHandler = cb =>
  setTimeout(() => {
    console.log('event => ',cb);
    eventHandler(cb + 1);
  }, 3000);
  eventHandler(1);