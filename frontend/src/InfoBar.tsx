import "./InfoBar.css"

type InfoBarProps = {
    text: string
}

const base = "http://127.0.0.1:3000"
const asset_path = "/assets"

export const InfoBar = ({text}: InfoBarProps) => {
  return (
    <div className="info-bar">
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