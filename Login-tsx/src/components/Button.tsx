type ButtonType = {
    btn_text: string,
    type: "submit";
    loading: boolean
}

export default function Button({ btn_text, type, loading }: ButtonType) {
    return (
        <button
            disabled = {loading}
            type={type}
            className="btn btn-primary w-100 rounded-3 px-3 mb-3">
            {loading ?
                <div className="spinner-border spinner-border-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                : btn_text}
        </button>
    );
}
