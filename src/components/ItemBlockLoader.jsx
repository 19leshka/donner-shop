import ContentLoader from "react-content-loader";

const ItemBlockLoader = () => {

    return (
        <ContentLoader
            className="donner-block"
            speed={2}
            width={280}
            height={458}
            viewBox="0 0 280 458"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="140" r="140" />
            <rect x="0" y="284" rx="6" ry="6" width="280" height="24" />
            <rect x="0" y="319" rx="6" ry="6" width="283" height="84" />
            <rect x="0" y="408" rx="6" ry="6" width="55" height="44" />
            <rect x="123" y="408" rx="22" ry="22" width="152" height="44" />
        </ContentLoader>
    )
}

export default ItemBlockLoader;