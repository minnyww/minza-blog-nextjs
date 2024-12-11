import Image from "next/image";
import Link from "next/link";

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const CustomImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    // @ts-ignore
    <Image
      {...props}
      width={720}
      height={400}
      className="rounded-lg"
      alt={props.alt || "Blog post image"}
    />
  );
};

const CustomUL = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <ul style={{ listStyleType: "square", marginLeft: "20px", color: "blue" }}>
    {props.children}
  </ul>
);

const CustomLI = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <li style={{ marginBottom: "10px", fontWeight: "bold" }}>{props.children}</li>
);

const CustomH1 = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <h1 style={{ color: "darkred", fontSize: "2.5rem", textAlign: "center" }}>
    {props.children}
  </h1>
);

export const MDXComponents = {
  a: CustomLink,
  img: CustomImage,
};
