# Sternzeichen Tinder
**Vorab:** Dieses Projekt ist nur ein Spaß.
Wir glauben nicht an Sternzeichen und haben kein ernsthaftes Interesse die Ausgaben der Web App auf die pseudo wissenschaftlichen Annahmen der Astrologie abzustimmen.

Die Website ist unter dem Link [Sternzeichen Tinder](https://codinghusi.github.io/zodiacsign-gimmik) zu erreichen.
Man gibt dort zwei Geburtsdaten an und lässt auswerten, wie gut die Sternzeichen zusammenpassen.
Dafür wurde die Quelle [Brigitte.de](https://www.brigitte.de/) zurate gezogen, die die angeblichen Stärken, Schwächen und Sternzeichen, die am besten bzw. schlechtesten mit einer Person eine Beziehung haben kann.

Intention des Projekts: Es ist ein cooles Party-Gimmick und oft ein guter Icebreaker. Falls man sich in die VIP-Liste (mehr dazu unten) einträgt, kann man seinen Score sogar noch boosten, damit man eine garantierte Erfolgswahrscheinlichkeit hat.

Die Berechnung der "Zertifizierten Match-Rate" ergibt sich wie folgt:  
* 50% auf den prozentualen Anteil der Eigenschaften der jeweiligen Sternzeichen, die zusammenpassen ([nach unserem Ermessen](src/categories.js))
* Falls sich Brigitte.de positiv über eine Beziehung der beiden Sternzeichen ausspricht: +48%
* Falls sich Brigitte.de negativ über eine Beziehung der beiden Sternzeichen ausspricht: +0%
* Falls sich Brigitte.de neutral über eine Beziehung der beiden Sternzeichen verhält: +25%
* Damit der Score glaubhafter wirkt, wird eine Art "Rauschen" (eine kleine krumme Zahl) auf das Ergebnis addiert (immer gleich bei gleichen Geburtsdaten)

Da wir gerne etwas schummeln wollten, gibt es die Möglichkeit manche Geburtsdaten nochmal extra zu pushen, bzw. speziell ausgewählte Geburtsdaten stark zu schwächen:
* Ist eins der Geburtsdaten auf der [Blacklist](src/special-dates.js), so ist die Match-Rate immer 0,69%
* Ist eins der Geburtsdaten auf der [VIP Liste](src/special-dates.js) (und nicht auf der Blacklist), so ist die Match-Rate immer zwischen 84% - 99%


*(Oh und der Projektname hat einen Rechtschreibfehler: Gimmik zu Gimmick)*