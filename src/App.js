import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ClickCounter2 from './components/ClickCounter2';
// import HoverCounter2 from './components/HoverCounter2'; 
// import User from './components/User';
// import Counter1 from './components/Counter1';
// import ClickCounter2 from './components/ClickCounter2';
import ComponentC from './components/ComponentC';
// import { UserProvider } from './components/userContext';
// import RefDemos from './components/RefDemos';
// import FocusInput from './components/FocusInput';
// import FRParentInput from './components/FRParentInput';
// import PureComp from './components/PureComp';
// import ParentComponent2 from './components/ParentComponent2';
// import Form from './components/Form';
// import LifeCycleA from './components/LifeCycleA';
// import Tables from './components/Tables';
// import FragmentDemo from './components/FragmentDemo';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent'
// import UserGreeting from './components/UserGreeting'
// import NameList from './components/NameList'
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      {/* <UserProvider value="Vishwas"> */}
        <ComponentC />
      {/* </UserProvider> */}
      {/* <HoverCounter2 />
      <ClickCounter2 /> */}
      {/* <Counter1>{(count, incrementCount) => (<ClickCounter2 count={count} incrementCount={incrementCount} /> )}</Counter1> */}
      {/* <Counter1>{(count, incrementCount) => (<HoverCounter2 count={count} incrementCount={incrementCount} /> )}</Counter1> */}
      {/* <User render={(isLoggedIn) => isLoggedIn? 'Vishwas': 'Guest'}/> */}
      {/* <HoverCounter name="Xavier" /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <ClickCounter name="Marvin" /> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefDemos /> */}
      {/* <ParentComponent2 /> */}
      {/* <PureComp /> */}
      {/* <Tables />    */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>error</h1>
      <h1 className={styles.success}>SUCCESSFUL</h1> */}
      {/* <Inline />
      <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting />
      <ParentComponent />
      <Greet name="Batman" trait="dynamism">
        <p>This is props.children</p>
      </Greet>
      <Greet name="Robin" trait="agility">
        <button>Action</button>
      </Greet>
      <Greet name="Penguin" trait="creepiness" />
      <Welcome name="Batman" trait="dynamism"/>
      <Welcome name="Robin" trait="agility"/>
      <Welcome name="Penguin" trait="creepiness"/>
      <Hello />
      <Message />
      <Counter/>
      <FunctionClick/>
      <ClassClick />
      <EventBind/> */}
    </div>
  );
}

export default App;