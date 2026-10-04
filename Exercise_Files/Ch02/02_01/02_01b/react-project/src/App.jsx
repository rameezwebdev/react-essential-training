import './App.css'

function App() {

  return <Header name = 'Rameez' profession = 'Software Developer' />  
}

export default App

function Header(props) {
  const {name, profession} = props;
   return (
    <header>
       <h1>Welcome {`${name} ${profession}`}  </h1>
    </header>
   )
};