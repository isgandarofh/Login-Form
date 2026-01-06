export default function Label() {
    return (
        <div className="w-50">
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                    defaultChecked
                />
                <label className="form-check-label pb-4" htmlFor="rememberMe">
                    Remember Me
                </label>
            </div>
        </div>
    );
}
