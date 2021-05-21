import React,{useState,useEffect} from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'
import Load from './Load'

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};
function App() {
  const [theme, setTheme] = useState(getStorageTheme());
  const [loading,Setloading] = useState(true);

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      Setloading(false)
     },5000)
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div>
      {
        loading ?
        <Load
          />
        : <>
        <button className="btnnn" onClick={toggleTheme}>
        toggle
        </button>
        <SearchForm/>
        <Buttons/>
        <Stories/>
        </>
      }
      </div>
  );
}

export default App