import "react";

declare module "react" {
  interface HTMLAttributes<T> {
    tw?: string;
  }

  interface ImgHTMLAttributes<T> {
    tw?: string;
  }
}
