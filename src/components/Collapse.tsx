import { useState } from "react"

type CollapseProps = {
    text: string,
    content?: string
}

export function Collapse({ text, content }: CollapseProps) {
    const [toggle, setToggle] = useState(false);

    const toggleState = () => {
        setToggle(!toggle)
    }

    console.log(toggle);

    return (
        <div className="collapse">
            <button onClick={toggleState} className="collapse_btn">{text}<img className={toggle ? "active" : ""} src="/chevron-up.svg" alt="Flèche vers le haut" /></button>
            <div className={toggle ? "collapse_content active" : "collapse_content"}>
                <p aria-hidden={toggle ? "true" : "false"}>{content}</p>
                {/* {toggle && (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )} */}
            </div>
        </div>
    );
}