const GraphiqlView = require('./graphiql-view');

const CompositeDisposable = require('atom').CompositeDisposable;

module.exports = {
  graphiqlView: null,
  modalPanel: null,
  subscriptions: null,

  activate: function(state) {
    this.graphiqlView = new GraphiqlView(state.graphiqlViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.graphiqlView.getElement(),
      visible: false
    });

    this.subscriptions = new CompositeDisposable;
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'graphiql:toggle': (function(_this) {
        return function() {
          return _this.toggle();
        };
      })(this)
    }));
  },

  deactivate: function() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.graphiqlView.destroy();
  },

  serialize: function() {
    return {
      graphiqlViewState: this.graphiqlView.serialize()
    };
  },

  toggle: function() {
    console.log('Graphiql was toggled!');
    if (this.modalPanel.isVisible()) {
      this.modalPanel.hide();
    } else {
      this.modalPanel.show();
    }
  }
};
