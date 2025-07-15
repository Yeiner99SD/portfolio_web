interface ButtonCtaProps {
  text?: string;
  href?: string;
  className?: string;
  isRoundedFull?: boolean;
  icon?: React.ReactNode;
  scroll?: boolean;
  target?: string;
  rel?: string;
}

const ButtonCta = ({
  text = '',
  href = "",
  className = "",
  isRoundedFull = false,
  icon = null,
  target,
  rel,
}: ButtonCtaProps) => {
  const baseStyle =
    "bg-yellow-400 hover:bg-[#d5c5a7] text-black cursor-pointer px-4 py-2 font-medium transition duration-200";

  const shape = isRoundedFull ? "rounded-full" : "rounded-md";

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseStyle} ${shape} ${className}`}
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyle} ${shape} ${className}`}>
      {content}
    </button>
  );
};

export default ButtonCta;