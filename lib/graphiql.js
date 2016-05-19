module.exports = {
  subscriptions: null,

  activate(state) {
    atom.workspace.addOpener(this.customOpener.bind(this))

    atom.commands.add('atom-workspace', {
      'graphiql:toggle': () => {
        atom.workspace.open("graphiql:///")
      }
    })
  },

  serialize() {
    return {}
  },

  customOpener(uri) {
    if (uri.startsWith('graphiql:')) {
      // openGraphiql()
    }
  }
}
