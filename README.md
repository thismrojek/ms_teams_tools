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
