module.exports = (function() {
  function GraphiqlView(serializedState) {
    var message;
    this.element = document.createElement('div');
    this.element.classList.add('graphiql');
    message = document.createElement('div');
    message.textContent = "The Graphiql package is Alive! It's ALIVE!";
    message.classList.add('message');
    this.element.appendChild(message);
  }

  GraphiqlView.prototype.serialize = function() {};

  GraphiqlView.prototype.destroy = function() {
    this.element.remove();
  };

  GraphiqlView.prototype.getElement = function() {
    this.element;
  };

  return GraphiqlView;

})();
