export function Dropdown({ text }: {text: string}) {
    return (
        <button className="dropdownBtn">{text}<img src="/chevron-up.svg" alt="Flèche vers le haut" /></button>
    );
}