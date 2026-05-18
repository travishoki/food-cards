import { getSidePadding } from "../Card.helpers";
import { ICON_PADDING, ICON_SIZE, ICON_TOP } from "../Card.const";
import "./Icon.css";

type IconProps = {
    cardRatio: number;
    categoryKey: string;
};

export const Icon = ({ cardRatio, categoryKey }: IconProps) => {
    const width = ICON_SIZE * cardRatio;
    const height = width;
    const padding = ICON_PADDING * cardRatio;
    const top = ICON_TOP * cardRatio;
    const right = getSidePadding(cardRatio) + padding;

    return (
        <img
            alt=""
            className="iconImg"
            height={height}
            src={`/icons/${categoryKey}.png`}
            style={{
                right: `${right}px`,
                top: `${top}px`,
            }}
            width={width}
        />
    );
};
