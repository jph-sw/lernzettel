---
title: "Subnetting für dumme"
description: "Subnetting für dumme"
date: 2026-04-16
---

In diesem Post erkläre ich das Thema **Subnetting** vom Grund auf. Nachdem Lesen dieses Posts wird jeder dieses Thema verstehen.

## 1. Was ist ein Subnetz?

Ein **Subnetz (Subnet)** ist ein logisch abgegrenzter Teilbereich eines IP-Netzwerks. Durch Subnetting wird ein großes Netzwerk in mehrere kleinere Netzwerke aufgeteilt.

**Ziele des Subnettings:**
- Reduzierung von Broadcast-Traffic
- Erhöhung der Sicherheit durch Netztrennung
- Effiziente Nutzung des IP-Adressraums
- Strukturierung von Netzwerken (z. B. nach Abteilungen)

## 2. Grundlagen: IPv4-Adressen

Eine IPv4-Adresse besteht aus **32 Bit**, dargestellt in 4 Oktetten (Dezimal):

```
192.168.10.0
= 11000000.10101000.00001010.00000000
```

Sie besteht immer aus zwei Teilen:

| Teil | Bedeutung |
|---|---|
| **Netzanteil** | Identifiziert das Netzwerk |
| **Hostanteil** | Identifiziert den einzelnen Host |

---

## 3. Die Subnetzmaske

Die Subnetzmaske legt fest, **wie viele Bits zum Netzanteil gehören**.

**Beispiel:**
```
IP-Adresse:    192.168.10.0
Subnetzmaske:  255.255.255.0  →  /24
```

In der **CIDR-Notation** schreibt man `/24`, weil 24 Bits auf „1" gesetzt sind.

```
255.255.255.0 = 11111111.11111111.11111111.00000000
                |←————— Netzanteil —————→||← Host →|
```

## 4. Wichtige Formeln (IHK-Klausur!)

| Formel | Bedeutung |
|---|---|
| **2ⁿ** | Anzahl der Subnetze (n = geborgte Bits) |
| **2ʰ** | Anzahl der IP-Adressen im Subnetz (h = Host-Bits) |
| **2ʰ − 2** | Anzahl der **nutzbaren** Hosts (−Netzadresse, −Broadcast) |

## 5. Rechenbeispiel (klassische IHK-Aufgabe)

**Aufgabe:**
> Gegeben: Netzwerk `192.168.1.0/24`. Teilen Sie es in **4 gleich große Subnetze** auf.

**Schritt 1: Wie viele Bits müssen geborgt werden?**

2ⁿ = 4 → **n = 2 Bits** (2² = 4)

```
2² = 4 | /² (hier einfach ganz normal auflösen)
-> 1² = 2
-> 2
```

**Schritt 2: Neue Präfixlänge berechnen**

/24 + 2 = **/26**

**Schritt 3: Blockgröße berechnen**

Host-Bits = 32 − 26 = 6 → Blockgröße = 2⁶ = **64 Adressen**

**Schritt 4: Subnetze aufstellen**

| Subnetz | Netzadresse | Erste Host-IP | Letzte Host-IP | Broadcast |
|---|---|---|---|---|
| 1 | 192.168.1.**0**/26 | 192.168.1.1 | 192.168.1.62 | 192.168.1.63 |
| 2 | 192.168.1.**64**/26 | 192.168.1.65 | 192.168.1.126 | 192.168.1.127 |
| 3 | 192.168.1.**128**/26 | 192.168.1.129 | 192.168.1.190 | 192.168.1.191 |
| 4 | 192.168.1.**192**/26 | 192.168.1.193 | 192.168.1.254 | 192.168.1.255 |

## 6. Merkhilfe: Subnetzmaske ↔ CIDR

| CIDR | Subnetzmaske | Hosts (nutzbar) |
|---|---|---|
| /24 | 255.255.255.0 | 254 |
| /25 | 255.255.255.128 | 126 |
| /26 | 255.255.255.192 | 62 |
| /27 | 255.255.255.224 | 30 |
| /28 | 255.255.255.240 | 14 |
| /29 | 255.255.255.248 | 6 |
| /30 | 255.255.255.252 | 2 |

> **/30** wird typischerweise für **Punkt-zu-Punkt-Verbindungen** (z. B. Router ↔ Router) verwendet.

## 7. Typische IHK-Stolperfallen

- **Netzadresse ≠ nutzbare Host-Adresse** → immer −2 rechnen
- **/32** = einzelner Host, **/0** = gesamtes Internet
- Die **Broadcast-Adresse** ist immer die **letzte Adresse** im Subnetz
- CIDR-Notation und Dezimalmaske müssen **ineinanderübersetzt** werden können
- Bei der Frage „Gehören zwei IPs zum selben Subnetz?" → **AND-Verknüpfung** mit der Subnetzmaske prüfen

## 8. AND-Verknüpfung zur Netzbestimmung

**Beispiel:** Gehört `192.168.1.130` zum Subnetz `192.168.1.128/26`?

```
IP:           11000000.10101000.00000001.10000010
Maske /26:    11111111.11111111.11111111.11000000
                                              AND
Ergebnis:     11000000.10101000.00000001.10000000
            = 192.168.1.128  ✓ → Ja, gehört dazu!
```

**Lernempfehlung für die Prüfung:** Übe das Aufstellen von Subnetztabellen und die AND-Verknüpfung bis es sitzt – diese Aufgaben kommen in der IHK-Abschlussprüfung für Fachinformatiker garantiert dran!
