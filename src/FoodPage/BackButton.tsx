import { useNavigate, useParams } from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate();
    const { subCategory, topCategory } = useParams<{
        subCategory?: string;
        topCategory?: string;
    }>();

    const onClick = () => {
        if (topCategory && subCategory) {
            navigate(`/${topCategory}/${subCategory}`);
        } else if (topCategory) {
            navigate(`/${topCategory}`);
        } else {
            navigate("/");
        }
    };

    return (
        <button className="category-menu__link" onClick={onClick} type="button">
            Back
        </button>
    );
};
