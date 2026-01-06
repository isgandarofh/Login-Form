type PageTitleType = {
    title : string
}


export default function PageTitle({ title}:PageTitleType) {
    return (
        <h3 className="text-center mb-4">
            {title}
        </h3>
    );
}
