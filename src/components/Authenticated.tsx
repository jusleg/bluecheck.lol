import { useDynamicContext } from "@dynamic-labs/sdk-react";
import { useState } from "react";
import { Button } from "./Button";
import { InfoSection } from "./InfoSection";

export function Authenticated() {
  const { walletConnector } = useDynamicContext();
  const [isBuying, setIsBuying] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [transactionUrl] = useState("");

  const handleBuy = async () => {
    setIsBuying(true);
    try {
      await walletConnector.switchNetwork({ networkChainId: 1});
      const signer = await walletConnector.getSigner()
      console.log(signer);
      setIsBuying(false);
      setIsCompleted(true);
    } catch (error) {
      console.error(error);
      setIsBuying(false);
      setIsCompleted(false);
    }
  };

  const buttonText = isCompleted ? "View Transaction" : "Buy Now";
  const buttonClickHandler = isCompleted ? () => window.open(transactionUrl, "_blank") : handleBuy;
  
  return(
    <>
      <InfoSection completed={isCompleted} />
      <Button text={buttonText} onClick={buttonClickHandler} loading={isBuying} />
    </>
  );
}