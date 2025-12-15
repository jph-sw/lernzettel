---
title: "LF08: Datenbanken Theorie Ergänzen (ER-Modell)"
description: ""
date: 2024-08-22
---

# Datenbanken Theorie Ergänzen (ER-Modell)

Das ER-Modell ist eine Methode zur Darstellung und Konzeptualisierung von Daten in einem Informationssystem. Es wird häufig in der Datenbankplanung verwendet.

## Hauptkomponenten

1. **Entitäten**

   - Repräsentieren reale oder abstrakte Objekte
   - Beispiele: Kunde, Produkt, Bestellung

2. **Attribute**

   - Eigenschaften der Entitäten
   - Beispiele: Name, Preis, Datum

3. **Beziehungen**
   - Verbindungen zwischen Entitäten
   - Beispiele: Kunde kauft Produkt, Bestellung enthält Produkte

## Notation

- Entitäten: Rechtecke
- Attribute: Ovale
- Beziehungen: Rauten

## Kardinalitäten

Beschreiben die Anzahl der möglichen Verknüpfungen zwischen Entitäten:

- 1:1 (eins zu eins)
- 1:N (eins zu viele)
- N:M (viele zu viele)

## Schlüssel

- **Primärschlüssel**: Eindeutige Identifikation einer Entität
- **Fremdschlüssel**: Verweis auf den Primärschlüssel einer anderen Entität

## Beispiel

![](https://www.plantuml.com/plantuml/png/SoWkIImgISv8pUFYIiqhoIofLF1DpIjEpb2evb9Gy2lDpKqjKh2noKwjjBC32IJcfW8fnvoIr28GdLAKMboSobNBnUMGcfS2CWO0)

**[hier](https://www.plantuml.com/plantuml/png/SoWkIImgISv8pUFYIiqhoIofLF1DpIjEpb2evb9G22v9BKqjKl1qKR2noKwjjBC3YlabvgO2ASUSajGY49rIb5fSdCfLoyNba9gN0Z890000)** kann man die gut erstellen

**[doku](https://plantuml.com/er-diagram)**
