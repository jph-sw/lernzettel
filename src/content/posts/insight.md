---
title: "PatOrg Insight: Projektarbeit"
description: "Notizen zur Projektarbeit 2026"
date: "Jan 22 2026"
---

# PatOrg Insight

Dieses Dokument beschreibt die Projektarbeit im Rahmen meiner Abschlussprüfung zum **Fachinformatiker für Anwendungsentwicklung**.

## Projektbeschreibung

Die Firma **Brügmann Software** entwickelt seit über 30 Jahren eine Softwarelösung zur Verwaltung von Patenten.  
Im Rahmen dieses Projekts wird das System **PatOrg Insight** entwickelt, das Telemetriedaten sammelt, auswertet und visualisiert, um die Qualität und Weiterentwicklung der bestehenden Software zu unterstützen.

Aufgrund von Lizenzumstellungen ist es erforderlich, Nutzungsdaten wie beispielsweise die Anzahl verwendeter Akten zu erfassen.  
Darüber hinaus soll das System ermöglichen, Benutzerinteraktionen (z. B. die Nutzung bestimmter Funktionen oder UI-Elemente) zu analysieren. Ergänzend werden Absturzberichte und Fehlermeldungen gesammelt, um Fehlerquellen schneller identifizieren zu können.

## Ist-Stand

Aktuell existiert keine umfassende Telemetrie innerhalb der Software.  
Es besteht lediglich die Möglichkeit, Absturzberichte zu übermitteln, die über eine bereits vorhandene Infrastruktur gesammelt und ausgewertet werden.

## Soll-Stand

Die Software **Insight** soll künftig Telemetriedaten sowie Absturzberichte erfassen und diese für interne Analysezwecke aufbereiten.  
Der Zugriff auf das System erfolgt über ein **JWT Token** System, sodass ausschließlich autorisierte Benutzer Einsicht in die Daten erhalten.

## Projektphasen mit Zeitplanung (80 Stunden)

| Phase                      | Beschreibung                                       | Zeitaufwand (Stunden) |
| -------------------------- | -------------------------------------------------- | --------------------- |
| Analyse / Ist-Analyse      | Anforderungsanalyse und Erfassung des Ist-Zustands | 8                     |
| Soll-Konzept / Planung     | Architektur- und Konzeptionsphase                  | 12                    |
| Implementierung Kernsystem | Backend-Entwicklung und Core-Logik                 | 14                    |
| Frontend-Design            | Visualisierung und Auswertung der Daten            | 12                    |
| Zusammenarbeit Server-Team | Clientseitige Implementierung bei Kunden           | 12                    |
| Performance-Optimierungen  | Optimierung für große Datenmengen                  | 10                    |
| Tests / QS                 | Funktionstests und Qualitätssicherung              | 6                     |
| CI + Docker                | Aufbau der Build-Pipeline und Containerisierung    | 4                     |
| Dokumentation              | Technische und Benutzer-Dokumentation              | 2                     |
| **Gesamt**                 |                                                    | **80 Stunden**        |

## Technische Details

### Backend

- Typescript
- Node.js
- Fastify

### Frontend

- React
- shadcn/ui & Blue React
- Tailwind CSS
- Recharts

### Datenbank

- ClickHouse

![POM Architektur](/static/exalidraw-1.webp)
