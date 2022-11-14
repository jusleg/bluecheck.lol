import { useDynamicContext } from "@dynamic-labs/sdk-react";
import { useState } from "react";
import { Button } from "./Button";
import { InfoSection } from "./InfoSection";
import * as ethers from 'ethers';

import { abi } from "../abi";
import { ErrorContainer } from "./ErrorContainer";

export function Authenticated() {
  const { walletConnector, handleLogOut } = useDynamicContext();
  const [isBuying, setIsBuying] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [transactionUrl, setTransactionUrl] = useState("");
  const [error, setError] = useState("");

  const callContract = async () => {
    try {
      const signer = await walletConnector.getSigner()
      const contractAddress = "0xC82094717F76A566eE1cA78647F8c26d391DB4aA";
      const etherValue = ethers.utils.parseEther("0.0042069");
      const connectedContract = new ethers.Contract(contractAddress, abi, signer);

      const tx = await connectedContract.mint({value: etherValue});
      console.log(tx);
      setTransactionUrl(`https://etherscan.io/tx/${tx.hash}`);
      setIsCompleted(true);
    } catch (error: any) {
      console.log(error);
      if (error.message.includes("denied") || error.message.includes("rejected")) {
        setError("Transaction was rejected");
      } else if (error.message.includes("insufficient funds")) {
        setError("Insufficient funds");
      } else {
        setError("Something went wrong");
      }
    }
    setIsBuying(false);
  }

  const handleBuy = async () => {
    setIsBuying(true);
    try {
      await walletConnector.switchNetwork({ networkChainId: 1});
      await callContract();
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
      { error && <ErrorContainer message={error} /> }
      <button className="mt-4 text-gray-500 hover:text-black" onClick={handleLogOut}>Disconnect wallet</button>
    </>
  );
}