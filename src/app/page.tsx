import { Button } from "@nextui-org/react";
import Image from "next/image";
import { GoSmiley } from "react-icons/go";

export default function Home() {
  return (
    <div >
      <h1 className="text-3xl">Hello</h1>
        <Button 
          color="danger" 
          variant="bordered"
          startContent={<GoSmiley/>}
          >
            Click me</Button>
      
    </div>
  );
}
