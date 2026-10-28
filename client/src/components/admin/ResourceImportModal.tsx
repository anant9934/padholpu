import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import {
  FileSpreadsheet,
  Upload,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  FileCode,
  BookOpen,
} from "lucide-react";

interface ResourceImportModalProps {
  onImportSuccess?: () => void;
  defaultSubjectCode?: string;
}

const SAMPLE_CSV = `subjectCode,programmeCode,unitNumber,resourceType,title,description,sourceProvenance,publicationStatus,modelAnswer,contextScenario,statuteOrCitation
LAW101,BALLB,1,Legal Case Brief,Doctrine of Precedent & Stare Decisis,Analysis of judicial hierarchy in India,OFFICIAL_SYLLABUS,published,"Under the Indian judicial system, higher court rulings bind lower courts pursuant to Article 141.",The appellate jurisdiction of the High Court and Supreme Court of India.,Article 141 of Constitution of India
LAW103,BALLB,1,Case Study,Strict Liability in Industrial Hazards,Application of Rylands v Fletcher in environmental torts,ADMIN_CURATED,published,"The rule of strict liability imposes liability without fault when hazardous things escape from land.",Escape of industrial effluents into adjacent agricultural soil.,Rylands v Fletcher (1868) LR 3 HL 330
MGT101,BBA,1,Notes,Fayol's 14 Principles of Management,Core operational guidelines for organizational leadership,OFFICIAL_SYLLABUS,published,"","Henri Fayol outlined 14 principles including division of labor and unity of command.",
PHY101,BSC-PHYSICS,1,Formula Sheet,Lorentz Transformations and Special Relativity,Coordinate equations between inertial reference frames,ADMIN_CURATED,published,"","x' = gamma(x - vt), t' = gamma(t - vx/c^2)",`;

const SAMPLE_JSON = `[
  {
    "subjectCode": "LAW101",
    "programmeCode": "BALLB",
    "unitNumber": 1,
    "resourceType": "Legal Case Brief",
    "title": "Doctrine of Precedent and Ratio Decidendi",
    "description": "Comprehensive notes on binding precedents under Article 141.",
    "sourceProvenance": "OFFICIAL_SYLLABUS",
    "publicationStatus": "published",
    "modelAnswer": "Article 141 mandates that law declared by Supreme Court shall be binding on all courts.",
    "statuteOrCitation": "Article 141; Union of India v. Raghubir Singh (1989)"
  },
  {
    "subjectCode": "MGT101",
    "programmeCode": "BBA",
    "unitNumber": 1,
    "resourceType": "MCQ",
    "title": "Which management function involves measuring actual performance against goals?",
    "optionA": "Planning",
    "optionB": "Organizing",
    "optionC": "Controlling",
    "optionD": "Leading",
    "correctOption": "C",
    "explanation": "Controlling is the systematic process of monitoring performance and taking corrective actions."
  }
]`;

export function ResourceImportModal({ onImportSuccess, defaultSubjectCode }: ResourceImportModalProps) {
  const [open, setOpen] = useState(false);
  const [inputFormat, setInputFormat] = useState<"csv" | "json">("csv");
  const [inputText, setInputText] = useState("");
  const [validating, setValidating] = useState(false);
  const [applying, setApplying] = useState(false);
  const [validationResult, setValidationResult] = useState<any>(null);
  const { toast } = useToast();

  const handleLoadSample = () => {
    setInputText(inputFormat === "csv" ? SAMPLE_CSV : SAMPLE_JSON);
    setValidationResult(null);
  };

  const parseInput = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) throw new Error("Please enter resource data to validate.");

    if (inputFormat === "json" || trimmed.startsWith("[") || trimmed.startsWith("{")) {
      const parsed = JSON.parse(trimmed);
      return Array.isArray(parsed) ? parsed : [parsed];
    }

    // CSV parser
    const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);
    if (lines.length < 2) {
      throw new Error("CSV requires a header row and at least one data row.");
    }

    // Basic CSV header split
    const headers = lines[0].split(",").map((h) => h.trim().replace(/^["']|["']$/g, ""));
    const rows = [];

    for (let i = 1; i < lines.length; i++) {
      // Split preserving simple commas
      const values = lines[i].split(",").map((v) => v.trim().replace(/^["']|["']$/g, ""));
      const obj: Record<string, any> = {};
      headers.forEach((h, idx) => {
        obj[h] = values[idx] !== undefined ? values[idx] : "";
      });
      rows.push(obj);
    }
    return rows;
  };

  const handleValidate = async () => {
    try {
      setValidating(true);
      setValidationResult(null);
      const rows = parseInput(inputText);

      const res = await apiRequest("POST", "/api/academic/resources/validate-import", { rows });
      const data = await res.json();
      setValidationResult(data);

      if (data.valid) {
        toast({
          title: "Resources Validated",
          description: `All ${data.totalRows} resource(s) are valid and ready for transactional import.`,
        });
      } else {
        toast({
          title: "Validation Issues Found",
          description: `Found ${data.errorRowsCount} error(s) in resource batch. Please inspect.`,
          variant: "destructive",
        });
      }
    } catch (err: any) {
      toast({
        title: "Validation Error",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setValidating(false);
    }
  };

  const handleApply = async () => {
    if (!validationResult || !validationResult.valid) return;
    try {
      setApplying(true);
      const rows = parseInput(inputText);
      const res = await apiRequest("POST", "/api/academic/resources/apply-import", { rows });
      const data = await res.json();

      toast({
        title: "Resources Imported Successfully",
        description: `Imported ${data.appliedCount} items (${data.createdNotes} notes/guides, ${data.createdMCQs} MCQs, ${data.createdSubjective} subjective answers, ${data.createdFlashcards} flashcards).`,
      });

      setOpen(false);
      setInputText("");
      setValidationResult(null);
      if (onImportSuccess) onImportSuccess();
    } catch (err: any) {
      toast({
        title: "Import Execution Failed",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setApplying(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" size="sm" className="gap-1.5 bg-[#9A6205] hover:bg-[#855404] text-white">
          <Upload className="w-3.5 h-3.5" /> Import Academic Resources
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-serif">
            <BookOpen className="w-5 h-5 text-[#9A6205]" />
            Import Academic Learning Resources
          </DialogTitle>
          <DialogDescription className="text-xs">
            Batch-import verified notes, MCQs, case briefs, subjective questions, formula sheets, and flashcards with pre-flight validation.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-2">
          {/* Format selection and sample actions */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-muted-foreground">Format:</span>
              <Button
                variant={inputFormat === "csv" ? "default" : "outline"}
                size="sm"
                className="text-xs h-7 px-3 gap-1"
                onClick={() => {
                  setInputFormat("csv");
                  setValidationResult(null);
                }}
              >
                <FileSpreadsheet className="w-3.5 h-3.5" /> CSV
              </Button>
              <Button
                variant={inputFormat === "json" ? "default" : "outline"}
                size="sm"
                className="text-xs h-7 px-3 gap-1"
                onClick={() => {
                  setInputFormat("json");
                  setValidationResult(null);
                }}
              >
                <FileCode className="w-3.5 h-3.5" /> JSON
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="text-xs h-7" onClick={handleLoadSample}>
              Load Verified Sample Template
            </Button>
          </div>

          {/* Input text area */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-foreground">
              Paste {inputFormat.toUpperCase()} Payload
            </label>
            <Textarea
              rows={8}
              placeholder={
                inputFormat === "csv"
                  ? "subjectCode,programmeCode,unitNumber,resourceType,title,description..."
                  : `[\n  {\n    "subjectCode": "LAW101",\n    "resourceType": "Notes",\n    "title": "Judicial Precedents"\n  }\n]`
              }
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                setValidationResult(null);
              }}
              className="font-mono text-xs bg-muted/20"
            />
          </div>

          {/* Validation Feedback & Preview */}
          {validationResult && (
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg border bg-muted/30">
                <div className="flex items-center gap-2">
                  {validationResult.valid ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                  )}
                  <div>
                    <p className="text-xs font-semibold">
                      {validationResult.valid
                        ? "Validation Passed — Ready for Transactional Import"
                        : "Validation Issues Detected"}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      Total: {validationResult.totalRows} | Valid: {validationResult.validRowsCount} | Errors:{" "}
                      {validationResult.errorRowsCount}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 text-[10px]">
                  <Badge variant="outline">Notes: {validationResult.summary?.notesCount || 0}</Badge>
                  <Badge variant="outline">MCQs: {validationResult.summary?.mcqCount || 0}</Badge>
                  <Badge variant="outline">Subjective: {validationResult.summary?.subjectiveCount || 0}</Badge>
                  <Badge variant="outline">Case Studies: {validationResult.summary?.caseStudyCount || 0}</Badge>
                  <Badge variant="outline">Flashcards: {validationResult.summary?.flashcardCount || 0}</Badge>
                </div>
              </div>

              {/* Error list */}
              {validationResult.errors?.length > 0 && (
                <Card className="border-destructive/40 bg-destructive/5 p-3 max-h-36 overflow-y-auto">
                  <p className="text-xs font-semibold text-destructive mb-1.5">Actionable Row Errors:</p>
                  <ul className="text-[11px] space-y-1 text-destructive/90 list-disc pl-4 font-mono">
                    {validationResult.errors.map((err: any, idx: number) => (
                      <li key={idx}>
                        Row {err.row} [{err.field}]: {err.message}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* Preview Table */}
              <div className="border rounded-lg overflow-x-auto max-h-48">
                <table className="w-full text-[11px] text-left border-collapse">
                  <thead>
                    <tr className="border-b bg-muted/50 text-muted-foreground font-semibold">
                      <th className="p-2">#</th>
                      <th className="p-2">Subject</th>
                      <th className="p-2">Type</th>
                      <th className="p-2">Title</th>
                      <th className="p-2">Unit</th>
                      <th className="p-2">Provenance</th>
                      <th className="p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {validationResult.preview?.map((p: any) => (
                      <tr key={p.rowNumber} className="border-b hover:bg-muted/10">
                        <td className="p-2 font-mono">{p.rowNumber}</td>
                        <td className="p-2 font-mono font-bold text-primary">{p.subjectCode}</td>
                        <td className="p-2">{p.resourceType}</td>
                        <td className="p-2 max-w-[200px] truncate">{p.title}</td>
                        <td className="p-2 font-mono">Unit {p.unitNumber}</td>
                        <td className="p-2 text-[10px] text-muted-foreground">{p.sourceProvenance}</td>
                        <td className="p-2">
                          {p.status === "VALID" ? (
                            <Badge variant="secondary" className="text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                              VALID
                            </Badge>
                          ) : (
                            <Badge variant="destructive" className="text-[10px]">
                              INVALID
                            </Badge>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-2 pt-2 border-t">
            <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="secondary"
              size="sm"
              disabled={validating || !inputText.trim()}
              onClick={handleValidate}
              className="gap-1.5"
            >
              {validating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
              Validate Payload
            </Button>
            <Button
              variant="default"
              size="sm"
              disabled={applying || !validationResult || !validationResult.valid}
              onClick={handleApply}
              className="gap-1.5 bg-[#9A6205] hover:bg-[#855404] text-white"
            >
              {applying ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
              Apply Transactional Import
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
