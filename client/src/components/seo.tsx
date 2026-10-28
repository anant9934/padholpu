import { useEffect } from "react";
import { SITE_CONFIG } from "@/lib/site-config";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  canonicalUrl?: string;
  breadcrumbs?: BreadcrumbItem[];
  noindex?: boolean;
  structuredData?: Record<string, any>[] | Record<string, any>;
}

export function SEO({ 
  title, 
  description, 
  keywords, 
  image = SITE_CONFIG.defaultOgImage, 
  url,
  canonicalUrl,
  breadcrumbs,
  noindex = false,
  structuredData,
}: SEOProps) {
  // Normalize canonical URL to strictly use primary domain: https://padholpu.online
  const resolveCanonical = (): string => {
    let raw = canonicalUrl || url || "/";
    if (raw.startsWith("http")) {
      // Replace legacy domains with canonical padholpu.online
      raw = raw
        .replace(/^https?:\/\/(www\.)?studylpu\.online/, SITE_CONFIG.primaryDomain)
        .replace(/^https?:\/\/(www\.)?padholpu\.info/, SITE_CONFIG.primaryDomain);
      return raw;
    }
    const cleanPath = raw.startsWith("/") ? raw : `/${raw}`;
    return `${SITE_CONFIG.primaryDomain}${cleanPath}`;
  };

  const targetUrl = resolveCanonical();

  useEffect(() => {
    const seoTitle = title 
      ? (title.includes(SITE_CONFIG.brandName) ? title : `${title} | ${SITE_CONFIG.brandName}`)
      : SITE_CONFIG.defaultTitle;
    const seoDescription = description || SITE_CONFIG.description;
    
    // Combine keywords from platform cluster
    const clusterKeywords = Object.values(SITE_CONFIG.keywordClusters)
      .flat()
      .slice(0, 8)
      .join(", ");
    const seoKeywords = keywords ? `${keywords}, ${clusterKeywords}` : clusterKeywords;

    // 1. Update Document Title
    document.title = seoTitle;

    // Helper for meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (property) el.setAttribute("property", name);
        else el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // 2. Robots
    updateMeta("robots", noindex ? "noindex, nofollow" : "index, follow");

    // 3. Primary Metadata
    updateMeta("description", seoDescription);
    updateMeta("keywords", seoKeywords);
    updateMeta("author", "Padho LPU Team");

    // 4. Open Graph
    updateMeta("og:site_name", SITE_CONFIG.brandName, true);
    updateMeta("og:title", seoTitle, true);
    updateMeta("og:description", seoDescription, true);
    updateMeta("og:url", targetUrl, true);
    updateMeta("og:image", image, true);
    updateMeta("og:type", "website", true);

    // 5. Twitter Card
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", seoTitle);
    updateMeta("twitter:description", seoDescription);
    updateMeta("twitter:image", image);
    updateMeta("twitter:url", targetUrl);

    // 6. Strict Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", targetUrl);

    // 7. Structured Data: Organization & WebSite JSON-LD
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": SITE_CONFIG.brandName,
      "alternateName": SITE_CONFIG.oldBrandName,
      "url": SITE_CONFIG.primaryDomain,
      "logo": SITE_CONFIG.defaultOgImage,
      "description": SITE_CONFIG.description,
      "sameAs": [
        "https://github.com/anant9934/Study-lpu"
      ]
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": SITE_CONFIG.brandName,
      "url": SITE_CONFIG.primaryDomain,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${SITE_CONFIG.primaryDomain}/resources?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };

    const schemas: any[] = [organizationSchema, websiteSchema];

    // Optional BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url.startsWith("http")
            ? crumb.url
            : `${SITE_CONFIG.primaryDomain}${crumb.url.startsWith("/") ? "" : "/"}${crumb.url}`
        }))
      });
    }

    // Custom Page Structured Data (Course, Article, Quiz, FAQ, etc.)
    if (structuredData) {
      if (Array.isArray(structuredData)) {
        schemas.push(...structuredData);
      } else {
        schemas.push(structuredData);
      }
    }

    let scriptEl = document.querySelector('script[data-schema="padho-lpu-jsonld"]');
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.setAttribute("type", "application/ld+json");
      scriptEl.setAttribute("data-schema", "padho-lpu-jsonld");
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(schemas);

  }, [title, description, keywords, image, targetUrl, noindex, breadcrumbs, structuredData]);

  return null;
}
export default SEO;
