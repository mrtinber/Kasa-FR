export function Dropdown({ text }: {text: string}) {
    return (
        <button>{text}<img src="/chevron-up.svg" alt="Flèche vers le haut" /></button>
    );
}