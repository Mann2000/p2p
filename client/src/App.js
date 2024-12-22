import './App.css';
import { useRef } from 'react';

function App() {
  const fileInputRef = useRef(null);


  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically click the file input
    }
  };
  return (
    <div className="w-full h-screen bg-gray-900 flex justify-center items-center px-8">
      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full max-w-5xl gap-8">
        
        {/* Left Section: File Upload Box */}
        <div onClick={handleClick} className="flex items-center justify-center h-72 bg-gray-800 rounded-3xl shadow-lg border-dashed border-2 border-gray-600 hover:border-orange-500 transition-all relative">
          <div className="flex flex-col items-center text-center">
            <input type='file' ref={fileInputRef} hidden/>
            <div className="text-orange-500 text-4xl mb-4">+</div>
            <p className="text-white font-medium">
              Click to here to start sharing
            </p>
          </div>
        </div>
        
        {/* Right Section: Text Content */}
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Share files directly from your device to anywhere
          </h1>
          <p className="text-gray-400 mb-6">
            Send files of any size directly from your device without ever storing anything online.
          </p>
          <ul className="grid grid-cols-2 gap-4">
            <li className="flex items-center gap-2 text-gray-400">
              <span className="text-white">∞</span> No file size limit
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <span className="text-white">⚡</span> Blazingly fast
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <span className="text-white">🔄</span> Peer-to-peer
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <span className="text-white">🔒</span> End-to-end encrypted
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default App;
