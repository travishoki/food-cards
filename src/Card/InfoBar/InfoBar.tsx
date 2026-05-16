import { INFO_BAR_TOP } from "../Card.const"
import "./InfoBar.css"

type InfoBarProps = {
    cardRatio: number
    text: string
}

const base = "http://127.0.0.1:3000"
const asset_path = "/assets"

export const InfoBar = ({cardRatio, text}: InfoBarProps) => {
  const top = INFO_BAR_TOP * cardRatio

  return (
    <div
      className="info-bar"
      style={{
        top: `${top}px`
    }}
>
      <div className="info-bar-inner">
      <p>{text}</p>
          <img
              src={`${base}${asset_path}/image/card-accents/info-bar.png`}
              width={651}
              height={60}
              alt="Info Bar"
          />
      </div>
    </div>
  )
}