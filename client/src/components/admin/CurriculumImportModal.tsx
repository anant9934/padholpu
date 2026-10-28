import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import {
  Upload,
  CheckCircle2,
  AlertTriangle,
  FileCode,
  FileSpreadsheet,
  Download,
  Loader2,
  ArrowRight,
} from "lucide-react";

interface CurriculumImportModalProps {
  onImportSuccess?: () => void;
}

const SAMPLE_CSV = `programmeCode,semester,subjectCode,subjectName,credits,category,discipline
BALLB,2,LAW103,Family Law I,4,Core,LAW
BALLB,2,LAW104,Law of Crimes I (IPC),4,Core,LAW
BBA,2,MGT201,Marketing Management,3,Core,MANAGEMENT
BSC-AGRI,2,AGR201,Crop Physiology & Metabolism,4,Core,AGRICULTURE
BSC-PHYSICS,2,PHY201,Electricity & Magnetism,4,Core,SCIENCES`;

const SAMPLE_JSON = JSON.stringify(
  [
    {
      programmeCode: "BALLB",
      semester: 2,
      subjectCode: "LAW103",
      subjectName: "Family Law I",
      credits: 4,
      category: "Core",
      discipline: "LAW",
    },
    {
      programmeCode: "BALLB",
      semester: 2,
      subjectCode: "LAW104",
      subjectName: "Law of Crimes I (IPC)",
      credits: 4,
      category: "Core",
      discipline: "LAW",
    },
    {
      programmeCode: "BBA",
      semester: 2,
      subjectCode: "MGT201",
      subjectName: "Marketing Management",
      credits: 3,
      category: "Core",
      discipline: "MANAGEMENT",
    },
  ],
  null,
  2
);

export function CurriculumImportModal({ onImportSuccess }: CurriculumImportModalProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [validating, setValidating] = useState(false);
  const [applying, setApplying] = useState(false);
  const [validationResult, setValidationResult] = useState<any>(null);

  // Parse raw text as CSV or JSON
  const parseInput = (raw: string): any[] => {
    const trimmed = raw.trim();
    if (!trimmed) throw new Error("Please enter curriculum data in CSV or JSON format.");

    if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
      const parsed = JSON.parse(trimmed);
      return Array.isArray(parsed) ? parsed : [parsed];
    }

    // Parse CSV
    const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);
    if (lines.length < 2) {
      throw new Error("CSV requires a header row and at least one data row.");
    }

    const headers = lines[0].split(",").map((h) => h.trim().replace(/^["']|["']$/g, ""));
    const rows = [];

    for (let i = 1; i < lines.length; i++) {
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

      const res = await apiRequest("POST", "/api/academic/curriculum/validate-import", { rows });
      const data = await res.json();
      setValidationResult(data);

      if (data.valid) {
        toast({
          title: "Curriculum Validated",
          description: `All ${data.totalRows} row(s) are valid and ready for transactional import.`,
        });
      } else {
        toast({
          title: "Validation Issues Found",
          description: `Found ${data.errorRowsCount} row error(s). Please review and correct.`,
          variant: "destructive",
        });
      }
    } catch (err: any) {
      toast({
        title: "Invalid Input Format",
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
      const res = await apiRequest("POST", "/api/academic/curriculum/apply-import", { rows });
      const data = await res.json();

      toast({
        title: "Curriculum Imported Successfully",
        description: `Imported ${data.appliedCount} courses (${data.createdSubjectsCount} new subjects, ${data.createdMappingsCount} new mappings).`,
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
        <Button size="sm" className="gap-1.5 shadow-sm">
          <Upload className="w-3.5 h-3.5" /> Import Curriculum
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-primary/10 text-primary">
              <Upload className="w-4 h-4" />
            </span>
            <DialogTitle className="text-lg font-bold">Import Academic Curriculum</DialogTitle>
          </div>
          <DialogDescription className="text-xs text-muted-foreground">
            Batch import verified academic subjects, credit allocations, and semester mappings for university degree programmes.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Format Helper & Templates */}
          <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-muted/40 border border-border/60 text-xs">
            <span className="text-muted-foreground">Quick Templates:</span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs gap-1"
                onClick={() => setInputText(SAMPLE_CSV)}
              >
                <FileSpreadsheet className="w-3 h-3 text-emerald-600" /> Load Sample CSV
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs gap-1"
                onClick={() => setInputText(SAMPLE_JSON)}
              >
                <FileCode className="w-3 h-3 text-amber-600" /> Load Sample JSON
              </Button>
            </div>
          </div>

          {/* Raw Text Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Paste CSV or JSON payload</span>
              <span>Supported: CSV with header or JSON array</span>
            </div>
            <Textarea
              placeholder="Paste CSV (programmeCode,semester,subjectCode,subjectName,credits,category,discipline) or JSON array..."
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                setValidationResult(null);
              }}
              rows={8}
              className="font-mono text-xs leading-relaxed"
            />
          </div>

          {/* Validation Report & Preview */}
          {validationResult && (
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl border border-border/80 bg-muted/20">
                <div className="flex items-center gap-2">
                  {validationResult.valid ? (
                    <Badge variant="default" className="bg-emerald-600 text-white gap-1 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5" /> All Rows Valid
                    </Badge>
                  ) : (
                    <Badge variant="destructive" className="gap-1 text-xs">
                      <AlertTriangle className="w-3.5 h-3.5" /> Errors Found
                    </Badge>
                  )}
                  <span className="text-xs font-semibold">
                    {validationResult.validRowsCount} / {validationResult.totalRows} valid row(s)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                  <span>New Subjects: {validationResult.summary?.newSubjects || 0}</span>
                  <span>·</span>
                  <span>New Mappings: {validationResult.summary?.newMappings || 0}</span>
                </div>
              </div>

              {/* Errors List if any */}
              {validationResult.errors && validationResult.errors.length > 0 && (
                <div className="p-3 rounded-lg border border-red-500/20 bg-red-50/50 dark:bg-red-950/20 space-y-1.5 text-xs text-red-700 dark:text-red-300">
                  <p className="font-semibold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    Actionable Validation Errors:
                  </p>
                  <ul className="list-disc pl-5 space-y-0.5">
                    {validationResult.errors.map((err: any, idx: number) => (
                      <li key={idx}>
                        Row {err.row}: <strong>{err.field}</strong> — {err.message}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Preview Table */}
              {validationResult.preview && validationResult.preview.length > 0 && (
                <div className="border border-border/70 rounded-lg overflow-hidden max-h-56 overflow-y-auto">
                  <table className="w-full text-left border-collapse text-[11px]">
                    <thead className="bg-muted text-muted-foreground sticky top-0">
                      <tr className="border-b">
                        <th className="p-2">#</th>
                        <th className="p-2">Prog</th>
                        <th className="p-2">Sem</th>
                        <th className="p-2">Code</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Cr</th>
                        <th className="p-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {validationResult.preview.map((p: any) => (
                        <tr key={p.rowNumber} className={p.status === "INVALID" ? "bg-red-50/30 dark:bg-red-950/10" : ""}>
                          <td className="p-2 font-mono">{p.rowNumber}</td>
                          <td className="p-2 font-mono font-bold text-primary">{p.programmeCode}</td>
                          <td className="p-2">Sem {p.semester}</td>
                          <td className="p-2 font-mono font-semibold">{p.subjectCode}</td>
                          <td className="p-2 truncate max-w-[180px]">{p.subjectName}</td>
                          <td className="p-2">{p.credits}</td>
                          <td className="p-2">
                            {p.status === "VALID" ? (
                              <span className="text-emerald-600 font-semibold inline-flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" /> Ready
                              </span>
                            ) : (
                              <span className="text-red-600 font-semibold inline-flex items-center gap-1" title={p.issues.join("; ")}>
                                <AlertTriangle className="w-3 h-3" /> Error
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>

        <DialogFooter className="gap-2 sm:gap-0 pt-2 border-t border-border/50">
          <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          {!validationResult?.valid ? (
            <Button
              size="sm"
              onClick={handleValidate}
              disabled={validating || !inputText.trim()}
              className="gap-1.5"
            >
              {validating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
              Validate &amp; Preview
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={handleApply}
              disabled={applying}
              className="bg-emerald-600 hover:bg-emerald-700 text-white gap-1.5"
            >
              {applying ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <ArrowRight className="w-3.5 h-3.5" />}
              Confirm &amp; Apply Import ({validationResult.validRowsCount} rows)
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
