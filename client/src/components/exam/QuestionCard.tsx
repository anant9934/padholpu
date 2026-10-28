import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

interface QuestionCardProps {
  question: {
    question: string;
    options: string[];
  };
  currentIndex: number;
  totalQuestions: number;
  selectedOption: number | null;
  onSelect: (index: number) => void;
}

export default function QuestionCard({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  onSelect,
}: QuestionCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.2 }}
        className="w-full flex-grow flex flex-col"
      >
        <Card className="flex-grow flex flex-col min-h-[350px] md:min-h-[500px] border-primary/10 shadow-xl shadow-primary/5 bg-white overflow-hidden">
          <CardHeader className="border-b bg-muted/30">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Question {currentIndex + 1}
              </span>
              <span className="text-xs text-muted-foreground">
                Progress: {currentIndex + 1} / {totalQuestions}
              </span>
            </div>
            <CardTitle className="text-xl md:text-2xl font-medium leading-relaxed mt-4">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow p-6 md:p-8">
            <RadioGroup 
              value={selectedOption?.toString() || ""} 
              onValueChange={(val) => onSelect(parseInt(val))}
              className="space-y-4"
            >
              {question.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                
                return (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => onSelect(idx)}
                    className={`
                      flex items-center space-x-3 p-4 rounded-xl border-2 transition-all cursor-pointer group
                      ${isSelected ? 
                        "border-primary bg-primary/5 shadow-md" : 
                        "border-muted hover:border-primary/40 hover:bg-muted/50"}
                    `}
                  >
                    <RadioGroupItem value={idx.toString()} id={`opt-${idx}`} className="hidden" />
                    <div className={`
                      w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors
                      ${isSelected ? 
                        "bg-primary text-white" : 
                        "bg-muted group-hover:bg-primary/10 group-hover:text-primary"}
                    `}>
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <Label className="flex-grow cursor-pointer text-lg font-normal leading-snug">
                      {option}
                    </Label>
                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    )}
                  </motion.div>
                );
              })}
            </RadioGroup>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
