;(function () {
  'use strict'

  var hljs = require('highlight.js/lib/highlight')

  // Customization: fjernet en mengde språk som ikke benyttes
  // (evnt liten sannsynlighet for at kommer til å bli brukt)
  hljs.registerLanguage('asciidoc', require('highlight.js/lib/languages/asciidoc'))
  hljs.registerLanguage('java', require('highlight.js/lib/languages/java'))
  hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
  hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
  hljs.registerLanguage('kotlin', require('highlight.js/lib/languages/kotlin'))
  hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'))
  hljs.registerLanguage('none', require('highlight.js/lib/languages/plaintext'))
  hljs.registerLanguage('properties', require('highlight.js/lib/languages/properties'))
  hljs.registerLanguage('python', require('highlight.js/lib/languages/python'))
  hljs.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'))
  hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'))
  hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
  hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'))

  // Customization: legger til diverse keywords runtime tilpasset pseudokoden i den gamle dok'en
  // https://github.com/highlightjs/highlight.js/issues/1271
  // Note: leading space
  hljs.getLanguage('ruby').keywords += ' HVIS ELLER ELLERS IKKE SLUTT START END KALL'
  hljs.getLanguage('ruby').keywords += ' LOOP FOR SETT RETURN RETURNER SÅ KAST'

  hljs.getLanguage('javascript').keywords += ' HVIS ELLER ELLERS IKKE SLUTT START END KALL'
  hljs.getLanguage('javascript').literal += ' SANN USANN TRUE FALSE NULL null'

  ;[].slice.call(document.querySelectorAll('pre code.hljs[data-lang]')).forEach(function (node) {
    hljs.highlightBlock(node)
  })
})()
