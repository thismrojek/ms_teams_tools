# Tools for Microsoft Teams

## Available methods

### raiseHand
With raiseHand you can automate hand raising by specifying a time interval for the action to be performed.
#### setDelay
```javascript
TeamsTools.raiseHand.setDelay(interval)
```
Where *interval* is time in miliseconds, which determines the frequency of hand raising.
#### start
```javascript
TeamsTools.raiseHand.start()
```
The method does not take any parameters.
#### stop
```javascript
TeamsTools.raiseHand.stop()
```
The method does not take any parameters.

### lagMicrophone
This method mutes your microphone every random number of milliseconds so that it appears to be broken.
#### start
```javascript
TeamsTools.lagMicrophone.start()
```
The method does not take any parameters.
#### stop
```javascript
TeamsTools.lagMicrophone.stop()
```
The method does not take any parameters.

### disconnect
#### schedule
```javascript
TeamsTools.disconnect.schedule(hour, date)
```
Where *hour* is an object, which contains information about the time when the disconnect from the call should occur.
Here is an example, for 11:24:
```javascript
hour = {
    hours: 11,
    minutes: 24
}
```
Where *date* is an object, which contains information about the date (date, month, year) when the disconnect from the call should occur.
Here is an example, for 29th March 2002:
```javascript
date = {
    day: 29,
    month: 03,
    year: 2002
}
```
