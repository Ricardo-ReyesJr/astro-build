// src/components/MyButton.jsx

export default function MyButton() {
    const clicked = () => {console.log('Hello!') };

    return (
        <div>
            <button style={{ color : 'purple' }} onClick={clicked}>Click Me</button>
        </div>
    )
}