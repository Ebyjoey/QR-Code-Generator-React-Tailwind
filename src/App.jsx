import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Input } from "./components/Input"; // Custom Input Component
import { Button } from "./components/Button"; // Custom Button Component
import { Card } from "./components/Card"; // Custom Card Component

function App() {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-green-400 flex justify-center items-center p-6">
      <Card>
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">QR Code Generator</h1>
        <Input
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="mt-6 flex flex-col items-center">
          {text && <QRCodeCanvas value={text} size={200} />}
          <Button className="mt-6" onClick={() => setText("")}>
            Clear
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default App;
