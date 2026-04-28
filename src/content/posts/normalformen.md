---
title: "Normalformen für dumme"
description: "Normalformen kurz erklärt"
date: 2026-04-28
---

Ich habe oft das Problem, dass die drei Normalformen schlecht und unverständlich erklärt werden.
Die Unterschiede zwischen ihnen werden oft **nicht klar**!

Die drei Normalformen sind dafür da, um zu Unterscheiden wie gut eine Datenbank aufgebaut ist.

## Was ist "gut"?

### Redundanz
Somit das Hauptziel der Normalformen ist es Redundanzen zu vermeiden. Also, wenn wir mehrmals das gleiche in einer Tabelle/Spalte/Zeile stehen haben.
Dies verbraucht Speicherplatz und provoziert **Anomalien** (insbesondere "Bearbeitungsanomalien").
Deshalb versuchen wir alles möglichst **atomar** zu halten.

### Kardinalitäten
Beschreiben die Anzahl der möglichen Verknüpfungen zwischen Entitäten.

Es ist manchmal garnicht so leicht Kardinalitäten in komplexen Tabellen zu berücksichtigen. <- Dabei helfen die Normalformen

- 1:1 (eins zu eins)
- 1:N (eins zu viele)
- N:M (viele zu viele)


## 1. Normalform

Die erste Normalforma versucht alle Spalten möglichst atomar zu halten.

**Beispiel**

| Name | Adresse |
|------|---------|
|Thomas Müller|Berliner Straße 32, 31278 Berlin|

wird dann zu

| Vorname | Nachname | Straße | Hausnummer | Plz | Stadt |
|---------|----------|--------|------------|-----|-------|
|Thomas|Müller|Berliner Straße|32|31278|Berlin|

Außerdem sorft die 1NF dafür, dass Zeilen jetzt klar identifizierbar werden durch kombination aus verschiedenen Spalten.

## 2. Normalform

Die zweite Normalform baut auf der ersten auf und löst ein bestimmtes Problem: **partielle Abhängigkeiten**.

**Was ist eine partielle Abhängigkeit?**

Manchmal hat eine Tabelle einen zusammengesetzten Primärschlüssel, also einen Schlüssel, der aus mehreren Spalten besteht. Das Problem entsteht, wenn ein anderes Attribut nur von *einem Teil* dieses Schlüssels abhängt, nicht vom ganzen.

Stell dir vor, du hast eine Tabelle mit dem Primärschlüssel `StudentID + KursID`. Wenn `StudentName` nur von `StudentID` abhängt (und nicht von `KursID`), dann ist das eine partielle Abhängigkeit. Der Name hat eigentlich nichts mit dem Kurs zu tun, er "klebt" nur unlogisch mit dran.

Die 2NF sagt: **Jede Spalte muss vom gesamten Primärschlüssel abhängen, nicht nur von einem Teil davon.**

Als Nebeneffekt werden dadurch auch N:M-Beziehungen durch sogenannte **Lookup-Tabellen** aufgelöst, also Tabellen, die nur dazu da sind, zwei andere Tabellen zu verbinden.

**Beispiel**

| StudentID | KursID | StudentName | KursName |
|-----------|--------|-------------|----------|
| 1 | 101 | Anna | Mathe |
| 1 | 102 | Anna | Deutsch |
| 2 | 101 | Ben | Mathe |

Der Primärschlüssel ist `StudentID + KursID`. Aber `StudentName` hängt nur von `StudentID` ab und `KursName` nur von `KursID`, beides partielle Abhängigkeiten. Das wird aufgeteilt in drei Tabellen:

**Studenten**

| StudentID | StudentName |
|-----------|-------------|
| 1 | Anna |
| 2 | Ben |

**Kurse**

| KursID | KursName |
|--------|----------|
| 101 | Mathe |
| 102 | Deutsch |

**Student_Kurs** *(Lookup-Tabelle)*

| StudentID | KursID |
|-----------|--------|
| 1 | 101 |
| 1 | 102 |
| 2 | 101 |

## 3. Normalform

Die dritte Normalform baut auf der zweiten auf und löst **transitive Abhängigkeiten**.

**Was ist eine transitive Abhängigkeit?**

Das klingt komplizierter als es ist. "Transitiv" bedeutet so viel wie "indirekt". Das Problem tritt auf, wenn eine Nicht-Schlüssel-Spalte von einer anderen Nicht-Schlüssel-Spalte abhängt, statt direkt vom Primärschlüssel.

Ein Beispiel zum Vorstellen: `BestellID` → `KundenID` → `KundenName`. Der Kundenname hängt also nicht direkt von der Bestellnummer ab, sondern erst von der KundenID, die wiederum von der BestellID abhängt. Das ist die Kette: die transitive Abhängigkeit.

Das Problem dabei: Wenn sich der Kundenname ändert, muss man ihn in jeder einzelnen Bestellung anpassen. Das ist fehleranfällig und erzeugt Redundanz.

Die 3NF sagt: **Keine Nicht-Schlüssel-Spalte darf von einer anderen Nicht-Schlüssel-Spalte abhängen.**

**Beispiel**

| BestellID | KundenID | KundenName | KundenStadt | KundenPLZ |
|-----------|----------|------------|-------------|-----------|
| 1 | 10 | Müller | Berlin | 10115 |
| 2 | 10 | Müller | Berlin | 10115 |
| 3 | 11 | Schmidt | Hamburg | 20095 |

`KundenName`, `KundenStadt` und `KundenPLZ` hängen von `KundenID` ab, nicht direkt von `BestellID`. Die Kundendaten wiederholen sich in jeder Zeile, obwohl sie nichts mit der Bestellung selbst zu tun haben. Lösung: in zwei Tabellen aufteilen.

**Bestellungen**

| BestellID | KundenID |
|-----------|----------|
| 1 | 10 |
| 2 | 10 |
| 3 | 11 |

**Kunden**

| KundenID | KundenName | KundenStadt | KundenPLZ |
|----------|------------|-------------|-----------|
| 10 | Müller | Berlin | 10115 |
| 11 | Schmidt | Hamburg | 20095 |






