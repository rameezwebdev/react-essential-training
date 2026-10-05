import './App.css'

function App() {

  return (
  <>
  <Header name = 'Rameez' profession = 'Software Developer' /> 
  <Main dash = {item} />
  </>
  )
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

const item = [
  'Ali UI and UX Developer',
  'Ahmad AI Engineer',
  'Raees YouTuber'
];

function Main({dash}) {
   return(
    <ul>
        {
          dash.map((item,index) => {
            return <li style={{listStyle: "none"}} key={index}>
                      {item}
                  </li>
          })
        }
    </ul>
  ) 
};