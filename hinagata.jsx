function main(thisObj) {
  var mainWin = (thisObj instanceof Panel) ? thisObj : new Window("palette", scriptname, undefined, { resizeable: true });

  var btn = mainWin.add('button', undefined, 'execute');

  mainWin.onResize = function () {
    mainWin.layout.resize();
  }

  mainWin.layout.layout();

  btn.onClick = function () {
    try {
      alert('test')
    } catch (e) {
      alert(e.message + e.line)
    }
  }
}
main(this);
