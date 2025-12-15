---
title: "LF08: Lernzettel für die Arbeit am 2024-09-26"
description: ""
date: 2024-09-25
---

# Datenbanken

## Anomalien

- **Einfügeanomalie**: Schwierigkeit, neue Daten einzufügen, wenn nicht alle Informationen vorhanden sind.
- **Löschanomalie**: Löschen von Daten führt zum Verlust wichtiger Informationen.
- **Änderungsanomalie**: Inkonsistenzen durch fehlgeschlagene Aktualisierungen an mehreren Stellen.

## Normalformen

Die **Normalformen** in der Datenbanktheorie sind Regeln, um Redundanzen und Anomalien in relationalen Datenbanken zu vermeiden. Es gibt mehrere Normalformen, aber die ersten drei (1. Normalform, 2. Normalform und 3. Normalform) sind die wichtigsten und am häufigsten verwendeten. Ich erkläre sie dir anhand von Beispielen:

### 1. Normalform (1NF) – Atomare Werte

Eine Tabelle befindet sich in der **1. Normalform**, wenn:

1. Alle Werte atomar sind, d. h., es gibt keine wiederholten Gruppen oder mehrere Werte in einem einzelnen Feld.
2. Jedes Attribut nur einen Wert enthält.

#### Beispiel:

**Nicht in 1NF:**

| Kundennummer | Kundenname   | Telefon            |
| ------------ | ------------ | ------------------ |
| 1            | Max Müller   | 0123-456, 0123-789 |
| 2            | Anna Schmitz | 0987-654           |

Das Feld "Telefon" enthält bei "Max Müller" zwei Telefonnummern, was gegen die 1NF verstößt.

**In 1NF:**

| Kundennummer | Kundenname   | Telefon  |
| ------------ | ------------ | -------- |
| 1            | Max Müller   | 0123-456 |
| 1            | Max Müller   | 0123-789 |
| 2            | Anna Schmitz | 0987-654 |

Nun hat jede Zeile nur einen Telefonwert.

### 2. Normalform (2NF) – Keine partiellen Abhängigkeiten

Eine Tabelle ist in der **2. Normalform**, wenn:

1. Sie in 1NF ist.
2. Jedes Nicht-Schlüssel-Attribut vollständig vom **gesamten** Primärschlüssel abhängt.

#### Beispiel:

Angenommen, du hast eine Tabelle mit einem zusammengesetzten Primärschlüssel (z. B. Kundennummer + Produktnummer):

**Nicht in 2NF:**

| Kundennummer | Produktnummer | Kundenname   | Produktname |
| ------------ | ------------- | ------------ | ----------- |
| 1            | 101           | Max Müller   | Laptop      |
| 2            | 102           | Anna Schmitz | Handy       |
| 1            | 103           | Max Müller   | Tablet      |

In diesem Beispiel hängt der "Kundenname" nur von der Kundennummer ab, während der "Produktname" nur von der Produktnummer abhängt. Das führt zu Redundanzen und Verletzungen der 2NF.

**In 2NF:**
Man teilt die Tabelle in zwei Tabellen auf, um die Abhängigkeiten zu trennen:

**Kundentabelle:**

| Kundennummer | Kundenname   |
| ------------ | ------------ |
| 1            | Max Müller   |
| 2            | Anna Schmitz |

**Produktbestellung:**

| Kundennummer | Produktnummer | Produktname |
| ------------ | ------------- | ----------- |
| 1            | 101           | Laptop      |
| 2            | 102           | Handy       |
| 1            | 103           | Tablet      |

Jetzt hängt der Kundenname vollständig von der Kundennummer ab und der Produktname von der Produktnummer. Somit ist die 2NF erfüllt.

### 3. Normalform (3NF) – Keine transitiven Abhängigkeiten

Eine Tabelle ist in der **3. Normalform**, wenn:

1. Sie in 2NF ist.
2. Es keine **transitiven Abhängigkeiten** gibt, d. h., Nicht-Schlüssel-Attribute hängen nicht voneinander ab, sondern nur vom Primärschlüssel.

#### Beispiel:

**Nicht in 3NF:**

| Kundennummer | Kundenname   | Stadt   | PLZ   |
| ------------ | ------------ | ------- | ----- |
| 1            | Max Müller   | Berlin  | 10115 |
| 2            | Anna Schmitz | Hamburg | 20095 |
| 3            | Peter Becker | Berlin  | 10115 |

In diesem Fall hängt "PLZ" nicht direkt von der Kundennummer ab, sondern von der Stadt. Es gibt also eine transitive Abhängigkeit: **Kundennummer → Stadt → PLZ**.

**In 3NF:**
Du trennst die Tabelle in zwei Tabellen:

**Kundentabelle:**

| Kundennummer | Kundenname   | Stadt   |
| ------------ | ------------ | ------- |
| 1            | Max Müller   | Berlin  |
| 2            | Anna Schmitz | Hamburg |
| 3            | Peter Becker | Berlin  |

**Stadttabelle:**

| Stadt   | PLZ   |
| ------- | ----- |
| Berlin  | 10115 |
| Hamburg | 20095 |

Nun gibt es keine transitive Abhängigkeit mehr. Die PLZ ist nur noch von der Stadt abhängig und nicht von der Kundennummer.

### Zusammenfassung:

- **1NF:** Atomare Werte, keine mehrfachen Werte in einer Zelle.
- **2NF:** Keine partiellen Abhängigkeiten, jedes Nicht-Schlüssel-Attribut hängt vollständig vom Primärschlüssel ab.
- **3NF:** Keine transitiven Abhängigkeiten, jedes Nicht-Schlüssel-Attribut hängt nur vom Primärschlüssel ab, nicht von anderen Nicht-Schlüssel-Attributen.

Mit diesen Normalformen kannst du deine Datenbank effizienter gestalten und Datenanomalien vermeiden.
