# react-contextifier
react-contextifier is a wrapper of the react context api.
Its main purpose is to reduce the verbosity and the frictions encountered when managing contexts
## Installation
Using Yarn:
```shell
yarn install react-contextifier
```

Using npm:
```shell
npm install --save react-contextifier
```

## Exemples

### Simple context

```javascript
import { createContext, Provider, Consumer } from 'react-contextifier'

createContext('user')

const User () => (
  <Provider context="user" value={{ name: 'John' }}>
    <Profile />
  </Provider>
)

const Profile = () => (
  <Consumer context="user">{({ name }) => <div>{name}</div>}</Consumer>
)
```

### With HOC
```javascript
import { subscribe } from 'react-contextifier'

const Profile = ({ name }) => (
  <div>{name}</div>
)

export default subscribe({ user: ({ name }) => ({ name })})
```

### Multiple context
**contexts.js**
```javascript
import { createContext } from 'react-contextifier'

createContext('user')
createContext('todos')
```
**User.js**
```javascript
import  { Provider }  from  'react-contextifier'

const User = () => (
  <Provider context="user" value={{ name: "John" }}>
    <Missions />
  </Provider>
)
```

**Missions.js**
```javascript
import  { Provider }  from  'react-contextifier'

const Missions = () => (
  <Provider context="missions" value={{ list: [] }}>
    <Missions />
  </Provider>
);
```
**Profile.js**
```javascript
import { subscribe } from 'react-contextifier'

const Profile = ({ userName, missions }) => (...)

const mapContextsToProps = {
  user: ({ name }) => ({ userName: name }),
  missions: ({ list }) => ({ mission: list })
}

export default subscribe(mapContextsToProps)(Profile)
```
