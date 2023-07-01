# P4_SS23_Habit_Team7_Beck_Kessler
 
<div style="display: flex; justify-content: space-between;">
<h2>Habit</h2> 
</div>
<hr>

#### Was ist Habit?

Habit ist eine Anwendung, welche in Form eines interaktiven Tagebuchs den Patienten während ihrer medikamentösen Behandlung unterstützend an die Hand gegeben wird. Habit verfolgt das Ziel, die erfassten daten des Patienten zu visualisierten und ihnen die Möglichkeit zu bieten, zusätzliche Notizen zur Medikamenteneinnahme zu tätigen.

#### Unsere Idee

Eine Behandlung wirkt am besten, wenn der Datenaustausch zwischen Patienten und Ärzten, in einer Behandlung so transparent und verständlich wie möglich erfolgt. Die Medikamenteneinnahme kann aufgrund einer Desensibilisierung oder anderen Gründen vorgeschrieben sein. Bei dieser werden die erfassten Daten, welche von unserem Armband zur Verfügung gestellt und übertragen werden, direkt im Netzwerk an das interaktive Tagebuch gesendet, um diese den Patienten zu zeigen. Patienten in der Behandlung zu unterstützen, indem wir ihnen eine Erinnerungsmöglichkeit an die Medikamenteneinname und eine Veranschaulichung ihrer Vitalparameter bieten.

#### Bedienung

<hr>

| Screen                                                                                      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="./ReadMe-Assets/Homescreen.png" alt="Homescreen" width="150px"/>                  | 
Die Applikation startet im Homescreen. Von hier aus haben Sie über die Buttons, die Möglichkeit, den Kalender, das Tagebuch, die Datenübersicht und in die Medikamentenübersicht zu gelangen.                                                                                                                                                                                                                                                                                                                   |
| <img src="./ReadMe-Assets/Medikamente.png" alt="Medikamente" width="150px"/>                 
In der Medikamenten Übersicht sehen Sie alle Medikamente, welche Sie einnehmen müssen. Zusätzlich sehen Sie wann und in welcher Dosis diese einznehmen sind. Haben sie ein Medikament bereits zu sich genommen, gilt dieses in der Liste als "abgehakt". |

| <img src="./ReadMe-Assets/kalender.png" alt="Kalender" width="150px"/>              | 
In der Im Kalender werden unregelmäßige Messungen in Terminform angezeigt. Wenn Sie auf diese klicken werden sie eine detailierte Ansicht der Messung bekommen.                                                                                                                                                                                                                                                                                                                                                                                                     |
| <img src="./ReadMe-Assets/Vitalwerte.png" alt="Vitalwerte" width="150px"/>                          | 
Wollen Sie ein In der Übersicht der Vitalwerte, sehen Sie eine genaue Darstellung der Messung und haben die Möglichkeit zu dieser mittels des Button "Tagebuch" eine Notiz hinzuzufügen, welche der Arzt nach dem abschicken einsehen kann.                                                                                                                                                                                                                                                                                                                            |
| <img src="./ReadMe-Assets/Tagebuch.png" alt="Tagebuch" width="150px"/>                        | In der Das Tagebuch dient dazu Notizen festzuhalten zu bestimmten Messungen eines Vitalparameters. Hierzu zählen: Symptome, Nebenwirkungen etc..  Nach dem speichern dieser mittels des Button "Speichern" werden diese dem Arzt zur Verfügung gestellt. Mit dem "X" Knopf, löschen Sie ihre Eingabe.                                                                                                                                                                                                                                                                         |                                                           

#### Inbetriebnahme

###### Web-App

1. Dieses Repository Klonen
2. Ein Terminal Fenster starten und in das Repository Verzeichnis navigieren
3. `npm install` ausführen
4. `npm start` ausführen. Das Projekt öffnet sich unter **localhost:3000**

Abhängigkeiten der Web-App (Links):
[`create-react-app`](https://www.npmjs.com/package/create-react-app)
[`react-router`](https://www.npmjs.com/package/react-router)
[`react-icons`](https://www.npmjs.com/package/react-icons)

###### Hardware / interaktives Tagebuch/ Armband (ESP8266)

1. Mikrocontroller per USB an den Computer anschließen
2. Die Datei `Puls.ino` über die [Arduino-IDE](https://www.arduino.cc/en/software) öfnnen.
3. Im Code müssen die WLAN-Anmeldedaten editiert werden.
4. (...)

```
const char* ssid = "SSID";
const char* password = "Password";
```

4. Die editierte `Puls.ino` auf den Mikrocontroller hochladen.

5. Über den Seriellen-Monitor wird die IP-Addresse des Armbandes angezeigt.

Abhängigkeiten der Hardware (Links):
[`esp8266 Board Manager`](http://arduino.esp8266.com/stable/package_esp8266com_index.json)

#### Link

[Zur App]

```
Habit

Hochschule Darmstadt - Sommersemester 23 - Fachsemester 4
Ein Semesterprojekt von Emma Beck und Isabella Kessler
```
