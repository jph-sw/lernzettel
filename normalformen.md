---
title: "Normalformen"
description: "Normalformen kurz erklärt"
date: "April 28 2026"
---

Ich habe oft das Problem, dass die drei Normalformen schlecht und unverständlich erklärt werden.
Die Unterschiede zwischen ihnen werden oft **nicht klar**!

Die drei Normalformen sind dafür da, um zu Unterscheiden wie gut eine Datenbank aufgebaut ist.

## Was ist "gut"?

**Redundanz**
Somit das Hauptziel der Normalformen ist es Redundanzen zu vermeiden. Also, wenn wir mehrmals das gleiche in einer Tabelle/Spalte/Zeile stehen haben.
Dies verbraucht Speicherplatz und provoziert **Anomalien** (insbesondere "Bearbeitungsanomalien").
Deshalb versuchen wir alles möglichst **atomar** zu halten.

**Kardinalitäten**
Beschreiben die Anzahl der möglichen Verknüpfungen zwischen Entitäten.

Es ist manchmal garnicht so leicht Kardinalitäten in komplexen Tabellen zu berücksichtigen. <- Dabei helfen die Normalformen

- 1:1 (eins zu eins)
- 1:N (eins zu viele)
- N:M (viele zu viele)


## 1. Normalform

Die erste Normalforma versucht alle Spalten möglichst atomar zu halten.

**Beispiel**

| Adresse |
|---------|
|Berliner Straße 32, 31278 Berlin|

wird dann zu

| Straße | Hausnummer | Plz | Stadt |
|--------|------------|-----|-------|
|Berliner Straße|32|31278|Berlin|

Außerdem sorft die 1NF dafür, dass Zeilen jetzt klar identifizierbar werden durch kombination aus verschiedenen Spalten.

## 2. Normalform








