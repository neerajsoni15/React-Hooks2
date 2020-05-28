import React from 'react'
import './App.css'
import CallBackHooks from './components/CallBackHooks/CallBackHooks'
import ComponentC from './components/ContextHooks/ComponentC'
import UseMemo from './components/useMemoHook/useMemo'
import UseRef from './components/useRef/UseRef'
import DocTitleTwo from './components/CustomeHooks/DocTitleTwo'
import DocTitleOne from './components/CustomeHooks/DocTitleOne'
import UseReducer from './components/useReducerHooks/UseReducer'
import UseReducer2 from './components/useReducerHooks/UseReducer2'

export const firmContext = React.createContext();
export const DomainContext = React.createContext();

function App() {
	return (
		<div className="App">
       {/* <UseRef /> */}
       <CallBackHooks />
      {/* <UseReducer2 /> */}
      {/* <UseReducer />  */}
      {/*  */}
      {/* <UseMemo /> */}
      {/* <firmContext.Provider value={'Cerner'}>
          <DomainContext.Provider value={'Healthcare'}>
            <ComponentC />
          </DomainContext.Provider>
      </firmContext.Provider> */}
      {/*
      
      
      
     
      
      <DocTitleOne />
      <DocTitleTwo /> 
      */}
		</div>
	)
}

export default App