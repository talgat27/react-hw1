import Button from '../Button/Button'
import './Footer.css'
export default function Footer(props) {
    return (
        <footer>
            <Button text="Sign Up" btnColor="yellow"/>
            <Button text="Log In" btnColor="green"/>
            <Button text="Delete" btnColor="red"/>
        </footer>
    )
}