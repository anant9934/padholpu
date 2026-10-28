import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@shared/routes";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Loader2, Send } from "lucide-react";
import { z } from "zod";
import { SEO } from "@/components/seo";
import { AmbientOrb } from "@/components/ui/AmbientOrb";

const contactFormSchema = api.contact.submit.input.extend({
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      category: "General Inquiry",
      subject: "",
      message: "",
      organization: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    try {
      const response = await apiRequest("POST", api.contact.submit.path, {
        ...data,
        website: "",
      });
      const result = await response.json();

      toast({
        title: "Dispatch received",
        description: `Your correspondence ticket is #${result.ticketId}. Our editorial desk will reply shortly.`,
      });
      form.reset();
    } catch (error: any) {
      const errorData = error.response ? await error.response.json() : null;
      toast({
        title: "Transmission failed",
        description:
          errorData?.message || "Could not dispatch message. Please write directly via email.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-10 pb-16 google-anno-skip">
      <SEO
        title="Contact Padho LPU — Student & Editorial Support"
        description="Get in touch with Padho LPU for curriculum inquiries, note corrections, or technical support."
        canonicalUrl="https://padholpu.online/contact"
      />

      {/* Hero statement */}
      <div className="relative text-center space-y-3 pt-6">
        <AmbientOrb
          size={360}
          className="top-[-40px] left-1/2 -translate-x-1/2 opacity-35"
        />
        <span className="section-label">Direct Correspondence</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#1a1208] dark:text-[#f0ece4]">
          Reach our editorial desk.
        </h1>
        <p className="text-sm text-[#4a3f2f] dark:text-[#c8bfb0] max-w-md mx-auto leading-relaxed">
          Questions regarding syllabus accuracy, document copyright, or platform improvements? Submit a formal inquiry below.
        </p>
      </div>

      {/* Main Form Card */}
      <div className="editorial-card p-5 sm:p-8 md:p-10 bg-[#ffffff] dark:bg-[#1c1916] space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="space-y-1.5">
                    <FormLabel className="text-xs font-medium uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0]">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <input
                        className="editorial-input h-11"
                        placeholder="Ananya Roy"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1.5">
                    <FormLabel className="text-xs font-medium uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0]">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <input
                        type="email"
                        className="editorial-input h-11"
                        placeholder="ananya@lpu.in"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="space-y-1.5">
                    <FormLabel className="text-xs font-medium uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0]">
                      Topic Category
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="editorial-input h-11 text-xs">
                          <SelectValue placeholder="Select topic" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#ffffff] dark:bg-[#1c1916] border border-[rgba(200,131,10,0.25)] rounded-xl">
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        <SelectItem value="Material Correction">Syllabus Correction</SelectItem>
                        <SelectItem value="Platform Feedback">Platform Suggestion</SelectItem>
                        <SelectItem value="Account Support">Account Support</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="space-y-1.5">
                    <FormLabel className="text-xs font-medium uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0]">
                      Subject Line
                    </FormLabel>
                    <FormControl>
                      <input
                        className="editorial-input h-11"
                        placeholder="e.g. CSE320 Unit 3 Lecture Correction"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="text-xs font-medium uppercase tracking-[0.08em] text-[#4a3f2f] dark:text-[#c8bfb0]">
                    Message Detail
                  </FormLabel>
                  <FormControl>
                    <textarea
                      rows={5}
                      className="editorial-input h-auto py-3 leading-relaxed"
                      placeholder="Please provide specifics including course code, paper year, or relevant links..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agreeToTerms"
              render={({ field }) => (
                <FormItem className="flex items-start gap-2.5 pt-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-0.5 border-[rgba(200,131,10,0.4)] data-[state=checked]:bg-[#c8830a] data-[state=checked]:border-[#c8830a]"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-xs text-[#8a7a66] cursor-pointer">
                      I certify that this submission respects academic integrity guidelines.
                    </FormLabel>
                    <FormMessage className="text-xs text-red-500" />
                  </div>
                </FormItem>
              )}
            />

            <div className="pt-3">
              <button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="btn-primary w-full h-11 text-xs"
              >
                {form.formState.isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 mr-1.5" /> Dispatch Correspondence
                  </>
                )}
              </button>
            </div>
          </form>
        </Form>
      </div>

      {/* Direct Correspondence alternative */}
      <div className="text-center space-y-1 text-xs text-[#8a7a66]">
        <p>Prefer direct email communication without filing a ticket?</p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <a
            href="mailto:padholpuonline@gmail.com"
            className="text-[#c8830a] hover:underline font-medium inline-flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" /> padholpuonline@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}