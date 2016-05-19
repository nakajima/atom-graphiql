GraphiqlView = require './graphiql-view'
{CompositeDisposable} = require 'atom'

module.exports = Graphiql =
  graphiqlView: null
  modalPanel: null
  subscriptions: null

  activate: (state) ->
    @graphiqlView = new GraphiqlView(state.graphiqlViewState)
    @modalPanel = atom.workspace.addModalPanel(item: @graphiqlView.getElement(), visible: false)

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 'graphiql:toggle': => @toggle()

  deactivate: ->
    @modalPanel.destroy()
    @subscriptions.dispose()
    @graphiqlView.destroy()

  serialize: ->
    graphiqlViewState: @graphiqlView.serialize()

  toggle: ->
    console.log 'Graphiql was toggled!'

    if @modalPanel.isVisible()
      @modalPanel.hide()
    else
      @modalPanel.show()
