# Meine Website zum Teilen von Lernzetteln

## How to Use

Ihr möchtet selber Lernzettel schreiben und hinzufügen? Ganz einfach!

Die Lernzettel sind unter: app/lernzettel/posts/

Sie sind mithilfe von Markdown geschrieben. Genauso wie diese README!! 
Markdown ist sehr einfach zu verstehen, lest euch einfach den Quellcode von anderen Lernzetteln durch.

### Wie erstelle ich jetzt selber Lernzettel?

1. Klont das Projekt
   `git clone https://github.com/jph-sw/lernzettel.git`
2. Geht unter `app/lernzettel/posts`, denn dort findet ihr die bereits erhaltenen Lernzettel
3. Erstellt eine neue Datei mit dem Namen `euerThema.md`

**CAUTION**

Am Anfang der Datei **muss** das folgende stehen:
```
---
title: "Python Grundlagen: Einfacher geht's nicht!"
publishedAt: "2024-04-26"
summary: "Verstehe Python ganz leicht in nur 5-10 Minuten!"
---
```

Ersetzt das mit euren Daten, aber achtet darauf das Datum richtig zu formatieren `yyyy-mm-dd`. Außerdem müssen die `---` **beide** da sein!


### Wie lade ich das jetzt hoch?

Dafür müsst ihr einen neuen Branch erstellen. eg. Jean-OSI-Modell.
Eure Veränderungen im Branch committen und eine Pull-Request erstellen.

Wer von Git keine Ahnung hat soll mich einfach anschreiben.