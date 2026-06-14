const SITE_URL = "https://marcosranauro.com.br";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Marcos Ranauro",
      jobTitle: "Desenvolvedor Fullstack Freelancer",
      url: SITE_URL,
      sameAs: [
        "https://github.com/MarcosRanauro",
        "https://www.linkedin.com/in/marcosranauro/",
      ],
    },
    {
      "@type": "WebSite",
      name: "Marcos Ranauro",
      url: SITE_URL,
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
