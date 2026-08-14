import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Maps MDX output onto the design system. Required at the project root by
 * @next/mdx for the App Router.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children, ...props }) => {
      const isInternal = typeof href === "string" && href.startsWith("/");
      if (isInternal) {
        return (
          <Link href={href} className="link">
            {children}
          </Link>
        );
      }
      return (
        <a href={href} target="_blank" rel="noreferrer" className="link" {...props}>
          {children}
        </a>
      );
    },
    ...components,
  };
}
