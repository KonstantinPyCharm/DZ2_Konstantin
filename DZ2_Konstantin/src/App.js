import './App.css';
import Component from './components/component/Component';
import Component2 from './components/component2/Component2';
import Button from './components/button/Button';
import Example from './components/Example';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import User from "./components/user/User";

function App() {

    const navbar = ['Главная', 'О нас','Контакты']

    const userContent = "Привет, друг! Пойдем гулять?"


    return (
        <div>
            <Header navbar={navbar}/>
            <h1>Hello</h1>
            <Component text={'Bakyt'}/>
            <Component2 age={18}/>
            <Button text={'Delete'}/>
            <Button text={'add'}/>
            <Button text={'update'}/>
            <Example>
            <p style={{
                color: "green",
                fontSize: "20px"
            }}>
                Bakyt
            </p>
            </Example>
            <Footer link={'online.geeks.kg'}/>
            <User content={userContent}/>
        </div>

    );
}

export default App;
