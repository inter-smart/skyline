/**
 * JsonLd — Reusable JSON-LD structured data injector.
 *
 * Usage:
 *   import JsonLd from "@/components/common/JsonLd";
 *   import { homePageSchema } from "@/lib/schema";
 *
 *   <JsonLd schema={homePageSchema} />
 *
 * For multiple schemas on one page, pass an array:
 *   <JsonLd schema={[schemaA, schemaB]} />
 */
export default function JsonLd({ schema }) {
  // Support both a single schema object and an array of schemas.
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((s, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s, null, 2) }}
        />
      ))}
    </>
  );
}
