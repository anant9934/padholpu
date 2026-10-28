import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Loader2,
  Mail,
  Clock,
  CheckCircle2,
  MessageSquare,
  AlertCircle,
  ArrowUpRight
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function AdminSupport() {
  const { toast } = useToast();
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [resolutionText, setResolutionText] = useState("");
  const [filter, setFilter] = useState<string>("all");

  const { data: tickets, isLoading } = useQuery<any[]>({
    queryKey: ["/api/admin/support/tickets"],
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, status, resolution }: { id: number; status: string; resolution?: string }) => {
      const res = await apiRequest("PATCH", `/api/admin/support/tickets/${id}`, { status, resolution });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/support/tickets"] });
      toast({
        title: "Ticket Updated",
        description: "Status and email notification sent successfully.",
      });
      if (selectedTicket?.id) {
        // Update local selected ticket
        setSelectedTicket(null);
      }
    },
    onError: (error: Error) => {
      toast({
        title: "Update Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const filteredTickets = tickets?.filter((t: any) => 
    filter === "all" ? true : t.status === filter
  ) || [];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new": return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 uppercase text-[10px] font-bold tracking-tight">New</Badge>;
      case "reviewing": return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 uppercase text-[10px] font-bold tracking-tight">Reviewing</Badge>;
      case "resolved": return <Badge className="bg-green-100 text-green-700 hover:bg-green-100 uppercase text-[10px] font-bold tracking-tight">Resolved</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPriorityColor = (priority: string) => {
    return priority === "high" ? "text-red-500 font-bold" : "text-gray-500";
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Support Command Center</h1>
          <p className="text-gray-500 mt-1">Manage global student ticket lifecycles and resolutions.</p>
        </div>
        <div className="flex items-center bg-gray-100 p-1 rounded-xl">
          <Button 
            variant={filter === "all" ? "secondary" : "ghost"} 
            size="sm" 
            onClick={() => setFilter("all")}
            className="rounded-lg px-4"
          >
            All Tickets
          </Button>
          <Button 
            variant={filter === "new" ? "secondary" : "ghost"} 
            size="sm" 
            onClick={() => setFilter("new")}
            className="rounded-lg px-4"
          >
            New
          </Button>
          <Button 
            variant={filter === "reviewing" ? "secondary" : "ghost"} 
            size="sm" 
            onClick={() => setFilter("reviewing")}
            className="rounded-lg px-4"
          >
            In Review
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Ticket List */}
        <div className={`transition-all duration-300 ${selectedTicket ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
          <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-gray-50/50">
                  <TableRow className="border-b border-gray-100">
                    <TableHead className="py-4 font-bold text-gray-900 uppercase text-[10px] tracking-widest pl-6">Username</TableHead>
                    <TableHead className="py-4 font-bold text-gray-900 uppercase text-[10px] tracking-widest">Student</TableHead>
                    <TableHead className="py-4 font-bold text-gray-900 uppercase text-[10px] tracking-widest">Category</TableHead>
                    <TableHead className="py-4 font-bold text-gray-900 uppercase text-[10px] tracking-widest">Priority</TableHead>
                    <TableHead className="py-4 font-bold text-gray-900 uppercase text-[10px] tracking-widest">Status</TableHead>
                    <TableHead className="py-4 text-right pr-6"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTickets.map((ticket: any) => (
                    <TableRow 
                      key={ticket.id} 
                      className={`group hover:bg-white transition-colors border-b border-gray-50 cursor-pointer ${selectedTicket?.id === ticket.id ? 'bg-white' : ''}`}
                      onClick={() => {
                        setSelectedTicket(ticket);
                        setResolutionText(ticket.resolution || "");
                      }}
                    >
                      <TableCell className="py-5 pl-6">
                        <span className="font-mono text-sm font-bold text-primary">{ticket.ticketId}</span>
                        <div className="text-[10px] text-gray-400 font-medium font-sans mt-1">
                          {new Date(ticket.createdAt).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-bold text-gray-900 text-sm">{ticket.fullName}</span>
                          <span className="text-xs text-gray-500 font-medium">{ticket.email}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className="text-xs capitalize border-gray-100 bg-white text-gray-600"
                        >
                          {ticket.category.replace('_', ' ')}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className={`text-[10px] font-extrabold uppercase tracking-wide ${getPriorityColor(ticket.priority)}`}>
                          {ticket.priority}
                        </span>
                      </TableCell>
                      <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                      <TableCell className="text-right pr-6">
                        <Button variant="ghost" size="icon" className="group-hover:text-primary rounded-full transition-transform group-hover:scale-110">
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredTickets.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-20 text-gray-400">
                        No support tickets found in this queue.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Detailed View / Action Panel */}
        <AnimatePresence>
          {selectedTicket && (
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="lg:col-span-5"
            >
              <Card className="border-none shadow-2xl rounded-3xl sticky top-8 bg-white overflow-hidden">
                <CardHeader className="bg-gray-50 border-b border-gray-100 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="bg-white border-primary/20 text-primary font-bold text-[10px] uppercase">
                      Active Editor
                    </Badge>
                    <Button variant="ghost" size="sm" onClick={() => setSelectedTicket(null)} className="h-8 w-8 p-0 rounded-full">
                      ✕
                    </Button>
                  </div>
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Response Console
                  </CardTitle>
                  <CardDescription>Drafting resolution for {selectedTicket.ticketId}</CardDescription>
                </CardHeader>
                
                <CardContent className="p-6 space-y-6">
                  {/* Original Content Read-only */}
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                      <Mail className="h-3 w-3 text-gray-400" />
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Original Inquiry</span>
                    </div>
                    <p className="text-sm text-gray-800 leading-relaxed italic">"{selectedTicket.message}"</p>
                  </div>

                  <hr className="border-gray-50" />

                  {/* Quick Status Toggles */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      className={`rounded-2xl h-12 flex items-center justify-start gap-3 px-4 transition-all ${selectedTicket.status === 'reviewing' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-100 hover:border-blue-200'}`}
                      onClick={() => updateMutation.mutate({ id: selectedTicket.id, status: 'reviewing' })}
                      disabled={updateMutation.isPending}
                    >
                      <div className="h-6 w-6 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-blue-500 shadow-sm">
                        <Clock className="h-3 w-3" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wide">Set: In Review</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="rounded-2xl h-12 flex items-center justify-start gap-3 px-4 border-gray-100 hover:border-amber-200"
                      onClick={() => updateMutation.mutate({ id: selectedTicket.id, status: 'new' })}
                      disabled={updateMutation.isPending}
                    >
                      <div className="h-6 w-6 rounded-lg bg-white border border-amber-100 flex items-center justify-center text-amber-500 shadow-sm">
                        <AlertCircle className="h-3 w-3" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wide">Reset to New</span>
                    </Button>
                  </div>

                  {/* Response Area */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] font-bold text-gray-900 uppercase tracking-widest ml-1">Manual Resolution Text</label>
                      <span className="text-[10px] px-2 py-0.5 bg-green-50 text-green-700 rounded-full font-bold">Email Step 3 Enabled</span>
                    </div>
                    <Textarea 
                      placeholder="Type your official resolution here... (This will be sent to the student and visible on their tracker)"
                      className="min-h-[150px] bg-white border-gray-200 focus:ring-primary rounded-2xl text-sm leading-relaxed"
                      value={resolutionText}
                      onChange={(e) => setResolutionText(e.target.value)}
                    />
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-2xl shadow-lg shadow-primary/20 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                      onClick={() => updateMutation.mutate({ id: selectedTicket.id, status: 'resolved', resolution: resolutionText })}
                      disabled={updateMutation.isPending || !resolutionText}
                    >
                      {updateMutation.isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : (
                        <>
                          <CheckCircle2 className="h-5 w-5" />
                          Finalize & Deliver
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
