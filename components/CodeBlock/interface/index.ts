import { CSSProperties } from "react";

export interface CodeBlockProps { 
  codeContent: string | string[];
  style?: {
    [key: string]: CSSProperties;
  };
  language?: string;
  showLineNumbers?: boolean;
  customStyle?: CSSProperties;
  width?: {
    default: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    xl2?: string;
  } | string;
}
