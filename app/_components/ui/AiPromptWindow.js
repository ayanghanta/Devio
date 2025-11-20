import { useState } from "react";
import { PiLightning, PiSpinner, PiThermometer } from "react-icons/pi";

function AiPromptWindow({ onGenerate, onCloseModal }) {
  const [prompt, setPrompt] = useState("");
  const [temperature, setTemperature] = useState(0.8);
  const [isLoading, setIsLoading] = useState(false);

  async function handleCreate() {
    setIsLoading(true);
    console.log("Create clicked with temp:", temperature);
    await onGenerate({ prompt, temperature });
    setIsLoading(false);
    onCloseModal();
  }

  function handleCancel() {
    setTemperature(0.8);
    onCloseModal();
  }

  return (
    <div>
      <div className="w-full transition-all duration-300">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 border-b border-gray-200 pb-2">
          Generate Blog Content
        </h1>

        <div className="mb-6">
          <label
            htmlFor="prompt-input"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Detailed Content Prompt
          </label>
          <textarea
            id="prompt-input"
            rows={6}
            className="w-full p-4 border border-gray-300 rounded-md bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-y placeholder:text-gray-400"
            placeholder="E.g., Write a 500-word blog post about the benefits of using structured JSON outputs with the Gemini API, focusing on reliability and type safety. Use a professional, technical tone."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        {/* 2. Temperature Controller (Smaller size, subtle styling) */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <label
            htmlFor="temperature-slider"
            className="flex items-center text-sm font-semibold text-gray-700 mb-3"
          >
            <PiThermometer className="w-4 h-4 mr-2 text-blue-600" />
            Model Temperature (Creativity)
          </label>

          <div className="flex items-center space-x-3">
            {/* Slider */}
            <input
              id="temperature-slider"
              type="range"
              min="0.0"
              max="2.0"
              step="0.1"
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-gray-300 rounded-lg appearance-none cursor-pointer range-sm accent-blue-600 transition-colors duration-200"
            />

            {/* Value Display */}
            <div
              className={`
              text-sm font-bold w-12 text-center py-0.5 px-2 rounded-md shadow-inner transition-all duration-200 
              ${
                temperature < 0.5
                  ? "bg-green-600 text-white"
                  : temperature < 1.0
                  ? "bg-yellow-500 text-gray-900"
                  : "bg-red-600 text-white"
              }
            `}
            >
              {temperature.toFixed(1)}
            </div>
          </div>

          <div className="flex justify-between text-xs mt-2 text-gray-500">
            <span>0.0 (Deterministic)</span>
            <span>2.0 (Highly Creative)</span>
          </div>
        </div>

        {/* 3. Action Buttons */}
        <div className="flex justify-end space-x-4 mt-8">
          {/* Secondary Button - Cancel */}
          <button
            onClick={handleCancel}
            className="flex items-center px-6 py-2 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Cancel
          </button>
          {/* Primary Button - Generate Content */}
          <button
            onClick={handleCreate}
            className="flex items-center px-6 py-2 bg-gray-900 text-white rounded-lg shadow-md hover:bg-black transition-all duration-150 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-gray-700/50"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <PiSpinner className="w-5 h-5 mr-2" />
                Generateing
              </>
            ) : (
              <>
                <PiLightning className="w-5 h-5 mr-2" />
                Generate Content
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AiPromptWindow;
