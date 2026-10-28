import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Type,
  Minimize2,
  Maximize2,
  Eye,
  Printer,
  Sparkles
} from "lucide-react";

export function StudyComfortBar() {
  const [fontSizeLevel, setFontSizeLevel] = useState<"normal" | "large" | "xlarge">("normal");
  const [isDistractionFree, setIsDistractionFree] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (fontSizeLevel === "normal") {
      root.style.removeProperty("--reading-font-scale");
      document.body.classList.remove("text-lg", "text-xl");
    } else if (fontSizeLevel === "large") {
      root.style.setProperty("--reading-font-scale", "1.15");
      document.body.classList.add("text-lg");
      document.body.classList.remove("text-xl");
    } else if (fontSizeLevel === "xlarge") {
      root.style.setProperty("--reading-font-scale", "1.3");
      document.body.classList.add("text-xl");
    }
  }, [fontSizeLevel]);

  useEffect(() => {
    if (isDistractionFree) {
      document.body.classList.add("distraction-free-mode");
    } else {
      document.body.classList.remove("distraction-free-mode");
    }
  }, [isDistractionFree]);

  const cycleFontSize = () => {
    if (fontSizeLevel === "normal") setFontSizeLevel("large");
    else if (fontSizeLevel === "large") setFontSizeLevel("xlarge");
    else setFontSizeLevel("normal");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <TooltipProvider delayDuration={200}>
      <aside
        aria-label="Study Comfort and Accessibility Controls"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5 p-1.5 bg-background/95 backdrop-blur border border-border/80 shadow-lg rounded-full print:hidden"
      >
        {/* Font Size Adjuster */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={cycleFontSize}
              className="h-8 w-8 rounded-full text-foreground/80 hover:text-orange-600"
              aria-label={`Adjust text size (Current: ${fontSizeLevel})`}
            >
              <Type className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" className="text-xs">
            Text Size: {fontSizeLevel.toUpperCase()}
          </TooltipContent>
        </Tooltip>

        {/* Distraction-Free Reading Mode */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDistractionFree(prev => !prev)}
              className={`h-8 w-8 rounded-full ${
                isDistractionFree ? "text-orange-600 bg-orange-100 dark:bg-orange-950" : "text-foreground/80 hover:text-orange-600"
              }`}
              aria-label={isDistractionFree ? "Exit Focus Mode" : "Enter Distraction-Free Focus Mode"}
            >
              {isDistractionFree ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" className="text-xs">
            {isDistractionFree ? "Exit Focus Mode" : "Distraction-Free Focus Mode"}
          </TooltipContent>
        </Tooltip>

        {/* Print / Save PDF */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrint}
              className="h-8 w-8 rounded-full text-foreground/80 hover:text-orange-600"
              aria-label="Print or save as PDF"
            >
              <Printer className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" className="text-xs">
            Print / Save PDF
          </TooltipContent>
        </Tooltip>
      </aside>
    </TooltipProvider>
  );
}
