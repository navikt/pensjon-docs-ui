# pensjon-docs-ui
Antora UI (modifisert) for [pensjon-docs-site](https://github.com/navikt/pensjon-docs-site)

## Modifikasjoner

- **highlight.js**
  - Legger til ymse keywords + literals for å støtte eksisterende pseudokode.
    - Ruby er hovedsaklig angitt som source-language, da den gir best match i asciidoc-plugin preview (som ikke benytter highlight.js, men coderay)
  - Fjerner en bråte språk som ikke er nødvendige
