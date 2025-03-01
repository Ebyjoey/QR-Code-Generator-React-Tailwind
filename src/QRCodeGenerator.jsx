import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react"; // Import the QRCodeCanvas component
import { Input } from "./components/ui/input";  // Assuming you have custom Input component
import { Button } from "./components/ui/button";  // Assuming you have custom Button component
import { Card, CardContent } from "./components/ui/card";  // Assuming you have custom Card component

export default function QRCodeGenerator() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="p-6 max-w-sm w-full text-center">
        <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
        <Input 
          type="text" 
          placeholder="Enter text or URL" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          className="mb-4"
        />
        <CardContent className="flex flex-col items-center">
          {text && <QRCodeCanvas value={text} size={200} />}
          <Button 
            className="mt-4" 
            onClick={() => setText("")}
          >Clear</Button>
        </CardContent>
      </Card>
    </div>
  );
}
