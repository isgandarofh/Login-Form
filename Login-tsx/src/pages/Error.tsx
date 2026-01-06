export default function Error() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h3 className="mb-3">Səhifə tapılmadı</h3>
            <p className="text-muted mb-4">
                Axtardığınız səhifə mövcud deyil və ya silinib.
            </p>

            <a href="/login" className="btn btn-primary px-4">
                Ana səhifəyə qayıt
            </a>
        </div>
    );
}
