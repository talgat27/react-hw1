import './Header.css'
export default function Header(props) {
    const {
    text,
    color
   } =props
    return (
        <header>
            <div className={color}>
                <h1>{text}</h1>
            </div>
        </header>
    )
}