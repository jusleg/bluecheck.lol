import { useDynamicContext } from "@dynamic-labs/sdk-react";
import { Button } from "./Button";
import { InfoSection } from "./InfoSection";

export function Unauthenticated() {
  const { setShowAuthFlow } = useDynamicContext();
  
  return(
    <>
      <InfoSection />
      <Button text="Connect Wallet" onClick={() => setShowAuthFlow(true)} />
    </>
  );
}