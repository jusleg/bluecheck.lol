import { useCoolMode } from "../hooks/useCoolMode";
import { LoadingIcon } from "../icons/loading";

export function Button({text, onClick, loading}: {text: string, onClick: () => void, loading?: boolean}) {
  const checkRef = useCoolMode(["/bluecheck.svg"]);
    
  return (
		<>
			{ loading ?
				(<div className="loading-container"><LoadingIcon/></div>) :
				(<div ref={checkRef}><button className="buy-button" onClick={onClick}>{text}</button></div>)
			}
		</>
  )
}