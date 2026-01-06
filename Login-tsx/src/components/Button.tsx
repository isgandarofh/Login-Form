type ButtonType = {
    btn_text: string,
    type: "submit";
}

export default function Button({ btn_text, type }: ButtonType) {
    return (
        <button
            type={type}
            className="btn btn-primary w-100 rounded-3 px-3 mb-3"
        >
            {btn_text}
        </button>
    );
}
