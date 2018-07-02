# react-contextifier
react-contextifier is a wrapper of the react context api.
Its main purpose is to reduce the verbosity and the frictions encountered when managing contexts
## Exemple
**contexts.js**
```javascript
import { createContext } from 'react-contextifier'

createContext('user')
createContext('todos')
```
**User.js**
```javascript
import  { Provide }  from  'react-contextifier'

class User {
  state = {
    name: 'John'
  }

  render () {
    return (
      <Provide context="user" value={this.state}>
        <Missions />
      </Provide>
    )
  }
}
```

**Missions.js**
```javascript
import  { Provide }  from  'react-contextifier'

class Missions {
  addMission = mission =>
    this.setState(({ missions }) => ({ missions: [...missions, mission] }));

  state = {
    list: [],
    addMission: this.addMission
  };

  render() {
    return (
      <Provide context="missions" value={this.state}>
        <Missions />
      </Provide>
    );
  }
}
```
**Profile.js**
```javascript
import { subscribe } from 'react-contextifier'

const Profile = ({ userName, missions, addMission }) => (...)

const mapContextsToProps = {
  user: ({ name }) => ({ userName: name }),
  missions: ({ list, addMission }) => ({ mission: list, addMission })
}

export default subscribe(mapContextsToProps)(Profile)
```
