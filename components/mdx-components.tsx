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

export const MDXComponents = {
  a: CustomLink,
  img: CustomImage,
};
